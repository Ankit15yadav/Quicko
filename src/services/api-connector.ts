import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  HttpStatusCode,
  Method,
} from "axios";
import { router } from "expo-router";
import * as secureStorage from "expo-secure-store";
import Toast from "react-native-toast-message";

const BASE_URL = process.env.EXPO_PUBLIC_QUICKO_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export class RequestBuilder {
  private config: AxiosRequestConfig = {};

  post<T>(url: string) {
    this.config.method = "POST" as Method;
    this.config.url = url;
    return this.execute<T>();
  }

  get<T>(url: string) {
    this.config.method = "GET" as Method;
    this.config.url = url;
    return this.execute<T>();
  }

  put<T>(url: string) {
    this.config.method = "PUT" as Method;
    this.config.url = url;
    return this.execute<T>();
  }

  delete<T>(url: string) {
    this.config.method = "DELETE" as Method;
    this.config.url = url;
    return this.execute<T>();
  }

  headers(headers: Record<string, string | number>) {
    this.config.headers = {
      ...(this.config.headers || {}),
      ...headers,
    };
    return this;
  }

  body<TBody>(data: TBody) {
    this.config.data = data;
    return this;
  }

  params<TParams>(params: TParams) {
    this.config.params = params;
    return this;
  }

  async execute<T>(): Promise<T> {
    try {
      const response = await axiosInstance(this.config);
      return response.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message ?? error.message;

        throw {
          status,
          error,
          message,
          data: error.response?.data ?? null,
        };
      }
      throw new Error("An unexpected error occurred");
    }
  }
}

axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers = config.headers ?? {};

    const token = await secureStorage.getItemAsync("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

let isRefreshing = false;
let failedQueue: { resolve: Function; reject: Function }[] = [];

const ProcessQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;
    // 1 Cancelled request
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // 2️ No Network
    if (!error.response) {
      if ((originalRequest._retryCount ?? 0) < 3) {
        originalRequest._retryCount = (originalRequest._retryCount ?? 0) + 1;

        await new Promise((res) =>
          setTimeout(res, 1000 * originalRequest._retryCount),
        );
        return axiosInstance(originalRequest);
      }

      Toast.show({ text1: "No internet Connection" });
      return Promise.reject(error);
    }

    const { status } = error.response;

    // 3 Refresh Token Logic
    if (status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        });
      }
      isRefreshing = true;
      originalRequest._retry = true;

      try {
        const refreshToken = await secureStorage.getItemAsync("refreshToken");

        const response = await axios.post(
          `${BASE_URL}/api/auth/login/token/refresh`,
          { refreshToken },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        await secureStorage.setItemAsync("accessToken", accessToken);
        await secureStorage.setItemAsync("refreshToken", newRefreshToken);

        axiosInstance.defaults.headers["Authorization"] =
          `Bearer ${accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        ProcessQueue(null, accessToken);

        return axiosInstance(originalRequest);
      } catch (err: any) {
        ProcessQueue(err, null);

        await secureStorage.deleteItemAsync("accessToken");
        await secureStorage.deleteItemAsync("refreshToken");

        router.push("/(onboarding)/send-otp");

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // 4️⃣ Other errors
    if (status === HttpStatusCode.Forbidden) {
      Toast.show({ text1: "Access denied." });
    }

    if (status === HttpStatusCode.TooManyRequests) {
      Toast.show({ text1: "Too many requests." });
    }

    if (status >= HttpStatusCode.InternalServerError) {
      Toast.show({ text1: "Server error. Try again later." });
    }

    return Promise.reject(error);
  },
);

export const Request = () => new RequestBuilder();

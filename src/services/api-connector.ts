import axios, { AxiosInstance, AxiosRequestConfig, Method, } from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_QUICKO_BASE_URL;

console.log('BASE_URL:', BASE_URL);

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export class RequestBuilder {
    private config: AxiosRequestConfig = {}

    post<T>(url: string) {
        this.config.method = 'POST' as Method
        this.config.url = url
        return this.execute<T>()
    }

    get<T>(url: string) {
        this.config.method = 'GET' as Method
        this.config.url = url
        return this.execute<T>()
    }

    put<T>(url: string) {
        this.config.method = 'PUT' as Method
        this.config.url = url
        return this.execute<T>()
    }

    delete<T>(url: string) {
        this.config.method = 'DELETE' as Method
        this.config.url = url
        return this.execute<T>()
    }

    headers(headers: Record<string, string | number>) {
        this.config.headers = {
            ...(this.config.headers || {}),
            ...headers
        }
        return this
    }

    body<TBody>(data: TBody) {
        this.config.data = data
        return this
    }

    params<TParams>(params: TParams) {
        this.config.params = params
        return this
    }

    async execute<T>(): Promise<T> {
    try {
        const response = await axiosInstance(this.config);
        console.log("response from execute:")
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
        throw new Error('An unexpected error occurred');
    }
}
}


// axiosInstance.interceptors.request.use(
//     async (config) => {
//         config.headers = config.headers ?? {};

//         const token = await secureStorage.getItemAsync('accessToken');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`
//             console.log(config.headers)
//         }

//         if (process.env.NODE_ENV === "development") {
//             console.log("[API REQUEST]", config.method?.toUpperCase(), config.url);
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// )

export const Request = () => new RequestBuilder();
import { BaseToastProps, ToastConfig } from "react-native-toast-message";
import { DefaultToast } from "./partials/toast.layout";

const toastConfig: ToastConfig = {
  default: (props: BaseToastProps) => <DefaultToast {...props} />,
  success: (props: BaseToastProps) => <DefaultToast {...props} />,
  info: (props: BaseToastProps) => <DefaultToast {...props} />,
  error: (props: BaseToastProps) => <DefaultToast {...props} />,
};

export default toastConfig;

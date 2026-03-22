import { BaseToastProps, ToastConfig } from "react-native-toast-message";
import { DefaultToast, SuccessToast, } from "./partials/toast.layout";

const toastConfig: ToastConfig = {
  success: (props: BaseToastProps) => <SuccessToast {...props} />,
  default: (props: BaseToastProps) => <DefaultToast {...props} />
};

export default toastConfig

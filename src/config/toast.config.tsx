import { BaseToastProps, ToastConfig } from "react-native-toast-message";
import { SuccessToast } from "./component";

export const toastConfig: ToastConfig = {
  success: (props: BaseToastProps) => <SuccessToast {...props} />,
};

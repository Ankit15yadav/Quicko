import { INDIAN_COUNTRY_CODE } from "@src/common";
import { useThemedStyles } from "@src/common/hooks";
import { Text, View } from "react-native";
import { MESSAGES } from "../../constants";
import { getDynamicStyles, styles } from "./style";

interface IOtpSentNotice {
  phoneNumber: string;
  screenHeight: number;
}

const OtpSentNotice = ({ phoneNumber, screenHeight }: IOtpSentNotice) => {
  const { bodyText } = getDynamicStyles(screenHeight);
  const {
    bodyText: ThemedbodyText,
    container,
    phoneText,
  } = useThemedStyles((theme) => styles(theme));

  return (
    <View style={container}>
      <Text style={[ThemedbodyText, bodyText]}>{MESSAGES.OTP_SENT_NOTICE}</Text>
      <Text style={phoneText}>
        {INDIAN_COUNTRY_CODE} {phoneNumber}
      </Text>
    </View>
  );
};

export default OtpSentNotice;

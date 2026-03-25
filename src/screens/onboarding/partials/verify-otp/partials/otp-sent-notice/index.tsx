import { INDIAN_COUNTRY_CODE } from "@src/common";
import { Text, View } from "react-native";
import { MESSAGES } from "../../constants";
import { getDynamicStyles, styles } from "./style";

interface IOtpSentNotice {
  phoneNumber: string;
  screenHeight: number;
}

const OtpSentNotice = ({ phoneNumber, screenHeight }: IOtpSentNotice) => {
  const dynamicStyles = getDynamicStyles(screenHeight);

  return (
    <View style={styles.container}>
      <Text style={[styles.bodyText, dynamicStyles.bodyText]}>
        {MESSAGES.OTP_SENT_NOTICE}
      </Text>
      <Text style={styles.phoneText}>
        {INDIAN_COUNTRY_CODE} {phoneNumber}
      </Text>
    </View>
  );
};

export default OtpSentNotice;

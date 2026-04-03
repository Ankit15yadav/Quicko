import { useThemedStyles } from "@src/common/hooks";
import { CircleX } from "lucide-react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Text, TextInput, View } from "react-native";
import { styles as sendOtpStyles } from "../../styles";

interface IPhoneNumberInput {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string | undefined;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}

const PhoneNumberInput = ({
  isFocused = false,
  phoneNumber = "",
  setIsFocused,
  setPhoneNumber,
}: IPhoneNumberInput) => {
  function handleClearInput() {
    setPhoneNumber("");
  }

  const styles = useThemedStyles((theme) => sendOtpStyles(theme));

  return (
    <React.Fragment>
      <Text style={styles.inputLabel}>Mobile number</Text>
      <View
        style={[styles.inputWrapper, isFocused && styles.inputWrapperFocused]}
      >
        <Text style={styles.flagEmoji}>🇮🇳</Text>
        <View style={styles.countryCodeSeparator} />
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter mobile number"
          placeholderTextColor="rgba(255,255,255,0.2)"
          keyboardType="number-pad"
          maxLength={10}
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!!phoneNumber && (
          <CircleX onPress={handleClearInput} size={18} color={"gray"} />
        )}
      </View>
    </React.Fragment>
  );
};

export default PhoneNumberInput;

import { useThemedStyles } from "@src/common/hooks";
import SquircleCard from "@src/components/squircles/card";
import { OTPInput, OTPInputRef, SlotProps } from "input-otp-native";
import { RefObject } from "react";
import { Animated, Text, View } from "react-native";
import { getSlotStyle, styles } from "./style";

interface IOtpInputComponent {
  ref: RefObject<OTPInputRef | null>;
  onCompleteHandler: (otp: string) => void;
}

const SLOT_SIZE = 40;

const OtpInputComponent = ({ onCompleteHandler, ref }: IOtpInputComponent) => {
  return (
    <OTPInput
      ref={ref}
      maxLength={4}
      onComplete={onCompleteHandler}
      render={({ slots }) => (
        <View style={styles.slotsRow}>
          {slots.map((slot, idx) => (
            <Slot key={idx} {...slot} index={idx} />
          ))}
        </View>
      )}
    />
  );
};

export default OtpInputComponent;

function Slot({ char, isActive }: SlotProps & { index: number }) {
  const { card } = useThemedStyles((theme) => getSlotStyle(isActive, theme));

  return (
    <SquircleCard width={SLOT_SIZE} height={SLOT_SIZE + 3} style={[card]}>
      {char !== null && (
        <Animated.View>
          <Text style={styles.charText}>{char}</Text>
        </Animated.View>
      )}
    </SquircleCard>
  );
}

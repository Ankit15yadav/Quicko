import { HapticFeel } from "@src/utils";
import * as Haptic from "expo-haptics";
import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

export interface IPressableHaptic extends PressableProps {
  children: ReactNode;
  hapticFeel?: keyof typeof Haptic.ImpactFeedbackStyle;
}

const PressableHaptic = ({
  children,
  hapticFeel,
  ...props
}: IPressableHaptic) => {
  return (
    <Pressable
      onPressIn={() => {
        HapticFeel(hapticFeel);
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default PressableHaptic;

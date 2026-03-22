import MaskedView from "@react-native-masked-view/masked-view";
import PressableHaptic, {
    IPressableHaptic,
} from "@src/components/pressable-haptics";
import { squirclePath } from "@src/utils";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    useWindowDimensions,
    ViewStyle,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface SquircleButtonProps extends IPressableHaptic {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children: React.ReactNode;
}

const SquircleButton = ({
  width,
  height = 56,
  style,
  containerStyle,
  children,
  ...rest
}: SquircleButtonProps) => {
  const { width: screenWidth } = useWindowDimensions();
  const finalWidth = width ?? screenWidth - 45;

  const maskPath = squirclePath(finalWidth, height, 8);

  return (
    <MaskedView
      style={[
        { width: finalWidth, height, alignSelf: "center" },
        containerStyle,
      ]}
      maskElement={
        <Svg width={finalWidth} height={height}>
          <Path d={maskPath} fill="white" />
        </Svg>
      }
    >
      <PressableHaptic
        style={[styles.buttonContent, { width: finalWidth, height }, style]}
        {...rest}
      >
        {children}
      </PressableHaptic>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
});

export default SquircleButton;

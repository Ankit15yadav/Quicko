import MaskedView from "@react-native-masked-view/masked-view";
import { squirclePath } from "@src/utils";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SquircleCardProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  cornerRadius?: number; // kept for API compatibility, but superellipse shape is determined by exponent
  children: React.ReactNode;
}

const SquircleCard = ({
  width = 350,
  height = 500,
  style,
  children,
}: Omit<SquircleCardProps, "cornerRadius">) => {
  const maskPath = squirclePath(width, height);

  return (
    <MaskedView
      style={{ width, height }}
      maskElement={
        <Svg width={width} height={height}>
          <Path d={maskPath} fill="white" />
        </Svg>
      }
    >
      <View style={[styles.cardContent, { width, height }, style]}>
        {children}
      </View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF3F8",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
  },
  cardContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
});

export default SquircleCard;

import SquircleCard from "@src/components/squircles/card";
import { BlurView } from "expo-blur";
import React from "react";
import { Dimensions, Text } from "react-native";
import { BaseToastProps } from "react-native-toast-message";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

const size = width * 0.09;

export const DefaultToast = (props: BaseToastProps) => {
  const { text1 } = props;

  return (
    <BlurView
      experimentalBlurMethod="dimezisBlurView"
      intensity={35}
      tint="light"
      style={[styles.container, styles.blurView]}
    >
      <SquircleCard width={size} height={size} style={styles.squircleCard}>
        <Text style={[styles.quickoText, { fontSize: size * 0.26 }]}>
          <Text style={styles.textYellow}>Quic</Text>
          <Text style={styles.textGreen}>ko</Text>
        </Text>
      </SquircleCard>

      <Text style={styles.title}>{text1}</Text>
    </BlurView>
  );
};

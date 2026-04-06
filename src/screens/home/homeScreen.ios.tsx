import PressableHaptic from "@src/components/pressable-haptics";
import { fontFamily } from "@src/constants/fonts";
import { useLocation } from "@src/contexts/location";
import { getEndpoint } from "@src/endpoints";
import { Request } from "@src/services/api-connector";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BouncyDemo = () => {
  const { location } = useLocation();

  if (!location) return <Text>Loading location....</Text>;

  const parallelCalls = async () => {
    const endpoint = getEndpoint("TEMP");

    await Promise.all([
      Request().get(`${endpoint}/a1`),
      Request().get(`${endpoint}/a2`),
      Request().get(`${endpoint}/a3`),
    ]);
  };

  return (
    <View
      style={{
        borderRadius: 2,
      }}
    >
      <TouchableOpacity>
        <Text>{location?.coords?.latitude}</Text>
        <Text>{location?.coords?.longitude}</Text>
      </TouchableOpacity>

      <PressableHaptic
        style={{ marginTop: 10, width: "auto", backgroundColor: "yellow" }}
        onPress={parallelCalls}
      >
        <Text style={{ color: "red", fontSize: 20 }}>multi api calls</Text>
      </PressableHaptic>
      <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }}></Text>
    </View>
  );
};

export default BouncyDemo;

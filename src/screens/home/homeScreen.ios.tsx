import { fontFamily } from "@src/constants/fonts";
import React from "react";
import { Text, View } from "react-native";

const BouncyDemo = () => {
    return (
        <View style={{
            borderRadius: 2,
        }}>
            <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }} >

            </Text>
        </View>
    );
};

export default BouncyDemo;
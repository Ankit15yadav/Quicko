import { fontFamily } from "@src/constants/fonts";
import React from "react";
import { Text, View } from "react-native";

const BouncyDemo = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#d66464ff",
            borderRadius: 2,
        }}>
            <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }} >
                Scroll me and watch the top & bottom bounce! 🚀
            </Text>
        </View>
    );
};

export default BouncyDemo;
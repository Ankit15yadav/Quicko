import { fontFamily } from "@src/constants/fonts";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BouncyDemo = () => {

    return (
        <View style={{
            borderRadius: 2,
        }}>
            <TouchableOpacity>
                <Text>open bottom drawer</Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }} >

            </Text>
        </View>
    );
};

export default BouncyDemo;
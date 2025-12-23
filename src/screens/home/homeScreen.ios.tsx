import { fontFamily } from "@src/constants/fonts";
import { useLocationBottomDrawer } from "@src/contexts/location-bottom-drawer";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BouncyDemo = () => {

    const { open, } = useLocationBottomDrawer()

    return (
        <View style={{
            borderRadius: 2,
        }}>
            <TouchableOpacity onPress={open}>
                <Text>open bottom drawer</Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }} >

            </Text>
        </View>
    );
};

export default BouncyDemo;
import { fontFamily } from "@src/constants/fonts";
import { useLocation } from "@src/contexts/location";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BouncyDemo = () => {

    const { location } = useLocation()

    if (!location) return (<Text>Loading location....</Text>)

    return (
        <View style={{
            borderRadius: 2,
        }}>
            <TouchableOpacity>
                <Text>{location?.coords?.latitude}</Text>
                <Text>{location?.coords?.longitude}</Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: fontFamily.BlueBubble, fontSize: 12 }} >

            </Text>
        </View>
    );
};

export default BouncyDemo;
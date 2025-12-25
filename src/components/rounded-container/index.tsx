import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IWrapperProps {
    children: ReactNode,
    hideUpperRounded?: boolean,
    hideLowerRounded?: boolean,
    style?: StyleProp<ViewStyle>
}
export default function RoundedContainer({ children, hideLowerRounded, hideUpperRounded, style: css }: IWrapperProps) {
    return (
        <View style={[
            style.wrapper,
            hideUpperRounded && style.hideUpperRounded,
            hideLowerRounded && style.hideLowerRounded,
            css
        ]} >
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#32353C'
    },
    hideUpperRounded: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    hideLowerRounded: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
})
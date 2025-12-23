import { HapticFeel } from "@src/utils";
import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

interface IPressableHaptic extends PressableProps{
    children : ReactNode,
}

const PressableHaptic = ({children, onPress, ...props}:IPressableHaptic) => {
    return (
        <Pressable
            onPress={(event) => {
                HapticFeel('Light')
                onPress?.(event)
            }}
            {...props}
        >
            {children}
        </Pressable>
    )
}

export default PressableHaptic
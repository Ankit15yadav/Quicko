import { HapticFeel } from "@src/utils";
import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

interface IPressableHaptic extends PressableProps{
    children : ReactNode,
}

const PressableHaptic = ({children, ...props}:IPressableHaptic) => {
    return (
        <Pressable
            onPressOut={(event) => {
                HapticFeel()
            }}
            {...props}
        >
            {children}
        </Pressable>
    )
}

export default PressableHaptic
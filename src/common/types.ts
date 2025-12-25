import { TextStyle } from "react-native";

export interface IHeaderText {
    text: string,
    variant: "heading-1" | "heading-2" | 'base-1';
    css?: TextStyle
}

export type VariantStyles = {
    [K in IHeaderText['variant']]: TextStyle;
}
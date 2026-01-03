import RoundedContainer from "@src/components/rounded-container";
import { ChevronRight, LucideIcon } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";

export interface LocationActionItemProps {
    title: string;
    icon?: LucideIcon,
    image?: Image
    subtitle?: string;
    onPress?: () => void;
    containerStyle?: ViewStyle;
    hideUpperRounded?: boolean,
    hideLowerRounded?: boolean,
}

export default function LocationAction({
    icon: Icon,
    title,
    subtitle,
    onPress,
    containerStyle,
    hideLowerRounded,
    hideUpperRounded
}: LocationActionItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
        >
            <RoundedContainer
                style={[styles.wrapper, containerStyle]}
                hideLowerRounded={hideLowerRounded}
                hideUpperRounded={hideUpperRounded}
            >
                <View style={styles.container}>
                    <View style={styles.iconWrapper}>
                        {Icon && <Icon size={25} color={'#3DBE29'} />}
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{title}</Text>

                        {subtitle && (
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        )}
                    </View>
                    <ChevronRight size={18} color="#8B8E95" />

                </View>
            </RoundedContainer>
        </TouchableOpacity>
    );
}



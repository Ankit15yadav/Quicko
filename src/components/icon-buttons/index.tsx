import { Href, useRouter } from "expo-router";
import { LucideIcon } from "lucide-react-native";
import { ColorValue, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface ICircularButton {
    href: Href;
    Icon: LucideIcon;
    isWalleticon?: boolean;
    color?: ColorValue
}

const CircularButton = ({ Icon, href, color, isWalleticon = false }: ICircularButton) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={() => router.push(href)}
        >
            <View style={styles.walletIcon}>
                <Icon size={18} color={color ?? "white"} />
            </View>

            {isWalleticon && (
                <View style={styles.walletAmount}>
                    <Text style={styles.WalletAmountText}>₹0</Text>
                </View>
            )}
        </TouchableOpacity>

    );
};

export default CircularButton;

import { UserRound, Wallet } from "lucide-react-native";
import { ICircularButton } from "../icon-buttons";

export const RIGHT_SECTION_DATA: ICircularButton[] = [
    {
        Icon: Wallet,
        href: "/(tabs)/order-again",
        isWalleticon: true
    },
    {
        Icon: UserRound,
        href: '/(tabs)/order-again'
    }
]
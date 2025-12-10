import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Categories() {
    return (
        <Text>
            This is category page
            <Link href="/categories/search" push asChild>
                <Button>
                    Go to /categories/search
                </Button>
            </Link>
        </Text>
    )
}
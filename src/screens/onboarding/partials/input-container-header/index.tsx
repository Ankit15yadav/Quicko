import SquircleCard from "@src/components/squircles/card"
import { Image, Text, View } from "react-native"
import { styles } from "../styles"

const InputContainerHeader = () => {
    return (
        <View style={styles.brandRow}>
            <SquircleCard width={60} height={60} style={{ backgroundColor: '#f0e439ff' }} >
                <Image
                    source={require("@src/assets/images/quicko-logo.png")}
                    style={styles.logoImage}
                />
            </SquircleCard>

            <Text style={styles.brandSub}>Log in or sign up to continue</Text>
        </View>
    )
}

export default InputContainerHeader
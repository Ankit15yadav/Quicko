import HeaderText from "@src/common/header-text"
import { Pressable, StyleSheet, View } from "react-native"

const TermsAndServices = () => {
    return (
        <View style={styles.container} >
            <HeaderText variant="base-1" text="By continuing you agree to our: " />
            <Pressable>
                <HeaderText text="Terms of service" variant="base-1" />
            </Pressable>
            <HeaderText variant="base-1" text="&" />
            <Pressable>
                <HeaderText text="Privary Policy" variant="base-1" />
            </Pressable>
        </View>
    )
}

export default TermsAndServices

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        margin: 'auto',
        gap: 10,
        height: 40,
    }
})
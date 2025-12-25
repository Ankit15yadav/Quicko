import HeaderText from "@src/common/header-text";
import { Modalpadding } from "@src/common/styles";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const LocationBottomDrawerScreen = () => {

    const { replace } = useRouter();
    return (
        <View style={[Modalpadding.default, styles.wrapper]} >
            <View style={styles.container} >
                <HeaderText text="Select delivery location" variant="heading-2" />
            </View>
        </View>
    )
}

export default LocationBottomDrawerScreen;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#242529',
        minHeight: '100%'
    },
    container: {
        marginTop: 10
    }
})
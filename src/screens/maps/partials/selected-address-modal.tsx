import type * as Location from "expo-location";
import { MapPin } from "lucide-react-native";
import { Skeleton } from "moti/skeleton";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SelectedAddressPreviewProps {
    address: Location.LocationGeocodedAddress | undefined;
    isLoading: boolean;
    onChangePress?: () => void;
    onConfirmPress?: () => void;
}

type mode = 'light' | 'dark';
const theme: mode = 'light'

const SelectedAddressPreview = ({
    address,
    isLoading,
    onChangePress,
    onConfirmPress,
}: SelectedAddressPreviewProps) => {
    return (
        <Skeleton.Group show={isLoading}>
            <View style={styles.container}>
                {/* Header text */}
                <Text style={styles.headerText}>
                    {!isLoading
                        ? "Delivering your order to"
                        : "Getting your pin location..."}
                </Text>

                {/* Address row */}
                <View style={styles.addressRow}>
                    <Skeleton width={40} height={40} radius={'round'} colorMode={theme} >
                        <View style={styles.iconWrapper}>
                            <MapPin size={18} color="#F5C542" />
                        </View>
                    </Skeleton>

                    <View style={styles.addressTextWrapper}>
                        <Skeleton width={150} colorMode={theme}>
                            <Text style={styles.areaText}>
                                {address?.district ?? address?.city ?? address?.isoCountryCode}
                            </Text>
                        </Skeleton>
                        <Skeleton width={200} colorMode={theme} >
                            <Text style={styles.addressText} numberOfLines={1}>
                                {address?.street ?? address?.name ?? address?.formattedAddress}
                            </Text>
                        </Skeleton>
                    </View>

                    <Skeleton height={30} colorMode={theme}>
                        <Pressable
                            onPress={onChangePress}
                            style={({ pressed }) => [
                                styles.changeButton,
                                pressed && { opacity: 0.7 },
                            ]}
                        >
                            <Text style={styles.changeText}>Change</Text>
                        </Pressable>
                    </Skeleton>
                </View>

                {/* Confirm button */}
                <Skeleton height={50} backgroundColor="#123213" colorMode={theme}>
                    <Pressable
                        onPress={onConfirmPress}
                        style={({ pressed }) => [
                            styles.confirmButton,
                            pressed && { opacity: 0.7 },
                        ]}
                    >
                        <Text style={styles.confirmText}>Confirm location ›</Text>
                    </Pressable>
                </Skeleton>

                {/* Secondary action */}
                <Skeleton colorMode={theme} >
                    <Pressable>
                        <Text style={styles.secondaryText}>
                            Request address from someone else
                        </Text>
                    </Pressable>
                </Skeleton>
            </View>
        </Skeleton.Group>
    );
};

export default SelectedAddressPreview;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 15,
        left: 5,
        right: 5,
        backgroundColor: "#1C1C1E",
        borderRadius: 25,
        padding: 16,
        paddingBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 12,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },

    headerText: {
        color: "#CFCFCF",
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 12,
    },

    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2A2A2D",
        borderRadius: 12,
        padding: 12,
        marginBottom: 14,
    },

    iconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#3A3A3D",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    addressTextWrapper: {
        flex: 1,
        gap: 4,
    },

    areaText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 4
    },

    addressText: {
        color: "#B5B5B5",
        fontSize: 12,
        marginTop: 2,
        marginLeft: 4
    },

    changeButton: {
        backgroundColor: "#212321ff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#2E7D32"
    },

    changeText: {
        color: "#ffffffff",
        fontSize: 12,
        fontWeight: "600",
    },

    confirmButton: {
        backgroundColor: "#2E7D32",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 10,
    },

    confirmText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },

    secondaryText: {
        textAlign: "center",
        color: "#4CAF50",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 5,
    },
});

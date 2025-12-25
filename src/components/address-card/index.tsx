import RoundedContainer from "@src/components/rounded-container";
import { Home } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SavedAddressCardProps {
    title: string;
    badgeText?: string;
    address: string;
    phoneNumber?: string;
    onPress?: () => void;
}

export default function SavedAddressCard({
    title,
    badgeText,
    address,
    phoneNumber,
    onPress,
}: SavedAddressCardProps) {
    return (
        <Pressable
            onPress={onPress}
        >
            <RoundedContainer style={styles.wrapper}>
                <View style={styles.container}>

                    <View style={styles.iconWrapper}>
                        <Home size={20} color="#F5C451" />
                    </View>

                    <View style={styles.content}>
                        <View style={styles.titleRow}>
                            <Text style={styles.title}>{title}</Text>

                            {badgeText && (
                                <Text style={styles.badge}>{badgeText}</Text>
                            )}
                        </View>

                        <Text style={styles.address}>{address}</Text>

                        {phoneNumber && (
                            <Text style={styles.phone}>
                                Phone number:{" "}
                                <Text style={styles.phoneBold}>
                                    {phoneNumber}
                                </Text>
                            </Text>
                        )}
                    </View>

                </View>
            </RoundedContainer>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2B2D31',
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(245,196,81,0.15)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 6,
        marginBottom: 4,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
    badge: {
        color: '#3DBE29',
        fontSize: 8,
        fontWeight: '500',
    },
    address: {
        color: '#B3B6BC',
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 6,
    },
    phone: {
        color: '#B3B6BC',
        fontSize: 12,
    },
    phoneBold: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 10,
    },
});

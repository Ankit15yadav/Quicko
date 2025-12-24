import { useRouter } from "expo-router";
import { ChevronLeft, Share } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IPageHeader {
    name: string;
    backFn?: () => void;
    hideBackButton?: boolean;
    showShareButton?: boolean;
}

const PageHeader = ({ name, backFn, hideBackButton = false, showShareButton = true }: IPageHeader) => {
    const { back } = useRouter();

    const handleBackClick = () => {
        if (backFn) {
            backFn();
        } else {
            back();
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container} >
                <Pressable style={styles.leftSection} onPress={handleBackClick}>
                    {!hideBackButton && (
                        <ChevronLeft size={28} color="#333" />
                    )}
                </Pressable>

                <View style={styles.centerSection}>
                    <Text style={styles.headerText}>{name}</Text>
                </View>

                <View style={styles.rightSection}>
                    {showShareButton && (
                        <Pressable >
                            <Share size={15} color="#333" />
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        height: 90,
        paddingBottom: 8,
        paddingHorizontal: 10,
        zIndex: 999,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftSection: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    centerSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSection: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});

export default PageHeader;
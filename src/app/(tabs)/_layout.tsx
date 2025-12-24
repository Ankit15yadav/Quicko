import MainHeaderWrapper from "@src/components/header";
import { fontFamily } from "@src/constants/fonts";
import { HapticFeel } from "@src/utils";
import { Tabs } from "expo-router";
import { Blocks, Handbag, House, Tag } from 'lucide-react-native';
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {

    return (
            <Tabs
                screenOptions={{
                    header: () => <MainHeaderWrapper />,
                    animation: "none",
                    tabBarLabelStyle: {
                        fontSize: 10,
                        fontWeight: "900",
                        fontFamily: fontFamily.BlueBubble
                    },
                    tabBarStyle: {
                        backgroundColor: '#363636',
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                        height: 75,
                        paddingBottom: 10,
                        paddingTop: 2,
                        overflow: 'visible',
                    },
                    tabBarActiveTintColor: "orange",
                    tabBarItemStyle: {
                        position: 'relative',
                    }
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        title: "Home",
                        tabBarIcon: ({ focused, color }) => (
                            <View style={styles.iconContainer}>
                                {focused && <ActiveTabIndicator />}
                                <House size={focused ? 24 : 20} color={color} />
                            </View>
                        ),

                    }}
                    listeners={{
                        tabPress: () => HapticFeel(),
                        tabLongPress: () => {
                            HapticFeel('Soft')
                        }
                    }}
                />
                <Tabs.Screen
                    name='categories'
                    options={{
                        title: "Categories",
                        tabBarIcon: ({ focused, color }) => (
                            <View style={styles.iconContainer}>
                                {focused && <ActiveTabIndicator />}
                                <Blocks size={focused ? 24 : 20} color={color} />
                            </View>
                        ),
                    }}
                    listeners={{
                        tabPress: () => HapticFeel(),
                    }}
                />
                <Tabs.Screen
                    name='order-again'
                    options={{
                        title: "Order Again",
                        tabBarIcon: ({ focused, color }) => (
                            <View style={styles.iconContainer}>
                                {focused && <ActiveTabIndicator />}
                                <Handbag size={focused ? 24 : 20} color={color} />
                            </View>
                        ),
                    }}
                    listeners={{
                        tabPress: () => HapticFeel(),
                    }}
                />
                <Tabs.Screen
                    name='offers'
                    options={{
                        title: "Offers",
                        tabBarBadge: 5,
                        tabBarBadgeStyle: {
                            backgroundColor: '#fcc89dff',
                        },
                        tabBarIcon: ({ focused, color }) => (
                            <View style={styles.iconContainer}>
                                {focused && <ActiveTabIndicator />}
                                <Tag size={focused ? 24 : 20} color={color} />
                            </View>
                        ),
                    }}
                    listeners={{
                        tabPress: () => HapticFeel(),
                    }}
                />
            </Tabs>

    )
}


export function ActiveTabIndicator() {
    return <View style={styles.activeIndicator} />
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    activeIndicator: {
        position: 'absolute',
        top: -7,
        width: 50,
        height: 3,
        backgroundColor: 'orange',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    }
});
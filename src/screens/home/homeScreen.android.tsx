import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useUserData } from '../../hooks/useUserData';

// This file is ONLY used on Android devices
// Features Material Design: elevation, ripple effect, Android green
const HomeScreen: React.FC = () => {
    const { user, loading, error, refreshUser } = useUserData();

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#3DDC84" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity
                    style={styles.androidButton}
                    onPress={refreshUser}
                    activeOpacity={0.7}
                >
                    <Text style={styles.androidButtonText}>RETRY</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Material Design App Bar */}
            <View style={styles.appBar}>
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subtitle}>Android Material Design</Text>
            </View>

            {user && (
                <View style={styles.userCard}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatar}>{user.avatar}</Text>
                    </View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                    <View style={styles.chip}>
                        <Text style={styles.chipText}>ANDROID USER</Text>
                    </View>
                </View>
            )}

            {/* Material Design Raised Button */}
            <TouchableOpacity
                style={styles.androidButton}
                onPress={refreshUser}
                activeOpacity={0.7}
            >
                <Text style={styles.androidButtonText}>REFRESH DATA</Text>
            </TouchableOpacity>

            <Text style={styles.platformInfo}>🤖 Running on Android</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa', // Material background
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    appBar: {
        backgroundColor: '#3DDC84', // Android green
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        elevation: 4, // Material Design elevation
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.87)',
    },
    userCard: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        borderRadius: 8, // Material corner radius
        alignItems: 'center',
        elevation: 2, // Material shadow
    },
    avatarContainer: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#e0f7e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        fontSize: 36,
    },
    userName: {
        fontSize: 20,
        fontWeight: '500',
        color: '#212121', // Material dark text
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: '#757575', // Material secondary text
        marginBottom: 16,
    },
    chip: {
        backgroundColor: '#e0f7e0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    chipText: {
        color: '#1b5e20',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    androidButton: {
        backgroundColor: '#3DDC84',
        marginHorizontal: 16,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4, // Material button radius
        alignItems: 'center',
        elevation: 2,
    },
    androidButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1.25, // Material button letter spacing
    },
    platformInfo: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 14,
        color: '#757575',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#757575',
    },
    errorText: {
        fontSize: 16,
        color: '#d32f2f', // Material red
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});

export default HomeScreen;
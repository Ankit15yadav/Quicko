import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useUserData } from '../../hooks/useUserData';

// This file is ONLY used on iOS devices
// Features iOS-specific styling: SF Pro font feel, iOS blue color, iOS shadows
const HomeScreen: React.FC = () => {
    const { user, loading, error, refreshUser } = useUserData();

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.iosButton} onPress={refreshUser}>
                    <Text style={styles.iosButtonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* iOS-style header */}
            <View style={styles.header}>
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subtitle}>iOS Experience</Text>
            </View>

            {user && (
                <View style={styles.userCard}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatar}>{user.avatar}</Text>
                    </View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>iOS User</Text>
                    </View>
                </View>
            )}

            {/* iOS-style button with Apple's design language */}
            <TouchableOpacity style={styles.iosButton} onPress={refreshUser}>
                <Text style={styles.iosButtonText}>Refresh Data</Text>
            </TouchableOpacity>

            <Text style={styles.platformInfo}>📱 Running on iOS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7', // iOS system background
        paddingTop: 60, // Account for iOS status bar
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f7',
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 34, // iOS large title size
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 17,
        color: '#8e8e93', // iOS secondary text color
    },
    userCard: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 24,
        borderRadius: 14, // iOS corner radius
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f2f2f7',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        fontSize: 40,
    },
    userName: {
        fontSize: 22,
        fontWeight: '600', // iOS semi-bold
        color: '#000',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 15,
        color: '#8e8e93',
        marginBottom: 12,
    },
    badge: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    badgeText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    iosButton: {
        backgroundColor: '#007AFF', // iOS blue
        marginHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    iosButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    platformInfo: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        color: '#8e8e93',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 17,
        color: '#8e8e93',
    },
    errorText: {
        fontSize: 17,
        color: '#ff3b30', // iOS red
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});

export default HomeScreen;
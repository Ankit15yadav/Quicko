import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { useUserData } from '../../hooks/useUserData';

// This file is used when NO platform-specific file exists
// Or as a fallback for platforms like Windows, macOS, etc.
const HomeScreen: React.FC = () => {
    const { user, loading, error, refreshUser } = useUserData();

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#666" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
                <Button title="Retry" onPress={refreshUser} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen (Default)</Text>
            <Text style={styles.subtitle}>This is the fallback version</Text>

            {user && (
                <View style={styles.userCard}>
                    <Text style={styles.avatar}>{user.avatar}</Text>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                </View>
            )}

            <Button title="Refresh" onPress={refreshUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    userCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatar: {
        fontSize: 60,
        marginBottom: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        fontSize: 16,
        color: '#d32f2f',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen
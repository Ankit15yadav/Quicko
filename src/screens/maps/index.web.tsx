import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapPinLocationWeb = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Maps not supported for web platform</Text>
        </View>
    );
};

export default MapPinLocationWeb;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
        color: '#666',
        fontWeight: '600',
    }
});

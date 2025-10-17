import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function IndexTabs() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page IndexTabs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:
    {
        fontSize: 18,
        marginBottom: 12
    },
});
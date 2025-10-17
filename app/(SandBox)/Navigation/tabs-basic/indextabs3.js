import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function IndexTabs3() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page IndexTabs3</Text>
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
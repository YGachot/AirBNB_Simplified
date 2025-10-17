import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexStackHome() {
  const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page IndexStackHome</Text>
            <Button
                title="IndexStack1"
                onPress={() => router.push('/(SandBox)/Navigation/stack-basic/stack1/indexstack1')}
            />
            <Button
                title="IndexStack2"
                onPress={() => router.push('/(SandBox)/Navigation/stack-basic/stack2/indexstack2')}
            />
            <Button
                title="IndexStack3"
                onPress={() => router.push('/(SandBox)/Navigation/stack-basic/stack3/indexstack3')}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 18, marginBottom: 12 },
});
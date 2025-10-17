import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexStack() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page IndexStack</Text>
      <Button
        title="IndexStack2"
        onPress={() => router.push('/(SandBox)/Navigation/stack-basic/stack2/indexstack2')}
      /><Button
        title="Retour"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, marginBottom: 12 },
});
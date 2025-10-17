import { router } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}   >
      <Button title="Camera" onPress={() => router.push('(SandBox)/Camera')} />
      <Button title="Location" onPress={() => router.push('(SandBox)/Location')} />
    </SafeAreaView>
  );
}
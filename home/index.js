import React from 'react';
import { FlatList, View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import data from '../../../data/mockData';
import Card from '../../../components/Card';

export default function App() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Card
        item={item}
        onPress={() => {
          // pointer vers le fichier details/details.js
          router.push(`./home/details?id=${item.id}`);
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.title}>AirBNB</Text>
        {/* <Button
          title="Stack"
          onPress={() =>
            router.push('/(SandBox)/Navigation/stack-basic/indexstackhome')
          }
        />
        <Button
          title="Tabs"
          onPress={() =>
            router.push('/(SandBox)/Navigation/tabs-basic/indextabs')
          }
        /> */}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={[styles.listContent, { paddingTop: 80 + 12 }]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '800',
  },
});
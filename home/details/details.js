import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Details from '../../../../components/Details';
import Card from '../../../../components/Card';
import data from '../../../../data/mockData';

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const idParam = id;

  const singleItem = idParam ? data.find((d) => String(d.id) === String(idParam)) : null;

  if (singleItem) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.item}>
          <Details item={singleItem} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Card
              item={item}
              onPress={() => {
                // push en passant les params proprement (route relative vers ./details)
                router.push({ pathname: './details', params: { id: String(item.id) } });
              }}
            />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  item: {
    width: '100%',
    maxWidth: 720,
  },
});
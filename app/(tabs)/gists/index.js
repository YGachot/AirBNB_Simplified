import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../../components/Card';
import { useLogements } from '../../../store/Gists';

export default function GistsList() {
  const { data, loading, error } = useLogements();
  const router = useRouter(); // added router

  const [cityFilter, setCityFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    const maxPrice = priceFilter.trim() === '' ? null : Number(priceFilter);
    return data.filter((item) => {
      if (cityFilter.trim() !== '') {
        const city = String(item.city ?? item.location ?? '').toLowerCase();
        if (!city.includes(cityFilter.trim().toLowerCase())) return false;
      }
      if (maxPrice != null && !Number.isNaN(maxPrice)) {
        const itemPrice = typeof item.price === 'number' ? item.price : Number(item.price);
        if (Number.isNaN(itemPrice)) return false;
        if (itemPrice > maxPrice) return false;
      }
      return true;
    });
  }, [data, cityFilter, priceFilter]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Card item={item} onPress={() => {}} />
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.center} edges={['top']}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center} edges={['top']}>
        <Text style={styles.errorText}>Erreur : {String(error.message ?? error)}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.filters}>
        <TextInput
          value={cityFilter}
          onChangeText={setCityFilter}
          placeholder="Ville"
          style={styles.input}
        />
        <TextInput
          value={priceFilter}
          onChangeText={(t) => {
            const normalized = t.replace(',', '.').replace(/[^\d.]/g, '');
            setPriceFilter(normalized);
          }}
          placeholder="Prix max (€)"
          style={[styles.input, styles.priceInput]}
        />

        <Pressable
          style={styles.sandboxButton}
          onPress={() => router.push('../../(SandBox)/Home')}
        >
          <Text style={styles.sandboxButtonText}>Sandbox</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => String(item.id ?? item._id ?? item.url ?? index)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.center}>
            <Text>Aucun résultat.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  filters: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  priceInput: {
    width: 120,
    marginLeft: 8,
  },

  sandboxButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#0a7ea4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sandboxButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  clearButton: {
    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
  },
  clearButtonPressed: {
    backgroundColor: '#d1d5db',
  },
  clearText: {
    color: '#111',
    fontWeight: '600',
  },
  listContent: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  item: {
    width: '100%',
    maxWidth: 820,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#c00',
  },
});
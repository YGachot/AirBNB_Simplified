import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function Details({ item }) {
  if (!item) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Aucune donnée.</Text>
      </View>
    );
  }

  const formatPrice = (p) => {
    if (p == null || p === '') return '—';
    return typeof p === 'number' ? `${p} €` : String(p);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      ) : null}

      <Text style={styles.title}>{item.title ?? `Item ${item.id ?? ''}`}</Text>

      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.key}>Ville</Text>
          <Text style={styles.value}>{item.city ?? '—'}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.key}>Prix</Text>
          <Text style={styles.value}>{formatPrice(item.price)}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'stretch',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'left',
  },
  info: {
    width: '100%',
  },
  row: {
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  key: {
    fontSize: 12,
    color: '#666',
  },
  value: {
    marginTop: 4,
    fontSize: 16,
    color: '#111',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    color: '#999',
  },
});
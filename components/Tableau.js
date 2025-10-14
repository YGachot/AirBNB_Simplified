import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Tableau({ data = [] }) {
  const renderItem = ({ item }) => {
    const initial = item.nom ? item.nom.charAt(0).toUpperCase() : '?';
    return (
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{item.nom}</Text>
          <Text style={styles.meta}>Âge : {item.age}</Text>
          <Text style={styles.telephone}>Tél : {item.telephone}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  listContent: {
    paddingVertical: 12,
  },
  separator: {
    height: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  meta: {
    color: '#6B7280',
    fontSize: 13,
    marginBottom: 2,
  },
  telephone: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '600',
  },
  chevron: {
    color: '#C7C7CC',
    fontSize: 22,
    marginLeft: 8,
  },
  empty: {
    textAlign: 'center',
    color: '#9CA3AF',
    paddingTop: 12,
  },
});
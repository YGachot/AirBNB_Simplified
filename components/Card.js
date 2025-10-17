import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

function resolveImageUri(item) {
  // Try common keys and handle arrays/objects and protocol-relative URLs
  const candidates = [
    item.image,
    item.photo,
    Array.isArray(item.photos) ? item.photos[0] : undefined,
    item.picture,
    item.thumbnail,
    item.imageUrl,
    item.url,
  ];

  for (const c of candidates) {
    if (!c) continue;
    // if c is object like { url: '...' } or { src: '...' }
    if (typeof c === 'object') {
      if (typeof c.url === 'string') return normalize(c.url);
      if (typeof c.src === 'string') return normalize(c.src);
      continue;
    }
    if (typeof c === 'string') return normalize(c);
  }
  return null;

  function normalize(u) {
    if (!u) return null;
    // add https: for protocol-relative URLs
    if (u.startsWith('//')) return 'https:' + u;
    return u;
  }
}

export default function Card({ item, onPress, style }) {
  if (!item) return null;

  const imageUri = resolveImageUri(item);
  const cardWidth = Math.min(SCREEN_WIDTH * 0.92, 820);

  const formatPrice = (p) => {
    if (p == null || p === '') return '—';
    return typeof p === 'number' ? `${p} €` : String(p);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }, style]}
      activeOpacity={0.88}
      onPress={onPress}
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>No image</Text>
        </View>
      )}

      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title ?? `Logement ${item.id ?? ''}`}
          </Text>
          <Text style={styles.price}>{formatPrice(item.price)}</Text>
        </View>

        <Text style={styles.sub}>{item.city ?? item.location ?? '—'}{item.country ? ` · ${item.country}` : ''}</Text>

        {item.description ? (
          <Text style={styles.desc} numberOfLines={3}>
            {item.description}
          </Text>
        ) : null}

        <View style={styles.metaRow}>
          {item.rating ? (
            <Text style={styles.meta}>⭐ {String(item.rating)}</Text>
          ) : null}
          {item.guests ? <Text style={styles.meta}>👥 {String(item.guests)}</Text> : null}
          {item.host ? <Text style={styles.meta}>👤 {item.host.name ?? item.host}</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#eee',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#999',
  },
  info: {
    padding: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    flex: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  sub: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  meta: {
    fontSize: 12,
    color: '#666',
    marginRight: 10,
  },
});
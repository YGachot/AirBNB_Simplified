import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ReviewCard({ review }) {
  const router = useRouter();
  
  const butonDetails = () => {
    router.push({
      pathname: '/(tabs)/review/details',
      params: { id: review.id.toString() },
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={butonDetails}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{review.name}</Text>
        <Text style={styles.email}>{review.email}</Text>
      </View>
      
      <Text style={styles.body} numberOfLines={3}>
        {review.body}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 6,
  },
  email: {
    fontSize: 13,
    color: '#ff0008ff',
    fontWeight: '500',
  },
  body: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
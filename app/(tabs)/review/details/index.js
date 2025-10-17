import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useReviewStore } from '../../../../store/reviewStore';

export default function ReviewDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { reviews, responses, addResponse } = useReviewStore();
  const [responseText, setResponseText] = useState('');

  const review = reviews.find((r) => r.id.toString() === id);
  const savedResponse = responses[id] || '';

  if (!review) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Avis introuvable</Text>
      </SafeAreaView>
    );
  }

  const submitResponse = () => {
    if (responseText.trim()) {
      addResponse(review.id, responseText);
      setResponseText('');
    }
  };

  const data = [{ key: 'content' }];

  const renderContent = () => (
    <>
      <View style={styles.header}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${review.email}` }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>{review.name}</Text>
          <Text style={styles.email}>{review.email}</Text>
        </View>
      </View>
      
      <Text style={styles.body}>{review.body}</Text>

      {savedResponse && (
        <View style={styles.savedResponse}>
          <Text style={styles.label}>Réponse :</Text>
          <Text>{savedResponse}</Text>
        </View>
      )}

      <Text style={styles.label}>Répondre :</Text>
      <TextInput
        style={styles.input}
        placeholder="Votre réponse..."
        value={responseText}
        onChangeText={setResponseText}
        multiline
      />
      <Pressable
        style={[styles.button, !responseText.trim() && styles.buttonDisabled]}
        onPress={submitResponse}
        disabled={!responseText.trim()}
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </Pressable>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Text>Retour</Text>
      </Pressable>

      <FlatList
        data={data}
        renderItem={renderContent}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  back: {
    padding: 16,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#ff0008ff',
  },
  body: {
    marginBottom: 24,
    lineHeight: 20,
  },
  savedResponse: {
    padding: 12,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
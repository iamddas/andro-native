import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>
        This is a demo React Native app built with Expo Router for navigation testing.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tech Stack</Text>
        <Text style={styles.cardItem}>React Native</Text>
        <Text style={styles.cardItem}>Expo Router</Text>
        <Text style={styles.cardItem}>TypeScript</Text>
      </View>

      <Link href="/" asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  cardItem: {
    fontSize: 14,
    color: '#666',
    paddingLeft: 8,
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

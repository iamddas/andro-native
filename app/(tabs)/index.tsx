import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Debasish</Text>
      <Text style={styles.subtitle}>Welcome to the app!</Text>

      <View style={styles.navSection}>
        <Text style={styles.sectionTitle}>Navigate to:</Text>

        <Link href="/notes" asChild>
          <Pressable style={styles.navButton}>
            <Text style={styles.navButtonText}>Notes</Text>
          </Pressable>
        </Link>

        <Link href="/about" asChild>
          <Pressable style={styles.navButton}>
            <Text style={styles.navButtonText}>About</Text>
          </Pressable>
        </Link>

        <Link href="/modal" asChild>
          <Pressable style={[styles.navButton, styles.modalButton]}>
            <Text style={styles.navButtonText}>Open Modal</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 40,
  },
  navSection: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  navButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  modalButton: {
    backgroundColor: '#6c5ce7',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

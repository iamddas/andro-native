import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen</Text>
      <Text style={styles.description}>
        This is a modal that slides up from the bottom. You can use modals for confirmations, forms, or detail views.
      </Text>

      <Link href="/" dismissTo asChild>
        <Pressable style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>Dismiss</Text>
        </Pressable>
      </Link>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  dismissButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  dismissButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

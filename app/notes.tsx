import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const DUMMY_NOTES = [
  { id: '1', title: 'Shopping List', preview: 'Milk, eggs, bread...' },
  { id: '2', title: 'Meeting Notes', preview: 'Discuss Q1 roadmap...' },
  { id: '3', title: 'Ideas', preview: 'Build a weather app...' },
  { id: '4', title: 'Reminders', preview: 'Call dentist on Monday...' },
];

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>

      {DUMMY_NOTES.map((note) => (
        <View key={note.id} style={styles.noteCard}>
          <Text style={styles.noteTitle}>{note.title}</Text>
          <Text style={styles.notePreview}>{note.preview}</Text>
        </View>
      ))}

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
    marginBottom: 20,
  },
  noteCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  notePreview: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  backButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

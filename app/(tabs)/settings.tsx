import { StyleSheet, View, Text, Switch } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.section}>
        <SettingRow
          label="Notifications"
          value={notifications}
          onToggle={setNotifications}
        />
        <SettingRow
          label="Dark Mode"
          value={darkMode}
          onToggle={setDarkMode}
        />
        <SettingRow
          label="Analytics"
          value={analytics}
          onToggle={setAnalytics}
        />
      </View>

      <Text style={styles.version}>App Version 1.0.0</Text>
    </View>
  );
}

function SettingRow({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: (val: boolean) => void;
}) {
  return (
    <View style={styles.settingRow}>
      <Text style={styles.settingLabel}>{label}</Text>
      <Switch value={value} onValueChange={onToggle} trackColor={{ true: '#0a7ea4' }} />
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
    marginBottom: 32,
  },
  section: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: '#1a1a2e',
  },
  version: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 13,
  },
});

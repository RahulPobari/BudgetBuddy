import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { spacingY } from '@/constants/theme';

const SettingsModal = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <ScreenWrapper style={{ backgroundColor: '#171717', paddingTop: 10 }}>
      <View style={styles.container}>
        <Header title="Settings" leftIcon={<BackButton />} style={{ marginBottom: spacingY._10 }} />

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? '#4CAF50' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Dark Mode</Text>
          <Switch
            value={true}
            disabled={true}
            thumbColor={'#4CAF50'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Currency</Text>
          <Text style={styles.settingSubText}>INR (₹)</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Language</Text>
          <Text style={styles.settingSubText}>English</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingY._20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
  settingSubText: {
    fontSize: 14,
    color: '#aaa',
  },
});
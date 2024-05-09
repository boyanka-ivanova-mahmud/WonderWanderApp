import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkModeContext } from './DarkModeContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Correct use of context
  const navigation = useNavigation();
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');

  useEffect(() => {
    // Load settings from AsyncStorage
    const loadSettings = async () => {
      try {
        const notificationSetting = await AsyncStorage.getItem('notificationSetting');
        if (notificationSetting !== null) {
          setNotificationEnabled(JSON.parse(notificationSetting));
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    // Update button background color based on dark mode status
    setButtonBackgroundColor(isDarkMode ? 'green' : 'lightgreen');
  }, [isDarkMode]);

  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('notificationSetting', JSON.stringify(notificationEnabled));
      Alert.alert('Settings Saved', 'Your settings have been saved successfully.');
    } catch (error) {
      Alert.alert('Error Saving Settings', 'There was an error saving your settings. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('./assets/winter.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? 'green' : 'lightgreen' }]}>
          <Text style={{ color: isDarkMode ? 'black' : 'white' }}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? 'green' : 'lightgreen' }]}>
          <Text style={{ color: isDarkMode ? 'black' : 'white' }}>Notifications</Text>
          <Switch value={notificationEnabled} onValueChange={toggleNotification} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PolicyScreen')}>
          <View style={[styles.settingItem, { backgroundColor: isDarkMode ? 'green' : 'lightgreen' }]}>
            <Text style={[styles.policyText, { color: isDarkMode ? 'black' : 'white' }]}>
              Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.saveButton, { backgroundColor: buttonBackgroundColor }]} onPress={saveSettings}>
          <Text style={[styles.saveButtonText, { color: isDarkMode ? 'black' : 'white' }]}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
  policyText: {
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
  },
  saveButton: {
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert("Грешка", "Моля, въведете вашия имейл.");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Грешка", "Моля, въведете вашата парола.");
      return;
    }
  
    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        navigation.navigate('AddScreen', { loggedIn: true });
      } else {
        Alert.alert('Грешка', 'Възникна грешка при влизане. Моля, опитайте отново.');
      }
    } catch (error) {
      console.error('Грешка при влизане:', error);
      Alert.alert('Грешка', 'Възникна грешка при влизане. Моля, опитайте отново.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="Имейл"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Парола"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Вход</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default LoginScreen;

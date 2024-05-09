import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Грешка", "Моля, попълнете всички полета.");
      return;
    }

    try {
      const response = await fetch('https://example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const responseText = await response.text();
      try {
        const data = JSON.parse(responseText);
        if (response.ok) {
          Alert.alert("Успех", "Регистрацията е успешна!");
          navigation.navigate('LoginScreen');
        } else {
          Alert.alert("Грешка при регистрация", data.message || "Неуспешна регистрация. Моля, опитайте отново.");
        }
      } catch (jsonError) {
        console.error('Грешка при парсиране на JSON:', jsonError);
        console.error('Получен отговор:', responseText);
        Alert.alert('Грешка', 'Получен е невалиден отговор от сървъра.');
      }
    } catch (networkError) {
      console.error('Грешка при регистрация:', networkError);
      Alert.alert('Грешка', 'Неуспешна регистрация. Моля, опитайте отново.');
    }
  };

  return (
    <ImageBackground source={require('./assets/9.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>Име (само за регистрация):</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Въведете вашето име"
        />
        <Text style={styles.label}>Електронна поща:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Въведете вашата електронна поща"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Парола:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Въведете вашата парола"
          secureTextEntry={true}
        />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Вход</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Регистрация</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.buttonText}>Прочети политиките за сигурност</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  button: {
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'green', 
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default RegistrationScreen;

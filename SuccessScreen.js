import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const RegistrationScreen = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Състояние за проследяване на успешната регистрация

  const handleRegistration = async () => {
    try {
      const response = await fetch('https://example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: userName,
            email: email,
            password: password,
        }),
      });

      if (response.ok) {
        setIsRegistered(true); 
        Alert.alert('Success', 'Registration successful');
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registration Screen</Text>
      <TouchableOpacity onPress={handleRegistration}>
        <Text>Register</Text>
      </TouchableOpacity>
      {isRegistered && <Text>Registration successful!</Text>}
    </View>
  );
};

export default RegistrationScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const RockFormsScreen = ({ navigation }) => {
  const navigateToSearchScreen = () => {
    navigation.navigate('SearchRockFormsScreen');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={navigateToSearchScreen}>
          <Text style={styles.buttonText}>Търси  скални формации</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateBack}>
          <Text style={styles.buttonText}>Назад</Text>
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
  button: {
    marginTop: 70, // Подходящо разстояние между бутоните
    padding: 12,
    backgroundColor: 'green',
    borderRadius: 20,
    width: '100%', // За да осигурите, че бутоните са достатъчно широки
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19, // Увеличение на размера на шрифта
  },
});

export default RockFormsScreen;

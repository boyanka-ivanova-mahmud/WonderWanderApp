import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const RockDetailScreen = ({ navigation, route }) => {
  const { distanceToRockForm } = route.params;

  return (
    <ImageBackground source={require('./assets/3.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Ученичката</Text>
        <Text style={styles.description}>
          Ученичката е впечатляваща скална формация, намираща се в Белоградчик. Тя е известна със своите уникални форми и е любима дестинация за туристи и катерачи.
        </Text>
        <Image source={require('./assets/3.jpg')} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#D5BDAF',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default RockDetailScreen;

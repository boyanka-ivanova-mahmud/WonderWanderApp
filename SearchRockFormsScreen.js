import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Audio } from 'expo-av';
import geolib from 'geolib';

const rockFormLocation = { latitude: 43.6279, longitude: 22.6766 }; // Координатите на "Ученичката"

const SearchRockFormsScreen = ({ navigation }) => {
  const [distance, setDistance] = useState(null);

  async function fetchLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Разрешението за достъп до местоположение беше отказано');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const userLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    const distanceToRockForm = calculateDistance(userLocation);
    setDistance(distanceToRockForm);
  }

  function calculateDistance(userLocation) {
    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
      console.error('User location is not defined.');
      return 0; // Return 0 or an appropriate value to indicate no distance could be calculated
    }

    return geolib.getDistance(userLocation, rockFormLocation);
  }

  const playSound = async () => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('./assets/alert.mp3'));
      await sound.playAsync();
    } catch (error) {
      console.error('Възникна грешка при възпроизвеждането на звука', error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    console.log(distance); // Добавете това, за да видите стойността на разстоянието
    if (distance !== null && distance <= 90) {
      console.log("Navigating to RockDetail"); // Това ще покаже, че се опитвате да навигирате
      playSound();
      navigation.navigate('RockDetail', { distanceToRockForm: distance });

    }
  }, [distance]);

  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlayContainer}>
        <TouchableOpacity onPress={() => Alert.alert(
          'Белоградчишки скали',
          'Белоградчишките скали са природно образувание в западната част на България. Те са популярни туристическа дестинация и предлагат невероятни гледки и възможности за планински туризъм.'
        )} style={styles.fullWidthButton}>
          <Text style={styles.buttonText}>Инфо за скалната формация</Text>
        </TouchableOpacity>
        <Image source={require('./assets/belogradchik1.jpg')} style={styles.rockFormImage} />
        {distance !== null && (
          <Text style={styles.distanceText}>Разстояние до скалната формация: {distance} метра</Text>
        )}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.fullWidthButton}>
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
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fullWidthButton: {
    width: '100%', // Заема цялата ширина на екрана
    padding: 12,
    borderRadius: 20,
    backgroundColor: 'green', // Цветът, който сте искали
    marginBottom: 20, // Добавяне на разстояние между бутоните
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  distanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 10,
    marginTop: 20,
  },
  rockFormImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default SearchRockFormsScreen;

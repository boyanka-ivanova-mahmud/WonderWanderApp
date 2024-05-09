import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const AddScreen = ({ route }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigation = useNavigation();
  const loggedIn = route.params?.loggedIn; // Получаване на статуса на вход от параметрите на маршрута

  useEffect(() => {
    if (!loggedIn) {
      // Ако потребителят не е влезнал, пренасочваме го към екрана за вход
      navigation.navigate('LoginScreen');
    }
  }, [loggedIn, navigation]);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handlePickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.cancelled) {
      setSelectedVideo(result.uri);
    }
  };

  const handleAddMedia = async () => {
    if (selectedImage || selectedVideo) {
      try {
        if (selectedImage) {
          console.log('Добавяне на снимка:', selectedImage);
          await uploadImage(selectedImage);
        }
        if (selectedVideo) {
          console.log('Добавяне на видео:', selectedVideo);
          await uploadVideo(selectedVideo);
        }
      } catch (error) {
        console.error('Грешка при добавяне:', error);
        Alert.alert('Грешка', 'Възникна грешка при добавяне на медия.');
      }
    } else {
      Alert.alert('Грешка', 'Моля, изберете снимка или видео за добавяне.');
    }
  };

  return (
    <ImageBackground source={require('./assets/bel.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handlePickImage}>
          <Text style={styles.buttonText}>Избери снимка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePickVideo}>
          <Text style={styles.buttonText}>Избери видео</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddMedia}>
          <Text style={styles.buttonText}>Добави медия и информация</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'green',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default AddScreen;

import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, Platform, PermissionsAndroid,TouchableOpacity } from 'react-native';

const MediaUploader = () => {
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState('');
  const [impressions, setImpressions] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [media, setMedia] = useState(null);

  const pickImage = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Разрешение за достъп до галерията',
            message: 'Позволете на приложението достъп до вашата галерия, за да изберете изображение.',
            buttonNeutral: 'По-късно',
            buttonNegative: 'Отхвърли',
            buttonPositive: 'Позволи',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Достъпът до галерията е отхвърлен');
          return;
        }
      }
      
      const response = await ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 1 });
      if (!response.didCancel) {
        setImage(response.uri);
      }
    } catch (error) {
      console.error('Грешка при избор на изображение:', error);
    }
  };

  const pickMedia = async () => {
    try {
      if (!media) {
        console.log('Няма медия за качване');
        return;
      }
  
      const mediaData = {
        image,
        info,
        impressions,
        recommendations
      };
  
      const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mediaData),
      });
  
      if (response.ok) {
        console.log('Медията беше успешно качена');
        setImage(null);
        setInfo('');
        setImpressions('');
        setRecommendations('');
        setMedia(response.uri);

      } else {
        console.error('Грешка при качване на медията');
      }
    } catch (error) {
      console.error('Грешка при качване на медията:', error);
    }
  };

  const handleConfirm = () => {
    if (confirmed) {
      console.log('Данните са потвърдени и изпратени към базата данни:', { info, impressions, recommendations });
      setImage(null);
      setInfo('');
      setImpressions('');
      setRecommendations('');
      setConfirmed(false);
    } else {
      console.log('Моля, потвърдете данните преди да продължите.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickMedia}>
        <Text style={styles.buttonText}>Добави медия</Text>
      </TouchableOpacity>
      {media && <Image source={{ uri: media }} style={styles.media} />}
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Избери снимка</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TextInput
           style={[styles.input, { color: 'black' }]}
          placeholder="Информация"
          value={info}
          onChangeText={text => setInfo(text)}
        />
        <TextInput
           style={[styles.input, { color: 'black' }]}
          placeholder="Впечатления"
          value={impressions}
          onChangeText={text => setImpressions(text)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Препоръки"
          value={recommendations}
          onChangeText={text => setRecommendations(text)}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={() => setConfirmed(!confirmed)}>
            <Text style={styles.buttonText}>{confirmed ? 'Потвърдено' : 'Потвърди'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Изпрати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  }  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
    },
  
  
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#D2B48C',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 18,
    color : 'black',
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  
  
  button: {
    backgroundColor: '#D2B48C',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 5,
  },
  confirmButton: {
    backgroundColor: '#D2B48C',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 10,
    
  },
  submitButton: {
    backgroundColor: '#D2B48C',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 28,
    marginVertical: 10,
    
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default MediaUploader;
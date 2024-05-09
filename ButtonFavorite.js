import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Share, Linking, ImageBackground } from 'react-native';
import { updateFavoritesStorage, getFavoriteStatusFromStorage } from './favoritesStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonFavorite = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [favoritePlaces, setFavoritePlaces] = useState([]); // Добавяне на отделен списък за любимите места

  const places = [
    { title: 'Разгледайте Белоградчишките скали и тяхната невероятна история!', url: 'https://drumivdumi.com/белоградчишки-скали/', itemId: '1' },
    { title: 'Пещера Магурата 2608 М.', url: 'https://www.btsbg.org/100nto/peshchera-magurata-2608-m', itemId: '2' },
    { title: 'Пещера Венеца', url: 'https://visitbelogradchik.com/destination-item/%D0%BF%D0%B5%D1%89%D0%B5%D1%80%D0%B0-%D0%B2%D0%B5%D0%BD%D0%B5%D1%86%D0%B0/', itemId: '3' }
  ];

  useEffect(() => {
    const loadFavorites = async () => {
      const savedFavorites = await AsyncStorage.getItem('favorites');
      setFavorites(JSON.parse(savedFavorites) || []);
    };

    loadFavorites();
    setFavoritePlaces(places.filter(place => favorites.includes(place.itemId))); // Зареждане на любимите места

    const generateRandomIndex = () => {
      return Math.floor(Math.random() * places.length);
    };

    const interval = setInterval(() => {
      const newIndex = generateRandomIndex();
      const newPlaces = [...places];
      const newLink = { 
        title: `Легенди за Белоградчишките скали`, 
        url: `https://bgnasledstvo.org/bg/%D0%BB%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B8-%D0%B7%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%87%D0%B8%D1%88%D0%BA%D0%B8%D1%82%D0%B5-%D1%81%D0%BA%D0%B0%D0%BB%D0%B8/`, 
        itemId: newIndex + 1 
      };
      newPlaces.splice(newIndex, 1, newLink);
      setPlaces(newPlaces);
    }, 30 * 60 * 1000);
  
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = async () => {
    if (!selectedItem) return;

    const newStatus = !selectedItem.isFavorite;
    setSelectedItem({ ...selectedItem, isFavorite: newStatus });

    if (newStatus) {
      setFavorites([...favorites, selectedItem.itemId]);
      setFavoritePlaces([...favoritePlaces, selectedItem]); // Добавяне на новото любимо място към списъка с любимите места
    } else {
      setFavorites(favorites.filter(itemId => itemId !== selectedItem.itemId));
      setFavoritePlaces(favoritePlaces.filter(place => place.itemId !== selectedItem.itemId)); // Премахване на любимото място от списъка с любимите места
    }

    await updateFavoritesStorage(selectedItem.itemId, newStatus);
  };

  const openLink = async () => {
    if (!selectedItem || !selectedItem.url) {
      alert("Моля, изберете място с валиден URL адрес.");
      return;
    }
  
    console.log("URL адресът за отваряне:", selectedItem.url);
  
    try {
      await Linking.openURL(selectedItem.url);
    } catch (error) {
      console.error('Грешка при отваряне на линк', error);
      alert('Възникна грешка при отварянето на линка.');
    }
  };

  const shareFavorite = async () => {
    if (!selectedItem) {
      alert("Моля, изберете място за споделяне.");
      return;
    }
  
    try {
      await Share.share({
        message: `Разгледайте ${selectedItem.title} на ${selectedItem.url}`,
      });
    } catch (error) {
      console.error('Грешка при споделяне', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/5.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {places.map(place => (
          <TouchableOpacity key={place.itemId} onPress={() => setSelectedItem(place)} style={styles.placeButton}>
            <Text style={[styles.buttonText, { color: selectedItem && selectedItem.itemId === place.itemId ? 'red' : 'white' }]}>
              {place.title} {favorites.includes(place.itemId) ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        ))}
        {selectedItem && (
          <View>
            <TouchableOpacity onPress={openLink} style={styles.button}>
              <Text style={styles.buttonText}>Отвори ➡️</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={toggleFavorite} style={styles.button}>
              <Text style={styles.buttonText}>{selectedItem.isFavorite ? 'Прeмахни от Любими' : 'Добави в Любими'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={shareFavorite} style={styles.button}>
              <Text style={styles.buttonText}>Сподели ➡️</Text>
            </TouchableOpacity>
          </View>
        )}
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
  placeButton: {
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
});

export default ButtonFavorite;

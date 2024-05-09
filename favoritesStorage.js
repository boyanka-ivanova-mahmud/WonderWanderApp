import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateFavoritesStorage = async (itemId, add) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites') || '[]';
    let favoritesArray = JSON.parse(favorites);
    if (add) {
      favoritesArray = [...favoritesArray, itemId];
    } else {
      favoritesArray = favoritesArray.filter(item => item !== itemId);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  } catch (error) {
    console.error('Error updating favorites', error);
  }
};

export const getFavoriteStatusFromStorage = async (itemId) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites') || '[]';
    const favoritesArray = JSON.parse(favorites);
    return favoritesArray.includes(itemId);
  } catch (error) {
    console.error('Error fetching favorite status', error);
    return false;
  }
};

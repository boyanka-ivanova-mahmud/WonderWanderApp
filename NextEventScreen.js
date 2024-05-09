import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventItem from './EventItem';
import { commonStyles } from './styles';

function NextEventScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('./assets/hudojestvena.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Културен календар 2024г.</Text>
          
          <EventItem 
            date="20-21 юли 2024 г."
            place="Местност „Кадъ Боаз”"
            description="Международен събор на прохода „Кадъ боаз”, с. Салаш, РБ – с. Ново Корито, РС"
          />

          <EventItem 
            date="27-28 юли 2024 г."
            description="Рали 'Белоградчишки скали'"
          />

          <EventItem 
            date="юли - август 2024 г."
            place="Художествена галерия „Вълчо Вълчев”"
            description="Трети национален конкурс за детска рисунка „Белоградчик - скалната столица на България”"
          />

          <EventItem 
            date="01 август 2024 г."
            place="с. Рабиша"
            description="Празник на село Рабиша -традиционен събор"
          />

          <EventItem 
            date="02 август 2024 г."
            place="Белоградчишка крепост"
            description="Летен фестивал „Опера на върховете "
          />

        <TouchableOpacity
          style={styles.button} // Използвайте стиловете, дефинирани в локалния styles обект
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Променен цвят на текста
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    width: '100%', // Ако искате бутона да заема цялата налична ширина
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Променен цвят на текста
    fontSize: 18,
  },
});

export default NextEventScreen;

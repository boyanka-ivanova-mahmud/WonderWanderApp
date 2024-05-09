import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventItem from './EventItem';
import { commonStyles } from './styles';

function SecondEventsScreen() {
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
            date="27 юни 2024 г."
            place="Оброчен кръст в местност „Св. Панталеймон”, с. Салаш"
            description="Празнична програма и курбан"
            textStyle={commonStyles.whiteText}
          />

          <EventItem 
            date="28 юни 2024 г."
            place="Салон на Народно читалище „Развитие – 1893”"
            description="10:00 часа – „Грозното пате” от Ханс Кристиан Андерсен; 18:00 часа – постановка „Роклята беглец”"
            textStyle={commonStyles.whiteText}
          />

          <EventItem 
            date="29 юни 2024 г."
            place="Централен площад / местност „Панаирище”"
            description="„Петровден” – Празник на град Белоградчик и провеждане на традиционен Белоградчишки панаир"
            textStyle={commonStyles.whiteText}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NextEventScreen')}
            >
              <Text style={styles.buttonText}>Следваща страница</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Назад</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: 'green',  // Зелен фон на бутоните
    padding: 10,
    borderRadius: 20,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Променен цвят на текста
    fontSize: 18,
  },
});

export default SecondEventsScreen;

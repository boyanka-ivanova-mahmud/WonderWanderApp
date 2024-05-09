import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { DarkModeContext } from './DarkModeContext'; // Уверете се, че пътят до контекста е правилен

const windowWidth = Dimensions.get('window').width;

function DetailsScreen({ navigation }) {
  const { isDarkMode } = useContext(DarkModeContext); // Използване на контекста

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}> // Промяна на фона според режима
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]} // Промяна на фона на бутоните
            onPress={() => navigation.navigate('Landmarks')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Забележителности</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
            onPress={() => navigation.navigate('RockFormsScreen')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Скални форми</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
            onPress={() => navigation.navigate('Events')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Виж Събития</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
            onPress={() => navigation.navigate('ButtonFavorite')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Любими</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
            onPress={() => navigation.navigate('AddScreen')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Добави</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
            onPress={() => navigation.navigate('StatisticsScreen')}>
            <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Статистика</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text style={[styles.buttonText, { color: isDarkMode ? 'white' : 'black' }]}>Вход/Регистрация</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  container: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: (windowWidth - 40) / 2,
  },
  buttonText: {
    fontSize: 16,
  },
  
});

export default DetailsScreen;

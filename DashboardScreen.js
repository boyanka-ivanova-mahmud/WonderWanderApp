import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
//import MyComponent from './MyComponent';
const categories = [
  { id: 'landmarks', title: 'Забележителности', count: '9693' },
  { id: 'events', title: 'Събития', count: '300' },
  { id: 'favorites', title: 'Любими', count: 'Любими обекти' },
  { id: 'settings', title: 'Настройки', count: 'Настройки и известия' },
];

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.button}
            onPress={() => navigation.navigate('CategoryScreen', { category: category.id })}
          >
            <Text style={styles.buttonText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90ee90',
  },
  buttonContainer: {
    alignItems: 'flex-start', 
    margin: 10,
  },
  button: {
    backgroundColor: '#d2b48c', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5, 
    borderRadius: 5,
    width: '80%', 
  },
  buttonText: {
    color: '#000', 
  },
});

export default DashboardScreen;

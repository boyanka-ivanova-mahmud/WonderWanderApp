import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DarkModeContext } from './DarkModeContext';  
function WelcomeScreen({ navigation }) {
  const { isDarkMode } = useContext(DarkModeContext);  

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <Text style={{ color: isDarkMode ? 'white' : 'black' }}>Welcome to WonderWanderApp</Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isDarkMode ? '#555' : 'green' }]} 
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default WelcomeScreen;

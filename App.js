import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './DashboardScreen';
import LandmarksScreen from './LandmarksScreen';
import EventsScreen from './EventsScreen';
import { DarkModeProvider} from './DarkModeContext';
import SettingsScreen from './SettingsScreen';
import RockFormsScreen from './RockFormsScreen'; 
import AddScreen from './AddScreen'; 
import StatisticsScreen from './StatisticsScreen'; 
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import ButtonFavorite from './ButtonFavorite';
import SearchRockFormsScreen from './SearchRockFormsScreen';
import SecondEventsScreen from './SecondEventsScreen';
import NextEventScreen from './NextEventScreen';
import PolicyScreen from './PolicyScreen';
import RockDetailScreen from './RockDetailScreen';
import SuccessScreen from './SuccessScreen'; 

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
    source={require('./assets/App2.jpg')} 
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.textContainer}>
      <Text style={styles.welcomeTitle}></Text>
      <Button
        title="Прочети нашата политика за сигурност и защита на данните"
        onPress={() => navigation.navigate('SettingsScreen')}
        color="#4CAF50"
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Към главната страница"
        onPress={() => navigation.navigate('Главна страница')}
        color="#4CAF50"
      />
    </View>
  </ImageBackground>
);
}

function DetailsScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/1.jpg')} style={styles.backgroundImage1}>
    <View style={styles.content}>

   
   <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RockFormsScreen')}>
        <Text style={styles.buttonText}>Скални форми</Text>
      </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('LandmarksScreen')}>
      <Text style={styles.buttonText}>Забележителности</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('EventsScreen')}>
      <Text style={styles.buttonText}>Виж Събития</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('ButtonFavorite')}>
      <Text style={styles.buttonText}>Любими</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddScreen')}>
        <Text style={styles.buttonText}>Добави</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StatisticsScreen')}>
        <Text style={styles.buttonText}>Статистика</Text>
      </TouchableOpacity>

      
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SettingsScreen')}>
    <Text style={styles.buttonText}>Настройки</Text>
    </TouchableOpacity>
      
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('RegistrationScreen')}>
    <Text style={styles.buttonText}>Регистрация</Text>
    </TouchableOpacity>
     
    <TouchableOpacity
      style={styles.backButtonContainer}
      onPress={() => navigation.goBack()}>
      <View style={styles.backButton}>
        <Text style={styles.backButtonText}>Назад</Text>
      </View>
    </TouchableOpacity>

    </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DarkModeProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen ">
        <Stack.Screen 
          name="Welcome to WonderWanderApp"
          component={WelcomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'green',
            },
          }}
        />
          
        <Stack.Screen name="Главна страница" component={DetailsScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="LandmarksScreen" component={LandmarksScreen} />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
        <Stack.Screen name="ButtonFavorite" component={ButtonFavorite} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="RockFormsScreen" component={RockFormsScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen}  />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="StatisticsScreen" component={StatisticsScreen}  />
        <Stack.Screen name="SearchRockFormsScreen" component={SearchRockFormsScreen} />
        <Stack.Screen name="SecondEventsScreen" component={SecondEventsScreen} />
        <Stack.Screen name="NextEventScreen" component={NextEventScreen} />
        <Stack.Screen name="RockDetail" component={RockDetailScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      
        </Stack.Navigator>
      </NavigationContainer>
      </DarkModeProvider>
  );}
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'space-between',  // This ensures that there is space distributed evenly
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    welcomeTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'green',
      marginBottom: 360,
    },
    buttonContainer: {
      marginBottom: 50,  
    },
  
    container: {
      flex: 1,
      backgroundColor: '#d2b48c', 
      alignItems: 'flex-start', 
      padding: 20, 
    },
    button: {
      backgroundColor: 'green', 
      marginBottom: 25, 
      width: '70%', 
      padding: 10, 
      borderRadius: 15, 
    },
    buttonText: {
      color: 'white', 
      textAlign: 'center',
      fontSize: 18,
    },
    
    backgroundImage1: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      backgroundColor: 'green', 
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 5,
    },
    backButtonText: {
      color: '#fff', // Бял текст
      fontSize: 16,
    },
    
  });
  
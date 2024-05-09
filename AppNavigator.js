import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* Ще добавя други екрани после */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text>Показване на информация за категория: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryScreen;

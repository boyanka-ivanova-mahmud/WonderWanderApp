// Във файла на EventItem.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EventItem extends Component {
  render() {
    const { date, place, description } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // прозрачен черен фон
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  date: {
    color: '#FFFFFF',  // бял текст
    fontSize: 16,
    fontWeight: 'bold',
  },
  place: {
    color: '#FFFFFF',  // бял текст
    fontSize: 14,
  },
  description: {
    color: '#FFFFFF',  // бял текст
    fontSize: 14,
  },
});

export default EventItem;

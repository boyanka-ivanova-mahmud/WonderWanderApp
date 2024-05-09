import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { fetchYearlyStatistics } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function StatisticsScreen({ navigation }) {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState('Зареждане...');

  const fetchStatistics = async () => {
    setStatusMessage('Зареждане на статистика...');
    try {
      const data = await fetchYearlyStatistics();
      setStatistics(data);
      setStatusMessage('');
      setLoading(false);
    } catch (err) {
      setError(err);
      setStatusMessage('Грешка при зареждане на статистиката.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const confirmReset = () => {
    Alert.alert(
      "Потвърждение",
      "Наистина ли искате да изтриете статистиката?",
      [
        { text: "Отказ", style: "cancel" },
        { text: "Изтрий", onPress: () => resetStatistics() }
      ]
    );
  };

  const resetStatistics = async () => {
    setLoading(true);
    setStatusMessage('Изтриване на статистика...');
    await AsyncStorage.removeItem('yearlyStatistics');
    setStatusMessage('Статистиката е изтрита.');
    setTimeout(() => confirmRecovery(), 2000);  // Дава време на потребителя да прочете съобщението
  };

  const confirmRecovery = () => {
    Alert.alert(
      "Възстановяване",
"Искате ли да възстановите статистиката?",
[
{ text: "Не", onPress: () => setLoading(false), style: "cancel" },
{ text: "Да", onPress: () => restoreStatistics() }
]
);
};

const restoreStatistics = async () => {
setStatusMessage('Възстановяване на статистика...');
try {
await fetchStatistics();
setStatusMessage('Статистиката е възстановена.');
setTimeout(() => setLoading(false), 2000); // Дава време на потребителя да прочете съобщението
} catch (err) {
setError(err);
setStatusMessage('Грешка при възстановяване на статистиката.');
setLoading(false);
}
};

if (loading) {
return (
<View style={styles.loadingContainer}>
<Text>{statusMessage}</Text>
</View>
);
}

if (error) {
return <Text>Error: {error.message}</Text>;
}

return (
<ImageBackground source={require('./assets/3.jpg')} style={styles.backgroundImage}>
<View style={styles.container}>
<Text style={styles.heading}>Статистика за 2024 година:</Text>
{statistics && (
<>
<Text style={styles.text}>Посещения: {statistics.visits}</Text>
<Text style={styles.text}>Отзиви: {statistics.reviews}</Text>
<Text style={styles.text}>Добавени скални форми: {statistics.rockForms}</Text>
<Text style={styles.text}>Регистрирани потребители: {statistics.registrations}</Text>
</>
)}
<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
<Text style={styles.buttonText}>Назад</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.resetButton} onPress={confirmReset}>
<Text style={styles.buttonText}>Нулиране на статистиката</Text>
</TouchableOpacity>
</View>
</ImageBackground>
);
}

const styles = StyleSheet.create({
loadingContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color: 'white',
},
text: {
fontSize: 18,
marginBottom: 10,
color: 'white',
},
button: {
backgroundColor: 'green',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 10,
marginTop: 20,
},
resetButton: {
backgroundColor: 'red',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 10,
marginTop: 20,
},
buttonText: {
color: 'white',
fontSize: 16,
},
backgroundImage: {
flex: 1,
resizeMode: 'cover',
justifyContent: 'center',
alignItems: 'center',
},
});

export default StatisticsScreen;
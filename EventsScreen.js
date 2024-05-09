import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventItem from './EventItem';

function AllEventsScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('./assets/hudojestvena.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Културен календар 2024г.</Text>
        
        <EventItem 
          date="май - юни 2024 г."
          place="Художествена галерия „Вълчо Вълчев”"
          description="Изложба живопис на Лилия Захаринова"
        />
        <EventItem 
          date="05 май 2024 г."
          place="Централен площад"
          description="Великденски празник"
        />
         <EventItem 
          date="06 май 2024 г."
          place="Храм „Св. Вмчк Георги Победоносец”"
          description="Честване на храмовия празник -„Гергьовден"
         />
         <EventItem 
          date="09 май 2024 г."
          place="Младежки дом”"
          description="Честване Деня на Европа и Деня на Победата"
          />
           <EventItem 
          date="17 май 2024 г."
          place="Покрайнините на гр. Белоградчик”"
          description="Турнир по надтегляне с коне от тежковозни породи"
          />
        <EventItem 
          date="01 юни 2024 г."
          place="Централен площад"
          description="Международен ден на детето - празнична програма за децата на Белоградчик; Детски спектакъл с Петя Буюклиева"
        />
        <EventItem 
          date="02 юни 2024 г."
          place="Астрономическа обсерватория"
          description="Поетическа обсерватория"
        />
        <EventItem 
          date="15 юни 2024 г."
          place="Пред сградата на Районно управление - Белоградчик"
          description="Демонстрация на пътна безопасност"
        />

        <EventItem 
          date="27 юни 2024 г."
          place="Оброчен кръст в местност „Св. Панталеймон”, с. Салаш"
          description="Празнична програма и курбан"
        />
        <EventItem 
          date="28 юни 2024 г."
          place="Салон на Народно читалище „Развитие – 1893”"
          description="10:00 часа – „Грозното пате” от Ханс Кристиан Андерсен; 18:00 часа – постановка „Роклята беглец”"
        />
        <EventItem 
          date="29 юни 2024 г."
          place="Централен площад / местност „Панаирище”"
          description="„Петровден” – Празник на град Белоградчик и провеждане на традиционен Белоградчишки панаир"
        />

       
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
          description="Летен фестивал „Опера на върховете"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default AllEventsScreen;

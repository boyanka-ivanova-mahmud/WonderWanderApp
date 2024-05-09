import React from 'react';
import { ScrollView, Text, StyleSheet,View,TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PolicyScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.fullScreen}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>Назад</Text>
      </TouchableOpacity>
        <ImageBackground source={require('./assets/Security.png')} style={styles.imageBackground}>
      <ScrollView style={styles.container}>
      <Text style={styles.header}>Политика за сигурност и защита на лични данни</Text>
      <Text style={styles.bodytext}>
        <Text style={styles.bold}>1. Въведение:</Text> {'\n'}
        Добре дошли в нашето приложение! Ние се ангажираме да защитаваме вашата сигурност и лични данни...
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>2. Събиране на информация:</Text> {'\n'}
        Събираме информация, която вие доброволно предоставяте при
         регистрация, както и информация...
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>3. Използване на информация:</Text> {'\n'}
        Използваме събраната информация за:
        Предоставяне и подобряване на нашите услуги
        Разбиране на потребителското поведение
        Комуникация с вас за услугите ни
        Маркетингови и промоционални предложения, ако сте дали съгласиe.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>4. Споделяне на информация:</Text> {'\n'}
        Вашите лични данни могат да бъдат споделени с трети страни само в следните случаи:
        С ваше изрично съгласие
        За изпълнение на законови изисквания
        За защита на правата и сигурността на нашата компания, 
        наши клиенти и трети лица.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>5. Сигурност на данните:</Text> {'\n'}
        Прилагаме строги технически и организационни мерки за защита на 
        вашите лични данни от загуба, злоупотреба, неоторизиран достъп 
        или разкриване. Въпреки нашите усилия, никоя система за сигурност 
        не е непробиваема, така че ние 
        редовно преглеждаме и актуализираме нашите мерки за сигурност.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>6. Ваши права:</Text> {'\n'}
        Имате право да:
        Искате достъп до вашите лични данни
        Искате коригиране на неточни или непълни данни
        Искате изтриване на вашите лични данни
        Възразите срещу обработката на вашите данни
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>7. Промени в политиката:</Text> {'\n'}
    Ние можем да актуализираме тази политика от време на време.
    При значими промени, 
    ще ви уведомим чрез нашето приложение или по имейл.
    </Text>
     <Text style={styles.text}>
     <Text style={styles.bold}>8. Контакти:</Text> {'\n'}
     За въпроси или притеснения относно тази политика,
      моля, свържете се с нас на bobi_a@abv.bg
    </Text>
    </ScrollView>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        paddingTop : 20,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Примерен цвят
    },
    bodyText: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 24,
        color: '#666', // Примерен цвят
    },
    bold: {
        fontWeight: 'bold',
    },
    backButton: {
        padding: 10,
        marginBottom: 10,
        alignSelf: 'flex-start',
        backgroundColor: 'green', // Светъл фон за по-добра видимост
    },
    backButtonText: {
        fontSize: 16,
        color: 'white',
    },
});
export default PolicyScreen;

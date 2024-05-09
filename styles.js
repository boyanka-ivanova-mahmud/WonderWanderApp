// styles.js
import { StyleSheet } from 'react-native';
export const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#D2B48C',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',  // променете ширината на контейнера да бъде 100%
      },
      button: {
        backgroundColor: '#FFD700',
        padding: 16,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',  // широчината на бутоните
        marginHorizontal: '1%',  // добавете малко хоризонтално пространство между бутоните
      },
      buttonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
      },
    });
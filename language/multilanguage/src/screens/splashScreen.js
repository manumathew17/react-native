import React from 'react';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';



const SplashScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const {t, i18n} =useTranslation()

    setTimeout(async () => {
         getData(navigation)
        //this.props.navigation.navigate('Login')
    }, 5000);


    const getData = async (navigation) => {
        try {
            const value = await AsyncStorage.getItem('language')
     
            if (value !== null) {
                i18n.changeLanguage(value)
                navigation.replace('Dashboard');
                
            }
            else {
                navigation.replace('Language',{
                    navigateNext: true,
                });
            }
        } catch (e) {
            navigation.replace('Language',{
                navigateNext: true,
            });
        }
    }
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (

        <SafeAreaView style={[styles.center_container,{backgroundColor:"#1d2434"}]} >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Image
                style={styles.logo}
                source={require('../assets/images/save-biking-logo.png')}
            />
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({

    center_container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'center'

    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },

});



export default SplashScreen;
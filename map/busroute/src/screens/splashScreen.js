import React from 'react';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import generalStyles from '../styles/generalStyles';
import { useTranslation } from 'react-i18next';

const SplashScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { t, i18n } = useTranslation()

    async () => {
        try {
            const value = await AsyncStorage.getItem('language')

            if (value !== null) {
                i18n.changeLanguage(value)

            }
        } catch (e) {
        }
    }



    setTimeout(() => {
        navigation.replace('Explore');
    }, 5000);


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (

        <SafeAreaView style={generalStyles.center_container} >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Image
                style={generalStyles.logo}
                source={require('../assets/images/logo.png')}
            />
        </SafeAreaView>


    );
};



export default SplashScreen;
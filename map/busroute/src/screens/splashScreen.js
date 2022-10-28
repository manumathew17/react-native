import React from 'react';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
} from 'react-native';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import generalStyles from '../styles/generalStyles';

const SplashScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    setTimeout(() => {
        navigation.replace('Explore'); //this.props.navigation.navigate('Login')
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
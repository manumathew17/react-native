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

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            return true
        }
        else {
            return false
        }
    } catch (e) {
        return false
    }
}
const SplashScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    setTimeout(async () => {
        if (await getData) {
            navigation.replace('Dashboard');
        }
        else {
            navigation.replace('Language');
        }
        //this.props.navigation.navigate('Login')
    }, 5000);


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (

        <SafeAreaView style={styles.center_container} >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
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
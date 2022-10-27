import React from 'react';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
    Text
} from 'react-native';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const DashboardScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
<Text>Hello</Text>

                
        


    );
};



export default DashboardScreen;
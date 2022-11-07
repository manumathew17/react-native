/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import  {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from './src/screens/splashScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import LanguageSelectScreen from './src/screens/languageSelectScreen';
import SettingsScreen from './src/screens/settingsScreen';
import HomeScreen from './src/screens/homeScreen';
import AllSettingScreen from './src/screens/allSettingScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const Stack = createNativeStackNavigator();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{header: ()=>null}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Language" component={LanguageSelectScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='AllSettings' component={AllSettingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

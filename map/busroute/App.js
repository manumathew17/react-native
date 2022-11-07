/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/splashScreen';
import DashboardScreen from './src/screens/dashBoardScreen';
import ChooseLocationScreen from './src/screens/chooseLocationScreen';
import ExploreScreen from './src/screens/exploreScreen';
import DetailScreen from './src/screens/detailsScreen';
import {enableLatestRenderer} from 'react-native-maps';
import { useTranslation } from 'react-i18next';
 
 
 
 const Stack = createNativeStackNavigator();
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 const App = () => {
  const {t, i18n}=useTranslation()
  i18n.changeLanguage('fr')
 
   return (
     <NavigationContainer>
       <Stack.Navigator 
       screenOptions={{header: ()=>null}}>
         <Stack.Screen name="SplashScreen" component={SplashScreen}/>
         <Stack.Screen name="Dashboard" component={DashboardScreen} />
         <Stack.Screen name="ChooseLocation" component={ChooseLocationScreen}/>
         <Stack.Screen name='Explore' component={ExploreScreen}/>
         <Stack.Screen name='Details' component={DetailScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 
 export default App;
 
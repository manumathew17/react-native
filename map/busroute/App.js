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
import {enableLatestRenderer} from 'react-native-maps';
 
 
 
 const Stack = createNativeStackNavigator();
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 const App = () => {
 
   return (
     <NavigationContainer>
       <Stack.Navigator 
       screenOptions={{header: ()=>null}}>
         <Stack.Screen name="SplashScreen" component={SplashScreen}/>
         <Stack.Screen name="Dashboard" component={DashboardScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 
 export default App;
 
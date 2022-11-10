import { StyleSheet, Text, View, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native';
import React, { Component, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageSelectScreen from './languageSelectScreen';
import SettingsScreen from './settingsScreen';
import HomeScreen from './homeScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


const homeName = "Home"
const settingsName = "Settings";


const DashboardScreen = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === homeName) {
          iconName = focused ? 'home' : 'home-outline';

        } else {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <IonIcon name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />

    </Tab.Navigator>
  );

};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


export default DashboardScreen
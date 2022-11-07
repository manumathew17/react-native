import { StyleSheet, Text, View, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native';
import React, { Component, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageSelectScreen from './languageSelectScreen';
import SettingsScreen from './settingsScreen';
import HomeScreen from './homeScreen';
const Tab = createBottomTabNavigator();


const DashboardScreen = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
          <Tab.Screen name="home" component={HomeScreen} />
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
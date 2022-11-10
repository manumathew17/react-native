import { StyleSheet, Text, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native';
import React, { Component, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
const DATA = [
    {
        id: "en",
        title: "English",
    },
    {
        id: "de",
        title: "German",
    },
    {
        id: "fr",
        title: "French",
    },
    {
        id: 'it',
        title: 'Italian'
    },
    {
        id: 'pt',
        title: 'Portuguese'
    }
];



const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.card, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);



const LanguageSelectScreen = ({ route, navigation }) => {

    const [selectedId, setSelectedId] = useState(null);
    const { navigateNext } = route.params;
    const {t, i18n} =useTranslation()
    const storeData = async (value, navigateNext, navigation) => {
       
        i18n.changeLanguage(value.id)
        try {
           
            await AsyncStorage.setItem('language', value.id)
            if (navigateNext) {
                navigation.navigate('Dashboard')
            }
            else {
                navigation.goBack()
            }
        } catch (e) {
    
        }
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#f9b818" : "#f5e9ba";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => storeData(item, navigateNext, navigation)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.header}> Choose your language</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    card: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
    },

    header: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        color: "black",
        padding: 5
    },
});


export default LanguageSelectScreen
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const AllSettingScreen = ({ navigation }) => {

    const {t, i18n} =useTranslation()

    return (
        <SafeAreaView style={styles.container} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>

                <TouchableOpacity >
                    <MaterialCommunityIcons name='chevron-left' size={20} color="black"
                        onPress={() =>
                            navigation.goBack()
                        }
                    />
                </TouchableOpacity>

                <Text style={styles.headerText}>All settings</Text>
                <View />
            </View>


            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}
                onPress={() =>
                    navigation.navigate('Language', {
                        navigateNext: false,
                    })
                }
            >
                <View style={{ flexDirection: "row" }}>
                    <IonIcon name='language' size={20} color="black"
                    />
                    <Text style={[styles.headerText, { marginHorizontal: 10 }]}>{t( "language")}</Text>
                </View>

                <MaterialCommunityIcons name='chevron-right' size={20} color="black"
                />
            </TouchableOpacity>




            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}
                onPress={() =>
                    navigation.goBack()
                }
            >
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons name='information-variant' size={20} color="black"
                    />
                    <Text style={[styles.headerText, { marginHorizontal: 10 }]}>{t("tc")}</Text>
                </View>

                <MaterialCommunityIcons name='chevron-right' size={20} color="black"
                />
            </TouchableOpacity>






        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    normalText: {
        color: "black"

    },
    headerText: {
        fontSize: 16,
        color: "black"
    },
    containerBlack: {
        borderRadius: 3,
        backgroundColor: "black",
        margin: 20,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },
});

export default AllSettingScreen
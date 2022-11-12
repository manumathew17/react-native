import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { t } from 'i18next';

const SettingsScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>

        <View />
        <View style={styles.profileView}>
          <MaterialCommunityIcons name='account-circle' size={70} color={"black"} />
          <Text style={{color:"black"}}>Name</Text>
        </View>
        <TouchableOpacity >
          <IonIcon name='settings' size={30} color="black"
            onPress={() =>
              navigation.navigate('AllSettings')
            }
          />
        </TouchableOpacity>


      </View>


      <View style={styles.containerHolderView}>
        <View style={styles.containerView}>
        <Icon name="bicycle" size={15} color="black" />
          <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold", marginLeft:10 }]}>1524</Text>
          <Text style={styles.normalText}>  km </Text>
        </View>
        <View style={styles.containerView}>
        <MaterialCommunityIcons name="star-circle" color={"yellow"} size={30} />
          <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold",marginLeft:10 }]}>100</Text>
          <Text style={styles.normalText}>  pt </Text>
        </View>
      </View>

      <View style={styles.containerBlack}>
        <MaterialCommunityIcons name="police-badge" size={30} color={"yellow"} />
        <View style={styles.containerColumn}>
          <Text style={[styles.header, { color: "white" ,padding:10}]}>{t("you_are_byke_hero")}</Text>
          <View style={{ height: 20 }} />
          <Text style={[styles.header, { color: "white", fontSize: 12 , padding:10}]}>{t("byke_hero_desc")}</Text>

        </View>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  normalText: {
    color: "black"

  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  },

  profileView:{
    justifyContent: 'center', 
    flex: 1, 
    alignItems: 'center', 
  },

  containerHolderView:{
    flexDirection: "row", 
    justifyContent: "space-evenly", 
    margin: 20, 
    height: 100
  },

  containerColumn:{
    flexDirection: "column", alignContent: "center", alignItems: "flex-start", marginLeft: 20
  },



  containerView:{
    justifyContent: 'center', flex: 1, alignItems: 'center', flexDirection: "row", height: 100, borderColor: 'black', borderWidth: 1, paddingVertical: 20, borderRadius: 5, marginRight: 10 
  },


  headerText: {
    fontSize: 16,
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

export default SettingsScreen
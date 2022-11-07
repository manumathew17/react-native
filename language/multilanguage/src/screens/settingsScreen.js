import { Text, View, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>

        <View />
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}>
          <MaterialCommunityIcons name='account-circle' size={70} />
          <Text>Hi</Text>
        </View>
        <TouchableOpacity >
          <IonIcon name='settings' size={30} color="black" 
                onPress={() =>
        navigation.navigate('AllSettings')
      }
          />
        </TouchableOpacity>


      </View>


      <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: 20, height: 100 }}>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', flexDirection: "row", height: 100, borderColor: 'black', borderWidth: 1, paddingVertical: 20, borderRadius: 5, marginRight: 10 }}>
          <IonIcon name="location" size={16} color="black" />
          <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
          <Text style={styles.normalText}>  km </Text>
        </View>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', flexDirection: "row", height: 100, borderColor: 'black', borderWidth: 1, paddingVertical: 20, borderRadius: 5, marginLeft: 10 }}>
          <IonIcon name="location" size={16} color="black" />
          <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
          <Text style={styles.normalText}>  km </Text>
        </View>
      </View>

      <View style={styles.containerBlack}>
        <MaterialCommunityIcons name="police-badge" size={30} color={"yellow"} />
        <View style={{ flexDirection: "column", alignContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
          <Text style={[styles.header, { color: "white" }]}>Header</Text>
          <View style={{ height: 20 }} />
          <Text style={[styles.header, { color: "white", fontSize: 12 }]}>Header</Text>

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
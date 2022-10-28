import { Text, View , TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'

const DetailScreen = ({ navigation , route}) => {
    const details =route.params.marker;
    console.log(details);
    return (
        <View style={styles.container}>
        <Image 
          source={details.image}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.textContent}>
          <Text  style={styles.cardtitle}>{details.title}</Text>
          
          <Text  style={styles.cardDescription}>{details.description}</Text>
        </View>
        <TouchableOpacity
              onPress={() => {navigation.navigate('Dashboard', {details})}}
              style={[styles.signIn]}
            >
              <Text style={[styles.textSign, {
                color: 'black'
              }]}>Show route</Text>
            </TouchableOpacity>
      </View>
      )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 20,
    },
    cardtitle: {
      fontSize: 12,
      color:"black",
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },

    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        bottom: 10,
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
  });


export default DetailScreen



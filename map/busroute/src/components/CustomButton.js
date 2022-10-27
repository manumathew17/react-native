import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const CustomButton = ({
    onPress =() =>{},
    btnStyle={},
    btnText
}) => {

    return (
        <TouchableOpacity
        onPress={onPress}
    
        style={{...styles.btnStyle,...btnStyle}}>
        <Text style={{color:"black"}}>{btnText}</Text>

        </TouchableOpacity>
        
    )

};

const styles =StyleSheet.create({
    btnStyle:{
        backgroundColor:"white",
        borderRadius:4,
        borderWidth:1,
        alignItems:'center',
        height:48,
        justifyContent:'center',
        marginTop:16

    }
})

export default CustomButton;
import { Text, View, ScrollView} from 'react-native'
import React, { Component, useState } from 'react'
import AddressPickup from '../components/AddressPickup';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const ChooseLocationScreen = (props) => {
    const navigation =useNavigation()

    const [state, setState] =useState({
        pickupCords:{},
        destinationCords:{}
    })

    const {pickupCords, destinationCords}=state

    const onDone =()=>{
        props.route.params.getAddress({
            pickupCords,
            destinationCords
        })
        navigation.goBack()
    }

    const fetchPickupCords =(lat, lng)=>{
        setState({...state, pickupCords: {
            latitude: lat,
            longitude: lng
        }})

    }
    
    const fetchDestinationCords =(lat, lng)=>{
        setState({...state, destinationCords: {
            latitude: lat,
            longitude: lng
        }})

    }

    console.log("----------->",props)

    return (
        <View style={{flex:1, backgroundColor:"white"}}>
    <ScrollView keyboardShouldPersistTaps={'always'} style={{ backgroundColor:"white" ,padding:20, height:"100%"}}>
           
               
           <AddressPickup
                placeholderText="Enter pickup location"
                fetchAddress={fetchPickupCords}
            />
       

         
           <AddressPickup
                placeholderText="Enter destination location"
                fetchAddress={fetchDestinationCords}
            />
         
       


     

            <CustomButton
                btnText="Done"
                btnStyle={{marginTop:24}}
                onPress={onDone}
            />

       
    </ScrollView>
        </View>
    
    )

};



export default ChooseLocationScreen;
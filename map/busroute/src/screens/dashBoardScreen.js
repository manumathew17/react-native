import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const DashboardScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    13.92370911551488, 75.56368433764177
    const [state, setState] = useState({
        pickupCords: {
            latitude: 14.146708944340446,
            longitude: 75.06358525115908,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
        dropLocationCords: {
            latitude: 13.92370911551488,
            longitude: 75.56368433764177,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,

        }
    })

    const { pickupCords, dropLocationCords } = state
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDVAHVf1f9bryDBlpKz1tjjlRo2dr_83vM';

    const onPressLocation=()=>{
        navigation.navigate("ChooseLocation", {getAddress: fetchValues})
    }

    const fetchValues =(data)=>{
        setState({
            pickupCords:{
                latitude:data.pickupCords.latitude,
                longitude:data.pickupCords.longitude,
            },
            dropLocationCords:{
                latitude:data.destinationCords.latitude,
                longitude:data.destinationCords.longitude,
            }
        })
        console.log("data=======>", data)
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={{flex:1,}}>
        <View style={{flex:1}}>
        <MapView
                provider={PROVIDER_GOOGLE} 
                style={StyleSheet.absoluteFillObject}
                initialRegion={pickupCords}
            >
            <Marker
            coordinate={pickupCords}/>
             <Marker
            coordinate={dropLocationCords}/>
                <MapViewDirections
                    origin={pickupCords}
                    destination={dropLocationCords}
                    apikey={GOOGLE_MAPS_APIKEY}
            
                    strokeWidth={3}
                    strokeColor="hotpink"
                    optimizeWaypoints={true}
                />
            </MapView>
        </View>
     

            <View style={styles.bottomCard}>
                <Text style={{color:"black"}}>Where are you going..?</Text>

                <TouchableOpacity style={styles.inputStyle}
                onPress={onPressLocation}>
                <Text style={{color:"black"}}> Choose your location</Text>

                </TouchableOpacity>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    bottomCard:{
        backgroundColor:"white",
        width:"100%",
        padding:30,
        borderTopEndRadius:24,
        borderTopStartRadius:24

    },
    inputStyle:{
        backgroundColor:"white",
        borderRadius:4,
        borderWidth:1,
        alignItems:'center',
        height:48,
        justifyContent:'center',
        marginTop:16

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default DashboardScreen;
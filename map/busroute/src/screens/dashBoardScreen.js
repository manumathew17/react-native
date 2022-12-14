import React, { useState, useRef } from 'react';
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
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const DashboardScreen = ({ navigation , route }) => {
    const details =route.params.details;
    console.log("============>",details);

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const isDarkMode = useColorScheme() === 'dark';
    const [state, setState] = useState({
        pickupCords: {
            latitude: 45.47002619963983,
            longitude: 9.172215525195016,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        },
        dropLocationCords: {
            latitude: details.coordinate.latitude,
            longitude: details.coordinate.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
    })
   
    const milanCathedralCord= {latitude : 45.46415779784021, longitude: 9.192784806807744}
    const galleriaCord={latitude : 45.46596556409419, longitude: 9.190027176406062}
    const { pickupCords, dropLocationCords } = state
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDVAHVf1f9bryDBlpKz1tjjlRo2dr_83vM';

    // const onPressLocation = () => {
    //     navigation.navigate("ChooseLocation", { getAddress: fetchValues })
    // }

    const fetchValues = (data) => {
        setState({
            pickupCords: {
                latitude: data.pickupCords.latitude,
                longitude: data.pickupCords.longitude,
            },
            dropLocationCords: {
                latitude: data.destinationCords.latitude,
                longitude: data.destinationCords.longitude,
            }
        })
    }

    const mapRef = useRef()

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={StyleSheet.absoluteFillObject}
                    initialRegion={pickupCords}
                >
                
                    <Marker
                        coordinate={pickupCords}
                        description={'You are here'}>
                       <Image source={require('../assets/images/man.png')} style={{height: 35, width:35 }} />
                    </Marker>
                 
                    <Marker
                        coordinate={dropLocationCords}
                        description={'You are here'}>
                       <Image source={require('../assets/map_marker.png')} style={{height: 35, width:35 }} />
                    </Marker>
                    <MapViewDirections
                        origin={pickupCords}
                        destination={dropLocationCords}
                        apikey={GOOGLE_MAPS_APIKEY}
                        mode={"TRANSIT"}
                        strokeWidth={3}
                        strokeColor="hotpink"
                        optimizeWaypoints={true}
                        onReady={result => {
                            mapRef.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (width / 20),
                                    bottom: (height / 20),
                                    left: (width / 20),
                                    top: (height / 20),
                                }
                            });
                        }}

                    />
                </MapView>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    bottomCard: {
        backgroundColor: "white",
        width: "100%",
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24

    },
    inputStyle: {
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 16

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default DashboardScreen;
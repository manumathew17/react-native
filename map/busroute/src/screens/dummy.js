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



const DashboardScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const isDarkMode = useColorScheme() === 'dark';
    const [state, setState] = useState({
        pickupCords: {
            latitude: 14.146708944340446,
            longitude: 75.06358525115908,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        },
        dropLocationCords: {
            latitude: 13.92370911551488,
            longitude: 75.56368433764177,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA

        }
    })

    const { pickupCords, dropLocationCords } = state
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDVAHVf1f9bryDBlpKz1tjjlRo2dr_83vM';

    const onPressLocation = () => {
        navigation.navigate("ChooseLocation", { getAddress: fetchValues })
    }

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
                        coordinate={pickupCords}>
                        <View style={{ backgroundColor: "red", padding: 10 }}>
                            <Text>SF</Text></View>
                    </Marker>
                    <Marker
                        coordinate={dropLocationCords} />
                    <MapViewDirections
                        origin={pickupCords}
                        destination={dropLocationCords}
                        apikey={GOOGLE_MAPS_APIKEY}

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


            <View style={styles.bottomCard}>
                <Text style={{ color: "black" }}>Where are you going..?</Text>

                <TouchableOpacity style={styles.inputStyle}
                    onPress={onPressLocation}>
                    <Text style={{ color: "black" }}> Choose your location</Text>

                </TouchableOpacity>
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
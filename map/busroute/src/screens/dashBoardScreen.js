import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {enableLatestRenderer} from 'react-native-maps';

import {
    SafeAreaView,
    Image,
    StatusBar,
    useColorScheme,
    Text,
    View,
    StyleSheet
} from 'react-native';

import {
    Colors,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const DashboardScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>

    );

};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width:  "100%",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });


export default DashboardScreen;
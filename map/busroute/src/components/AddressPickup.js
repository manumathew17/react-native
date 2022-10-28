import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const AddressPickup = ({
    placeholderText,
    fetchAddress
}) => {

    const onPressAddress = (data, details) => {
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng)
    }

    return (
        <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                fetchDetails={true}
                isRowScrollable={true}
                keyboardShouldPersistTaps='handled'
                onPress={onPressAddress}
                query={{
                    key: 'AIzaSyDVAHVf1f9bryDBlpKz1tjjlRo2dr_83vM',
                    language: 'en',
                }}

                styles={styles}


            />
        </View>
    );
};

const styles =StyleSheet.create({
    containerStyle:{
        backgroundColor:"white"
    },

    textInputStyle:{
        height:48,
        color:"black",
        fontSize:16,
        color:"black",
        backgroundColor:'#F3F3F3'
    }
});

export default AddressPickup;
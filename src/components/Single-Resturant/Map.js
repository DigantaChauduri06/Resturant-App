import { useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

import MapView from 'react-native-maps';
import { Elevation } from '../../Common/Elevation';
const GMap = ({ coordinates, resturant }) => {
    const region = {
        latitude: parseFloat(coordinates.latitude),
        longitude: parseFloat(coordinates.longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const url = resturant.url;
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={region}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.Elevation]} onPress={handlePress}>
                    <Text style={styles.btnText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default GMap
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        flex: 1
    },
    map: {
        width: '100%',
        height: 350,
        borderRadius: 30
    },
    buttonContainer: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#f8943a',
        borderRadius: 50
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 17,
        paddingTop: 14,
        fontWeight: '600'
    },
    Elevation
})
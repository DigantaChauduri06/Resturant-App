import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
//fonts
import {
    Adamina_400Regular,
    useFonts
} from '@expo-google-fonts/adamina'

const Header = () => {
    const [fontsLoaded] = useFonts({
        Adamina_400Regular,
    })
    //!Warn -- Depricated use expo-splash-screen
    if (!fontsLoaded) return <Text>Font Loading Failed</Text>
    return (
        <View>
            <Text style={[styles.header_main, { fontFamily: 'Adamina_400Regular' }]}>Grab Your</Text>
            <Text style={[styles.header_sub, { fontFamily: 'Adamina_400Regular' }]}>Delicious Meal!</Text>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    header_main: {
        fontSize: 21,
        fontWeight: "300",
        marginTop: 58,
        marginHorizontal: 35,

    },
    header_sub: {
        fontSize: 40,
        fontWeight: "700",
        marginHorizontal: 16,

    },
});
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header_main}>Grab Your</Text>
                <Text style={styles.header_sub}>Delicious Meal!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header_main: {
        fontSize: 26,
        fontWeight: "300",
        marginTop: 75,
        marginHorizontal: 35,
    },
    header_sub: {
        fontSize: 45,
        fontWeight: "700",
        marginHorizontal: 16,
    },
});
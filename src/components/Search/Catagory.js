import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Elevation } from '../../Common/Elevation';

const Catagory = ({ catagory, isActive, setIsActive }) => {

    return (
        <FlatList data={catagory} renderItem={({ item, index }) => (
            <TouchableOpacity style={[
                styles.container,
                styles.Elevation,
                (item.name === isActive) && { backgroundColor: '#f8940e' }
            ]}
                onPress={() => {
                    setIsActive(item.name);
                }}

            >
                <View style={styles.imageContainer}>
                    <Image source={item.uri} style={styles.image} />
                </View>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )} horizontal showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name}
        />
    )
}
export default Catagory;
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 18,
        width: 90,
        height: 120,
        borderRadius: 50,
        alignItems: 'center', //Align-item center left to right 
        justifyContent: 'center', //Justify-contern center up-down
        backgroundColor: '#FFF',
    },
    Elevation,
    image: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 14,
        fontWeight: '900',
        marginTop: 2.3
    },
    imageContainer: {
        width: 60,
        height: 65,
        backgroundColor: '#eee',
        borderRadius: 50,
        // borderBottomEndRadius: 30,
        // borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
/*

*/
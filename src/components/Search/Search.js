import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Elevation } from '../../Common/Elevation';
import Catagory from './Catagory';
const Search = ({ catagory }) => {
    const [term, setTerm] = useState("");
    const [isActive, setIsActive] = useState("Burger");
    // Handler Function
    const onHandleEditing = () => {
        if (!term) return;
        console.log(term);
        setIsActive(term);
        setTerm("");
    }
    return (
        <>
            <View style={[styles.container, styles.Elevation]}>
                <FontAwesome5 name="search" size={25} color="black" />
                <TextInput placeholder='Resturent, food' style={styles.input}
                    onChangeText={(e) => {
                        setTerm(e);
                    }}
                    onEndEditing={onHandleEditing}
                    value={term}
                />
            </View>
            <Catagory catagory={catagory} isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}
export default Search;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Elevation,
    input: {
        fontSize: 20,
        paddingLeft: 6,
        marginLeft: 5,
        width: "90%"
    }
});
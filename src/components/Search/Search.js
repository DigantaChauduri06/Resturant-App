import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Elevation } from '../../Common/Elevation';
import Catagory from './Catagory';
import DropdownComponent from '../FetchResturents/DropDown';
const Search = ({ catagory, navigation }) => {
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
                <FontAwesome5 name="search" size={23} color="black" />
                <TextInput placeholder='Resturent, food' style={styles.input}
                    onChangeText={(e) => {
                        setTerm(e);
                    }}
                    onEndEditing={onHandleEditing}
                    value={term}
                />
            </View>
            <Catagory catagory={catagory} isActive={isActive} setIsActive={setIsActive} />
            <DropdownComponent food={isActive} navigation={navigation} />
        </>
    )
}
export default Search;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 11,
        marginHorizontal: 20,
        padding: 9,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Elevation,
    input: {
        fontSize: 19,
        paddingLeft: 6,
        marginLeft: 5,
        width: "90%"
    }
});
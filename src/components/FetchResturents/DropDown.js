import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Resturants from './Resturants';

const data = [
    { label: 'New York City', value: 'New York City' },
    { label: 'Seattle', value: 'Seattle' },
    { label: 'Chicago', value: 'Chicago' },
    { label: 'San Diego', value: 'San Diego' },
    { label: 'San Francisco', value: 'San Francisco' },
    { label: 'Los Angeles', value: 'Los Angeles' },
    { label: 'Phoenix', value: 'Phoenix' },
    { label: 'Texas', value: 'Texas' },
];

const DropdownComponent = ({ food, navigation }) => {
    const [value, setValue] = useState("New York City");
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }, { backgroundColor: '#eee' }]}>
                    Current Location
                </Text>
            );
        }
        return null;
    };
    return (
        <>
            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select location' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="search1"
                            size={20}
                        />
                    )}
                />
            </View>
            <Resturants city={value} food={food} navigation={navigation} />
        </>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        padding: 13,
        marginTop: -8,
        marginBottom: -3,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#FFF',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
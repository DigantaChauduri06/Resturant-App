import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Elevation } from '../../Common/Elevation';

const Catagory = ({ catagory, isActive, setIsActive }) => {
    return (
        <View>

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
        </View>
    )
}
export default Catagory;
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 18,
        width: 85,
        height: 97,
        borderRadius: 50,
        alignItems: 'center', //Align-item center left to right 
        justifyContent: 'center', //Justify-contern center up-down
        backgroundColor: '#FFF',
    },
    Elevation,
    image: {
        width: 33,
        height: 33,
    },
    text: {
        fontSize: 13,
        fontWeight: '700',
        marginTop: 2.5
    },
    imageContainer: {
        width: 45,
        height: 50,
        backgroundColor: '#ddd',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
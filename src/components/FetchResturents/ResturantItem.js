import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Elevation } from '../../Common/Elevation';

const ResturantItem = ({ resturant, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("resturants", { id: resturant.id })}>
            <View style={[styles.container, styles.Elevation]}>
                <Image source={{ uri: resturant.image_url }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={[styles.mar, { fontWeight: 'bold', fontSize: 16 }]}>{
                        resturant.name.length > 25 ? resturant.name.substr(0, 25) + "..." : resturant.name
                    }</Text>
                    <View>
                        <Text style={[styles.mar, { fontSize: 15 }]}>{resturant.rating} ⭐ </Text>
                        <Text style={styles.price}>{resturant.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ResturantItem;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 90,
        alignSelf: 'stretch',
        borderRadius: 50,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Elevation,
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10
    },
    info: {
        marginHorizontal: 30
    },
    price: {
        color: 'gold',
        fontWeight: 'bold'
    },
    mar: {
        marginVertical: 2.4
    }
})
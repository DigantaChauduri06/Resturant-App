import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GMap from './Map';

const Resturant = ({ resturant }) => {
    const [like, useLike] = React.useState(true);
    return (
        <View style={styles.container}>
            <Image source={{ uri: resturant.image_url }} style={styles.image} />
            <View style={styles.headers}>
                <View style={[{ flex: 3.5 }, styles.headers]}>
                    <Text style={styles.text}>{resturant.name}</Text>
                    {
                        resturant.is_closed ?
                            <MaterialCommunityIcons name='curtains-closed' size={25}
                                color='red'
                            /> :
                            <MaterialCommunityIcons name='curtains' size={25}
                                color='green'
                            />

                    }
                </View>
                {
                    like ?
                        <Entypo name='heart-outlined' size={35}
                            onPress={() => useLike(!like)}
                            style={styles.like}
                        />
                        : <Entypo name='heart' size={35}
                            color='red'
                            onPress={() => useLike(!like)}
                            style={styles.like}
                        />
                }
            </View>
            <View style={{ alignItems: 'flex-end', marginTop: 18 }}>
                <Text style={[styles.text, { fontSize: 21 }]}>{resturant.rating} ⭐</Text>
            </View>
            <GMap coordinates={resturant.coordinates} resturant={resturant} />

        </View>
    )
}
export default Resturant;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    image: {
        width: "100%",
        height: 175,
        marginBottom: 20,
        // borderRadius: 20,
        backgroundColor: 'orange',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10
    },
    headers: {
        display: 'flex',
        flexDirection: 'row',
    },
    like: {
        flex: 0.5
    },
    ph: {
        fontSize: 14,
        marginLeft: '60%',
        marginTop: 10
    },

})
{/*


*/ }

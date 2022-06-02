import { StyleSheet, View, Image, FlatList, ActivityIndicator } from 'react-native'
import useFetchResturant from '../HOOKS/useFetchRestuarnt';

const Resturants = ({ route, navigation }) => {
    const { id } = route.params;
    const [data, loading, error] = useFetchResturant(id);
    const { photos } = data;
    return (
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size={"large"} marginVertical={30} marginHorizontal={40} /> : (
                    <FlatList data={photos}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item }} style={styles.image} />
                        )}
                    />

                )
            }
        </View>
    )
}
export default Resturants
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 175,
        marginBottom: 20
    },
    container: {
        marginVertical: 40,
        marginHorizontal: 10,

    }
})
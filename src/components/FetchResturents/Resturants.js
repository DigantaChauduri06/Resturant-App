import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import useFetch from '../../HOOKS/useFetch';
import ResturantItem from './ResturantItem';

const Resturants = ({ city, food, navigation }) => {
    const options = {
        term: food,
        location: city,
        baseURL: "https://api.yelp.com/v3/businesses/search?"
    }
    const [data, loading, error] = useFetch(options);
    //     //TODO: https://www.npmjs.com/package/react-native-skeleton-placeholder
    //     //TODO: https://www.youtube.com/watch?v=bHWoW_aNmnY
    return (
        <View style={styles.container}>
            <Text style={[styles.header, { marginTop: -5 }]}>Top Resturants in {city}</Text>
            {
                error ? <Text>Oops!! Error Happened</Text>
                    : (
                        loading
                            ? <ActivityIndicator size={"large"} marginVertical={30} marginHorizontal={40} />
                            :
                            (
                                <FlatList data={data}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => <ResturantItem resturant={item} navigation={navigation} />}
                                    showsVerticalScrollIndicator={false}
                                />
                            )
                    )
            }

        </View>
    )
}
export default Resturants;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: "700",
        paddingBottom: 4
    }
});
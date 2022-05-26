import { StyleSheet, Text, View } from 'react-native';

import { burger } from '../../Firebase/FetchedDatas'


const Resturants = () => {
    // console.log(burger._W);
    const item_burger = burger._W;

    console.log();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Resturants</Text>
        </View>
    )
}
export default Resturants;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        height: 100,
    },
    header: {
        fontSize: 20,
        fontWeight: "700",
        paddingBottom: 10
    }
});
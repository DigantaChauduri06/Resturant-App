import { StyleSheet, View, Image, ScrollView, ActivityIndicator } from 'react-native'
import useFetchResturant from '../HOOKS/useFetchRestuarnt';

import Resturant from '../components/Single-Resturant/Resturant';

const Resturants = ({ route, navigation }) => {
    const { resturant } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Resturant resturant={resturant} />
        </ScrollView>
    )
}
export default Resturants
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 10,

    }
})
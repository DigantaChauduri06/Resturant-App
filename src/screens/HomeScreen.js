import { StyleSheet, SafeAreaView } from 'react-native'
import Header from '../components/Header';
import Search from '../components/Search/Search';
const HomeScreen = ({ navigation }) => {
    const CommonCatagory = [
        { name: "Burger", uri: require("../Assets/Images/hamburger.png"), id: 0 },
        { name: "Pizza", uri: require("../Assets/Images/pizza.png"), id: 1 },
        { name: "Steaks", uri: require("../Assets/Images/steak.png"), id: 2 },
        { name: "Drinks", uri: require("../Assets/Images/drink.png"), id: 3 },
        { name: "Dessarts", uri: require("../Assets/Images/donut.png"), id: 4 },
        { name: "Spaguetti", uri: require("../Assets/Images/spaguetti.png"), id: 5 },
    ];
    return (
        <SafeAreaView>
            <Header />
            <Search catagory={CommonCatagory} navigation={navigation} />
        </SafeAreaView>
    )
}
export default HomeScreen
const styles = StyleSheet.create({})
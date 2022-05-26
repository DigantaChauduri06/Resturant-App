import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Resturants from './src/components/FetchResturents/Resturants';
import Header from './src/components/Header';
import Search from './src/components/Search/Search';

export default function App() {
  const CommonCatagory = [
    { name: "Burger", uri: require("./src/Assets/Images/hamburger.png"), id: 0 },
    { name: "Pizza", uri: require("./src/Assets/Images/pizza.png"), id: 1 },
    { name: "Steaks", uri: require("./src/Assets/Images/steak.png"), id: 2 },
    { name: "Drinks", uri: require("./src/Assets/Images/drink.png"), id: 3 },
    { name: "Dessarts", uri: require("./src/Assets/Images/donut.png"), id: 4 },
    { name: "Spaguetti", uri: require("./src/Assets/Images/spaguetti.png"), id: 5 },
  ];
  return (
    <SafeAreaView>
      <Header />
      <Search catagory={CommonCatagory} />
      <Resturants />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screen
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Resturants from './Resturants';

//screen names
const Home = 'Home';
const profile = 'Profile';
const Resturant = 'resturants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home2" component={HomeScreen} />
            <Stack.Screen name={Resturant} component={Resturants} />
        </Stack.Navigator>
    )
}

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HomeStack}
                screenOptions={

                    ({ route }) => ({
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveTintColor: '#f8940d',
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;
                            let isMat = false;
                            if (rn === Home) {
                                iconName = focused ? 'food' : 'food-outline';
                            } else if (rn === profile) {
                                iconName = focused ? 'user-circle-o' : 'user-circle';
                                isMat = true;
                            }
                            return !isMat ? <MaterialCommunityIcons name={iconName} size={size} color={color} /> :
                                <FontAwesome name={iconName} size={size} color={color} />
                        }

                    })}
            >
                <Tab.Screen name={Home} component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name={profile} component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MainContainer
const styles = StyleSheet.create({})
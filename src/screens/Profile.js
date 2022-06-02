import { StyleSheet, Text, View } from 'react-native'
const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{ fontSize: 26 }}
                onPress={() => navigation.navigate('Home')}
            >Profile Page</Text>
        </View>
    )
}
export default Profile
const styles = StyleSheet.create({})
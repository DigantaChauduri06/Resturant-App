import { StyleSheet, Text, View } from 'react-native'
const ProfileScreen = ({ userInfo }) => {
    let user = { ...userInfo["0"] };

    console.log(user);
    return (
        <View>
            <Text>{user.displayName}</Text>
        </View>
    )
}
export default ProfileScreen
const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Button from './Button';


const LogInDefault = ({ Login }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.notSignInText}>
                Haven't signed in Yet 🤷?
            </Text>
            <TouchableOpacity onPress={Login}>
                <Button isFacebook={true} />
                <Button isFacebook={false} />
            </TouchableOpacity>
        </View>
    )
}
export default LogInDefault;
const styles = StyleSheet.create({
    notSignInText: {
        fontSize: 29,
        fontWeight: 'bold',
        marginVertical: 70
    },
})
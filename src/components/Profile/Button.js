import { StyleSheet, Text, View } from 'react-native'
import { Elevation } from '../../Common/Elevation';
import { AntDesign } from '@expo/vector-icons';

const Button = ({ isFacebook }) => {
    return (
        <>
            <View style={[styles.button, styles.Elevation, { backgroundColor: isFacebook ? '#4267B2' : "#DB4437" }]}>
                <View>
                    <AntDesign name={isFacebook ? "facebook-square" : "google"} size={30} color="white" />
                </View>
                <View>
                    <Text style={styles.text}>{isFacebook ? "Facebook" : "Google"}</Text>
                </View>
            </View>
        </>
    )
}
export default Button;
const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 210,
        height: 63,
        justifyContent: 'space-evenly',
        borderRadius: 39,
        opacity: 0.9,
        marginBottom: 40,
    },
    Elevation,
    text: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})
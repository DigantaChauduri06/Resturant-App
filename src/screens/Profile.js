import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as WebBrowser from 'expo-web-browser';
import LogInDefault from '../components/Profile/notLoggedIn';
import ProfileScreen from '../components/Profile/LoggedInScreen';

import { Auth as auth } from '../Firebase/firebase-config';

import {
    onAuthStateChanged,
    FacebookAuthProvider,
    signInWithCredential,
} from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const Profile = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [isfacebookLogin, setIsFacebookLogin] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    console.log(isLoggedIn);
    onAuthStateChanged(auth, user => {
        if (user != null) {
            setIsPending(false);
            setIsLoggedIn(true);
            setUserInfo(user?.providerData);
        }
    });
    async function loginWithFacebook() {
        setIsPending(true);
        await Facebook.initializeAsync({
            appId: '1644263202615108',
            appName: 'Resturant App'
        });

        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            const credential = FacebookAuthProvider.credential(token)
            signInWithCredential(auth, credential).catch(error => {
                console.log("error " + error);
                setError("Error Happened " + error.message);
            });
        } else
            setIsPending(false);
    }

    const Logout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
        setIsPending(false);
    }
    console.log(userInfo);
    return (
        <>
            {
                isPending ? <ActivityIndicator size={56}
                    color={'#4267B2'}
                    marginVertical={105}
                /> : (
                    !isLoggedIn ? <LogInDefault
                        Login={loginWithFacebook}
                    /> : (
                        <ProfileScreen
                            isFacebook={isfacebookLogin}
                            userInfo={userInfo}
                            error={error}
                        />
                    )
                )
            }

        </>
    )
}
export default Profile;

{/*

    CLIENT_ID: 1644263202615108
    SECRECT: 29a356bc7fa706157abfe1c91ff31b75
*/}
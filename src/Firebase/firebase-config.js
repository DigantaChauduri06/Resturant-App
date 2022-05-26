// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA285F_AiBkyoFUF-vjkpYNlIvTmHdKbrU",
    authDomain: "rn-resturant-app.firebaseapp.com",
    projectId: "rn-resturant-app",
    storageBucket: "rn-resturant-app.appspot.com",
    messagingSenderId: "104522558084",
    appId: "1:104522558084:web:88552a673c5744511e70d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
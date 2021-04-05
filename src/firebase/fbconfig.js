import firebase from "firebase/app";
import 'firebase/firestore';

// configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbHAzoZUvpCPQGk30_Cwgy1y9itBopKAk",
    authDomain: "blog-app-b0252.firebaseapp.com",
    projectId: "blog-app-b0252",
    storageBucket: "blog-app-b0252.appspot.com",
    messagingSenderId: "962863093064",
    appId: "1:962863093064:web:134d67cf89c8ce7eafcf7d"
};

// react redux firebase config
const rrfConfig = {
    // userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// initializing
firebase.initializeApp(firebaseConfig);
firebase.firestore();


export {firebase , rrfConfig};
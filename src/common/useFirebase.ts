import firebase from "firebase/app";
// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCfpbbmTZsQwfbLWp-zcsVZhdBlFlZONw",
    authDomain: "hauspital-v1.firebaseapp.com",
    projectId: "hauspital-v1",
    storageBucket: "hauspital-v1.appspot.com",
    messagingSenderId: "45566089485",
    appId: "1:45566089485:web:613da164418511a0913844",
    measurementId: "G-BVPE1Z9TPS"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
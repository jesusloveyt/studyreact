importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
const config =  { 
	apiKey: "AIzaSyDCfpbbmTZsQwfbLWp-zcsVZhdBlFlZONw",
	authDomain: "hauspital-v1.firebaseapp.com",
    databaseURL: "https://hauspital-v1-default-rtdb.firebaseio.com",
	projectId: "hauspital-v1",
    storageBucket: "hauspital-v1.appspot.com",
    messagingSenderId: "45566089485",
    appId: "1:45566089485:web:613da164418511a0913844",
    // measurementId: "G-BVPE1Z9TPS"
}; 
firebase.initializeApp(config);
import firebase from 'firebase'; 
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIwerfdsazaSyDXwy7HNyWiCqg6ay7usIXbHGEWTh5Lhto",
    authDomain: "tik-tok-clone.firebaseapp.com",
    projectId: "tik-tok-clone",
    storageBucket: "tik-tok-clone.appspot.com",
    messagingSenderId: "6939124148ddsfsd55",
    appId: "1:6939124148sdfds55:web:a690060bc119914cc6e622",
    measurementId: "G-4BRX9sdfdfHVV1P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

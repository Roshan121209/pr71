import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyALaFWV4lyV6vOeSoJzeorwOfbXZwts-7c",
    authDomain: "pr71-9e06c.firebaseapp.com",
    projectId: "pr71-9e06c",
    storageBucket: "pr71-9e06c.appspot.com",
    messagingSenderId: "147972876427",
    appId: "1:147972876427:web:925b0884f6b81bd74c8c8e"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

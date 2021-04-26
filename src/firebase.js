// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCLJereUvAiXetIQSh3lpc714N2mYjxejI",
    authDomain: "twitter-clone-9e6be.firebaseapp.com",
    projectId: "twitter-clone-9e6be",
    storageBucket: "twitter-clone-9e6be.appspot.com",
    messagingSenderId: "37932926090",
    appId: "1:37932926090:web:7781195d9dd91d419d5973",
    measurementId: "G-GE2BF15ZFG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
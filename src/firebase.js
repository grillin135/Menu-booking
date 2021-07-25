import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYjJsSGOZ_RgBtmaUmyvvwvG5C9cL9kqM",
  authDomain: "menu-booking.firebaseapp.com",
  projectId: "menu-booking",
  storageBucket: "menu-booking.appspot.com",
  messagingSenderId: "532667919536",
  appId: "1:532667919536:web:a5fc306c1795f8d4ce9f75",
});

const db = firebaseApp.firestore();

export default db;

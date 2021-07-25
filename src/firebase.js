import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBV97Znlg_AQumCPHSyneKo1FPTBgGlXSM",
  authDomain: "menu-booking-200af.firebaseapp.com",
  projectId: "menu-booking-200af",
  storageBucket: "menu-booking-200af.appspot.com",
  messagingSenderId: "1001719834495",
  appId: "1:1001719834495:web:700cdc90fd3ec110b9dc4a",
  measurementId: "G-Q2GCJY2QG6"
});

const db = firebaseApp.firestore();

export default db;

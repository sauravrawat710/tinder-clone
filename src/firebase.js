import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxcInVxGq414XnNQGKiHl2iFCyELXszcM",
  authDomain: "tinder-clone-561b7.firebaseapp.com",
  databaseURL: "https://tinder-clone-561b7.firebaseio.com",
  projectId: "tinder-clone-561b7",
  storageBucket: "tinder-clone-561b7.appspot.com",
  messagingSenderId: "405274472796",
  appId: "1:405274472796:web:5590b3f98622e5d3e81199",
  measurementId: "G-LEP5L1T04G",
});

const database = firebaseApp.firestore();

export default database;

import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCzLhLdgB-rr8vC6kmTDuMxkk7HlxVspLw",
  authDomain: "geekfleet-dcce9.firebaseapp.com",
  databaseURL: "https://geekfleet-dcce9-default-rtdb.firebaseio.com",
  projectId: "geekfleet-dcce9",
  storageBucket: "geekfleet-dcce9.appspot.com",
  messagingSenderId: "1029322291439",
  appId: "1:1029322291439:web:744d22dd88ebeb51afc31a",
  measurementId: "G-J908B2H1GW",
};
// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };


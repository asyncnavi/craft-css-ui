import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hKqAm-LTjhoe7PE2pNdMOPXCJf8oz8E",
  authDomain: "craftcss-9b162.firebaseapp.com",
  projectId: "craftcss-9b162",
  storageBucket: "craftcss-9b162.appspot.com",
  messagingSenderId: "132929525077",
  appId: "1:132929525077:web:6a5c15ddba5a2f16768bdc",
  measurementId: "G-5CLLYCJNQP",
};

/**
 * Default Firebase app
 */
const app = firebase.initializeApp(firebaseConfig);

/**
 * Firebase auth
 */
const auth = firebase.auth(app);

/**
 * Firebase database
 */
const db = firebase.firestore();

/**
 * Firebase storage
 */
const storage = firebase.storage();
// Exposing instance we need...
export { app, auth, db, storage };

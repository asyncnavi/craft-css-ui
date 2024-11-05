import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4AXBUtSc6Bt4jjg_-hHYVf_rZEHi58Ag",
  authDomain: "minor-proj-e6b9e.firebaseapp.com",
  projectId: "minor-proj-e6b9e",
  storageBucket: "minor-proj-e6b9e.appspot.com",
  messagingSenderId: "91349592506",
  appId: "1:91349592506:web:275dc4a98259657c6c1583",
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

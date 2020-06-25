import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoU76yPnObIf0PpU6th0y-R_5SL2wJRuw",
  authDomain: "crwn-db-a9f58.firebaseapp.com",
  databaseURL: "https://crwn-db-a9f58.firebaseio.com",
  projectId: "crwn-db-a9f58",
  storageBucket: "crwn-db-a9f58.appspot.com",
  messagingSenderId: "838700207152",
  appId: "1:838700207152:web:bae033c89bd628ace471f5",
  measurementId: "G-G762M9DTXJ",
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

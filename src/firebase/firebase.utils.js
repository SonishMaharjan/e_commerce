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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // return reference like path of data but not data
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //return actual snapshot of data , has key exist which refers if data is saved in db or not
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(snapShot);
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

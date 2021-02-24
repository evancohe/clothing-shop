import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAT0NiQAT8lwS9aPWglASxOIf3LKCZeop0",
  authDomain: "ce-db-44184.firebaseapp.com",
  projectId: "ce-db-44184",
  storageBucket: "ce-db-44184.appspot.com",
  messagingSenderId: "209475361259",
  appId: "1:209475361259:web:cd3cd322d161d6054521ae",
  measurementId: "G-FQXFLB3LNM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

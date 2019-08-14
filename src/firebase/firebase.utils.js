import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDYX0tKDIKaQKn3aVuE6rpqtETiyRQ7OLM",
  authDomain: "crwn-db-8a1bc.firebaseapp.com",
  databaseURL: "https://crwn-db-8a1bc.firebaseio.com",
  projectId: "crwn-db-8a1bc",
  storageBucket: "",
  messagingSenderId: "484816427810",
  appId: "1:484816427810:web:15df067b4f36dfd3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
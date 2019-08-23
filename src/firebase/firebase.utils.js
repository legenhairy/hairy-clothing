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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
  	const { displayName, email } = userAuth;
  	const createdAt = new Date();

  	try {
  	  await userRef.set({
  	  	displayName,
  	  	email,
  	  	createdAt,
  	  	...additionalData
  	  })
  	} catch (error) {
  	  console.log('error creating user', error.message);
  	}
  }

  return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  /*fire off the batch request*/
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
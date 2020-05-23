import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './firebase.config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  data.forEach((category) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, category);
  });

  return await batch.commit();
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

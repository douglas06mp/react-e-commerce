import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBqKsQWzY1NKAslGSMzN6Qw2ko6VLg96a0',
  authDomain: 'react-e-commerce-e170c.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-e170c.firebaseio.com',
  projectId: 'react-e-commerce-e170c',
  storageBucket: 'react-e-commerce-e170c.appspot.com',
  messagingSenderId: '409610674317',
  appId: '1:409610674317:web:1a2c61ce3accf56c2902c4',
  measurementId: 'G-ZJFJHTMCNB',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB4H8mEL6VmvbmDgzR9TPflVe2MoTCc9sI",
  authDomain: "crwn-database.firebaseapp.com",
  databaseURL: "https://crwn-database.firebaseio.com",
  projectId: "crwn-database",
  storageBucket: "",
  messagingSenderId: "71287184093",
  appId: "1:71287184093:web:56b4435196869b88"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
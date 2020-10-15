import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDsGC7WL9t1tUuNTYalCkBD8Uq2f7Bojh4",
  authDomain: "crwn-db-931ad.firebaseapp.com",
  databaseURL: "https://crwn-db-931ad.firebaseio.com",
  projectId: "crwn-db-931ad",
  storageBucket: "crwn-db-931ad.appspot.com",
  messagingSenderId: "963895389297",
  appId: "1:963895389297:web:b90052cdbc11c0e9d47fd0",
  measurementId: "G-5GZTV369JB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
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
      console.log('error creating user', error.message)
    }
  }
  return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

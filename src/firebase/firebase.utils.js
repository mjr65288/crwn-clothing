import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD0inyojFt5293eaNp9KHetOs0wOUgdeSQ",
  authDomain: "crwn-db-bc60a.firebaseapp.com",
  projectId: "crwn-db-bc60a",
  storageBucket: "crwn-db-bc60a.appspot.com",
  messagingSenderId: "16325441587",
  appId: "1:16325441587:web:77a043d95b9bf343534b46",
  measurementId: "G-BXK42EWLZJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  //console.log(snapShot);
  //console.log(firestore.doc('users/128fdashadu'));
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

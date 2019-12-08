import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey:
    "AIzaSyCX9DXcBV0JQV0Rnuu2e2OD3aeicgMoF0k",
  authDomain:
    "fragrance-db.firebaseapp.com",
  databaseURL:
    "https://fragrance-db.firebaseio.com",
  projectId: "fragrance-db",
  storageBucket:
    "fragrance-db.appspot.com",
  messagingSenderId: "802916175797",
  appId:
    "1:802916175797:web:6fb713d075df5f095593fc",
  measurementId: "G-B02VT7GK5L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;

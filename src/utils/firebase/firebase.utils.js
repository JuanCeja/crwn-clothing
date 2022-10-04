// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhtQMvFbtX2Iw81OUf2S07S7uRYXiEc8",
  authDomain: "crwn-clothing-db-7db69.firebaseapp.com",
  projectId: "crwn-clothing-db-7db69",
  storageBucket: "crwn-clothing-db-7db69.appspot.com",
  messagingSenderId: "923490631951",
  appId: "1:923490631951:web:ba8c467478bb1e99e87e7a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// google setup
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt,
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};
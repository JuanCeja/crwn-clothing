// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signIn } from '/firebase/auth';

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

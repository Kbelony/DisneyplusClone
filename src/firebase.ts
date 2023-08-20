// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUy8Z53oIfwIdKHRUlqsAYTSXkmtsHdM",
  authDomain: "disneyplus-clone-44b8e.firebaseapp.com",
  projectId: "disneyplus-clone-44b8e",
  storageBucket: "disneyplus-clone-44b8e.appspot.com",
  messagingSenderId: "430820995952",
  appId: "1:430820995952:web:5188f5203e09f41f9e55b5",
  measurementId: "G-EYTWP2Q9E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = firebase.storage// Ajoutez cette ligne

export { app, analytics, provider, storage, firestore, auth }; // Ajoutez 'auth' ici
export const db = getFirestore(app);
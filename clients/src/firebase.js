// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfExxDld12vZHHLH2WGokDaaVDfSDGMs",
  authDomain: "jobs-finder-jin.firebaseapp.com",
  projectId: "jobs-finder-jin",
  storageBucket: "jobs-finder-jin.appspot.com",
  messagingSenderId: "520785360496",
  appId: "1:520785360496:web:ee07987ac78fad63c366b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWoP6foxibGx-7tZQ8-QZUgJttyO32yo",
  authDomain: "movie-app-62211.firebaseapp.com",
  projectId: "movie-app-62211",
  storageBucket: "movie-app-62211.appspot.com",
  messagingSenderId: "175660892824",
  appId: "1:175660892824:web:5ad2e9fbdebb64a5fe46ed",
  measurementId: "G-GPKWP85ZGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth= getAuth(app);
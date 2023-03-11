// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfz7WYMGQ8PRINKZtAiQMNdrACD8HMK9s",
  authDomain: "settle-loans.firebaseapp.com",
  projectId: "settle-loans",
  storageBucket: "settle-loans.appspot.com",
  messagingSenderId: "1011771087335",
  appId: "1:1011771087335:web:39686af600b30bb3f84542",
  measurementId: "G-SSDJZJYQFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

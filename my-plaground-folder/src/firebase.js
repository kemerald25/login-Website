// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHH4rZ03bW7SUtoDZPAiTwSk6smYg9PoM",
  authDomain: "login-c9140.firebaseapp.com",
  projectId: "login-c9140",
  storageBucket: "login-c9140.appspot.com",
  messagingSenderId: "964495607632",
  appId: "1:964495607632:web:a89d42097af9f4d7724e55",
  measurementId: "G-W043HTJXQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

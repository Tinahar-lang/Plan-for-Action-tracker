// Import the functions that i need from the SDKs i need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that i will want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgDpacGJtY3lmHKEmF_VsN9bZWD3AfKsw",
  authDomain: "plantforaction.firebaseapp.com",
  projectId: "plantforaction",
  storageBucket: "plantforaction.firebasestorage.app",
  messagingSenderId: "874479552356",
  appId: "1:874479552356:web:a415318e5b5a3fe38f5c71",
  measurementId: "G-D0KZ996W3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
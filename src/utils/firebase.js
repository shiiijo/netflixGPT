// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvGqTjXZy-NQdA6wRgMk-iwZTwT_mRst4",
  authDomain: "netflixgpt-bc29d.firebaseapp.com",
  projectId: "netflixgpt-bc29d",
  storageBucket: "netflixgpt-bc29d.appspot.com",
  messagingSenderId: "224693274636",
  appId: "1:224693274636:web:0a7ab7d83a978bf00bc629",
  measurementId: "G-1NN73J0S6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZsDDGs4FHDCkAvFjL9AHKDzCnLC0f3Vc",
  authDomain: "react-d0da1.firebaseapp.com",
  projectId: "react-d0da1",
  storageBucket: "react-d0da1.appspot.com",
  messagingSenderId: "120080122483",
  appId: "1:120080122483:web:b5ed1b88841a25994e6006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

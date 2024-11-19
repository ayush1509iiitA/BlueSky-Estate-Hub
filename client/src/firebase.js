// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d3cfd.firebaseapp.com",
  projectId: "mern-estate-d3cfd",
  storageBucket: "mern-estate-d3cfd.appspot.com",
  messagingSenderId: "741986939816",
  appId: "1:741986939816:web:a8aaa8436ffd5477a5639d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbe9HADdb4lYNOqvLUpfOlsZlzkGMK0fc",
  authDomain: "email-password-auth-fire-9ae00.firebaseapp.com",
  projectId: "email-password-auth-fire-9ae00",
  storageBucket: "email-password-auth-fire-9ae00.firebasestorage.app",
  messagingSenderId: "397433476411",
  appId: "1:397433476411:web:e319c1b4091fde417b931e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

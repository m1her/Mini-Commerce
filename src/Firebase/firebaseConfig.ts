// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuHXLB",
  authDomain: "mini-ecommerce-4be43.firebaseapp.com",
  databaseURL:
    "https://mini-ecommerce-4be43-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mini-ecommerce-4be43",
  storageBucket: "mini-ecommerce-4be43.appspot.com",
  messagingSenderId: "1005640969157",
  appId: "1:1005640969157:web:05ddec12b6e8c242cd39ac",
  measurementId: "G-Q10D91CMKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

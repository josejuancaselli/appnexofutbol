// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe-WphNm2As-Q8f-D0bGKNi1cufUnA7gc",
    authDomain: "nexofutbolapp.firebaseapp.com",
    projectId: "nexofutbolapp",
    storageBucket: "nexofutbolapp.firebasestorage.app",
    messagingSenderId: "312332444884",
    appId: "1:312332444884:web:2e7fad79ee6d2530a3c741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

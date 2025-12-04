// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrvm8w9eY80tWUPKwLtHXosOIPEfAI8GE",
    authDomain: "bellabox.firebaseapp.com",
    projectId: "bellabox",
    storageBucket: "bellabox.firebasestorage.app",
    messagingSenderId: "607448842210",
    appId: "1:607448842210:web:de2f86183ce20e256303bb",
    measurementId: "G-EWCJREW4VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;

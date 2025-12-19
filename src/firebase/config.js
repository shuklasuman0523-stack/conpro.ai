// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXC42v83RIgaJNrjXl83Q0BSazETxcCrc",
  authDomain: "bigbets.firebaseapp.com",
  projectId: "bigbets",
  storageBucket: "bigbets.firebasestorage.app",
  messagingSenderId: "115447033234",
  appId: "1:115447033234:web:b11768e6737dbb6beda54b",
  measurementId: "G-71YPE14949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, storage, db, auth };

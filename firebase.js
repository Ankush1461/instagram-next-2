// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQs3stLJxjQnPxupLjrzqZ_M--A2ucjzg",
  authDomain: "instagram-2-app.firebaseapp.com",
  projectId: "instagram-2-app",
  storageBucket: "instagram-2-app.appspot.com",
  messagingSenderId: "489454194591",
  appId: "1:489454194591:web:7d68f841dcdbf5264a77aa",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };

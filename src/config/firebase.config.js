// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABhV3AvnJgzzLp-QLm9igmuP25zZFKLg",
  authDomain: "memo-a5a85.firebaseapp.com",
  projectId: "memo-a5a85",
  storageBucket: "memo-a5a85.firebasestorage.app",
  messagingSenderId: "957525838874",
  appId: "1:957525838874:web:e9d988e878460e3449d5a3",
  measurementId: "G-J7ZJJ08T1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Collection references
export const USERS_COLLECTION = 'users';
export const DEPARTMENTS_COLLECTION = 'departments';
export const BOOKS_COLLECTION = 'books';

export { app, db, analytics }; 
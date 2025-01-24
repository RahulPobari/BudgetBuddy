// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0UvcFL6sZ2KEt9T0en-RhyY6aau-PVc",
  authDomain: "budgetbuddy-138b7.firebaseapp.com",
  projectId: "budgetbuddy-138b7",
  storageBucket: "budgetbuddy-138b7.firebasestorage.app",
  messagingSenderId: "248436281822",
  appId: "1:248436281822:web:2d78de835faabcada54d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app,
    {
        persistence: getReactNativePersistence(AsyncStorage),
    }
);

//db
export const firestore = getFirestore(app);


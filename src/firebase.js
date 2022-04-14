import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "jovethtecnologia-d15a2.firebaseapp.com",
  databaseURL: "https://jovethtecnologia-d15a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jovethtecnologia-d15a2",
  storageBucket: "jovethtecnologia-d15a2.appspot.com",
  messagingSenderId: "90905529948",
  appId: "1:90905529948:web:1a7cb781b51bc03365a099",
  measurementId: "G-LPMSD236GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

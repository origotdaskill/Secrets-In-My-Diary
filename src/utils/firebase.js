
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "secrets-in-my-diary-5041f.firebaseapp.com",
  projectId: "secrets-in-my-diary-5041f",
  storageBucket: "secrets-in-my-diary-5041f.appspot.com",
  messagingSenderId: "1010787782828",
  appId: "1:1010787782828:web:97c841ba8e643dadc9cf09",
  measurementId: "G-5Q63G7DVRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

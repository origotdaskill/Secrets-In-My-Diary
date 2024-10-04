
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "secrets-in-my-diary-cecac.firebaseapp.com",
  projectId: "secrets-in-my-diary-cecac",
  storageBucket: "secrets-in-my-diary-cecac.appspot.com",
  messagingSenderId: "353685590286",
  appId: "1:353685590286:web:b13b8f948530484b40875f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGHgX_dMH7QFVfB9YPRoB6po-kfAXo5rw",
  authDomain: "typeboard-56447.firebaseapp.com",
  projectId: "typeboard-56447",
  storageBucket: "typeboard-56447.firebasestorage.app",
  messagingSenderId: "89861487307",
  appId: "1:89861487307:web:48c057f8ac56334211b94e"
};


const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
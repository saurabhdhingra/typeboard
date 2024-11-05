import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-Ghkcoq0t36Z3bOpe6lHEnNKFKzu42U",
  authDomain: "typeboard-56447.firebaseapp.com",
  projectId: "typeboard-56447",
  storageBucket: "typeboard-56447.firebasestorage.app",
  messagingSenderId: "89861487307",
  appId: "1:89861487307:web:d3d31e06275dee0d11b94e"
};


const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
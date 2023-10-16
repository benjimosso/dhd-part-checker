// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_w9vo4oYwK3ylo7GezgH07p1bxp9lcZc",
  authDomain: "dhd-part-checker.firebaseapp.com",
  projectId: "dhd-part-checker",
  storageBucket: "dhd-part-checker.appspot.com",
  messagingSenderId: "710019930066",
  appId: "1:710019930066:web:5d200091a5feea01829a0b",
  measurementId: "G-RRN43KLRN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
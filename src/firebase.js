// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCljQLkHGPqwUF-4kKZaUJxEq_LANcjVMc",
  authDomain: "micro2-soriano-torres.firebaseapp.com",
  projectId: "micro2-soriano-torres",
  storageBucket: "micro2-soriano-torres.appspot.com",
  messagingSenderId: "691550576445",
  appId: "1:691550576445:web:a188f6fa901d554c1a2f54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
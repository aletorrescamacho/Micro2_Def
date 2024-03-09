// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfitVQdsDZ5EHVB084u6fRYmTxAviUnB4",
  authDomain: "micro2-5bbac.firebaseapp.com",
  projectId: "micro2-5bbac",
  storageBucket: "micro2-5bbac.appspot.com",
  messagingSenderId: "90359441386",
  appId: "1:90359441386:web:f436c561ade0541c83b493"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

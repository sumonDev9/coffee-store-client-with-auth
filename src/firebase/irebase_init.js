// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOgBrxsh1i7dbEv1xEqe9orctLmtQ8Vo",
  authDomain: "coffee-store-c3b24.firebaseapp.com",
  projectId: "coffee-store-c3b24",
  storageBucket: "coffee-store-c3b24.firebasestorage.app",
  messagingSenderId: "607996056113",
  appId: "1:607996056113:web:4a710ada0851f9ef1dbb10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
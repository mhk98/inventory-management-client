// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5t7l5EWcdt4s16He_pbEbd6BZDidr2Y",
  authDomain: "inventory-management-sys-6f222.firebaseapp.com",
  projectId: "inventory-management-sys-6f222",
  storageBucket: "inventory-management-sys-6f222.appspot.com",
  messagingSenderId: "775504002249",
  appId: "1:775504002249:web:dedb90c564cd8fed922118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;
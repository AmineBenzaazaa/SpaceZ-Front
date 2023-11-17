// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
  authDomain: "fir-auth-65294.firebaseapp.com",
  projectId: "fir-auth-65294",
  storageBucket: "fir-auth-65294.appspot.com",
  messagingSenderId: "105428798939",
  appId: "1:105428798939:web:49a9375f32ea94d4dfebfe",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { auth };




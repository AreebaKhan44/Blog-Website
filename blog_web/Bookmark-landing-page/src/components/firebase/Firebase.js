//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { auth } from "./../firebase"; 


const firebaseConfig = {
  apiKey: "AIzaSyDU3XFPYKKKjP0SI4YBwDSeezRLZJC_5zg",
  authDomain: "fir-auth-11-f8adb.firebaseapp.com",
  projectId: "fir-auth-11-f8adb",
  storageBucket: "fir-auth-11-f8adb.appspot.com",
  messagingSenderId: "1056684219120",
  appId: "1:1056684219120:web:12517ed4eaf0e71cb94035",
  measurementId: "G-H1LB0135LG",
  WebClientId: "1056684219120-79b0opt4nere3ck1sl0p70uir0pslqok.apps.googleusercontent.com",
  WebClientSecret: "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",
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};










// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDU3XFPYKKKjP0SI4YBwDSeezRLZJC_5zg",
//   authDomain: "fir-auth-11-f8adb.firebaseapp.com",
//   projectId: "fir-auth-11-f8adb",
//   storageBucket: "fir-auth-11-f8adb.appspot.com",
//   messagingSenderId: "1056684219120",
//   appId: "1:1056684219120:web:12517ed4eaf0e71cb94035",
//   measurementId: "G-H1LB0135LG"

// }

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export { app, auth };

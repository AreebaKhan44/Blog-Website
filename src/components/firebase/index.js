// Import the Firebase SDK and authentication services
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIoLUFVN0lkNXWB2ZCraswLA3HxJIQWXU",
  authDomain: "auth-84ba7.firebaseapp.com",
  projectId: "auth-84ba7",
  storageBucket: "auth-84ba7.appspot.com",
  messagingSenderId: "209882297528",
  appId: "1:209882297528:web:7e8df3c07df93ece11704d",
  measurementId: "G-HRQ6WHYN1B",
  WebClientId: "209882297528-tsh53nj9kt15o83ujfqrjql9n4jhusdu.apps.googleusercontent.com",
  WebClientSecret: "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",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
};

const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
};


export { auth };







// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyA5UJ6bmav4g1nh7fdn_c4JKoN-WHzm80Q",
//   authDomain: "emailpasswordlogin-937f3.firebaseapp.com",
//   projectId: "emailpasswordlogin-937f3",
//   storageBucket: "emailpasswordlogin-937f3.appspot.com",
//   messagingSenderId: "808772455307",
//   appId: "1:808772455307:web:bb91cfd157cc7c046efd8e"
// };

// const app = initializeApp(firebaseConfig);
// export const database = getAuth(app)
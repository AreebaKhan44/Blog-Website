// import React from "react";
// import { FaEnvelope , FaLock } from "react-icons/fa6";
// import { signInWithGoogle } from "../firebase/index";
// import "./SignIn.css";
// const Login = () => {

//   return (
//     <div className="logincontainer">
    
//       <div className="maincontainer">
//         <div className="left">
//           <form className="form" >
//             {/* <img src={logo} alt="signlogo" className="logo" /> */}
//             <h3>Hello ! Welcome back</h3>
//             <div className="input-fieldregister">
//               <FaEnvelope className="i" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 required
             
//               />
//             </div>
//             <div className="input-fieldregister">
//               <FaLock className="i" />
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 name="password"
//                 required
               
//               />
//             </div>
//             <input type="submit" value="Login" className="loginbtn" />
//             <p className="aftertext">Or Sign in with social platforms</p>
//             {/* <button className="googlebtn">
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 loading="lazy"
//                 alt="google logo"
//               />
//               <span>Signin with Google</span>
//             </button> */}

// <button class="login-with-google-btn" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//       <h1>{localStorage.getItem("name")}</h1>
//       <h1>{localStorage.getItem("email")}</h1>
//       <img src={localStorage.getItem("profilePic")} />
//           </form>
//           <p className="signuptext">Don't have an account ? <span ><a to={'/register'} className="chngetxtcol">Signup</a></span></p>
//         </div>
//         <div className="right"></div>
//       </div>
//     </div>
//   );
// };

// export default Login;










// import logo from '../../logo.svg';
// import './SignIn.css';
// import { useEffect, useState } from 'react';
// import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase/index';


// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userData, setUserData] = useState({})


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (result) => {
//       if (result) {

//         const {displayName, email} = result
//         setUserData({ displayName, email })

//         setIsLoggedIn(true)
//       } else {
//         setIsLoggedIn(false)
//       }

//     })

//     return () => unsubscribe();
//   },[])
  
//   const SignUpUsingGoogle = () => {

//     const provider = new GoogleAuthProvider()
//     signInWithPopup(auth, provider)
//       .then((result) => {

//         const { displayName, email } = result.user;
//         setUserData({ displayName, email })

//         setIsLoggedIn(true)
//       }).catch((error) => {

//         console.log({ error });

//       });
//   }

//   const Logout = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       setUserData({})
//       setIsLoggedIn(false)
//     }).catch((error) => {
//       // An error happened.
//       console.log({ error });
//     });
//   }

//   return (
//     <div className="App">

//       {!isLoggedIn &&
//         <button onClick={SignUpUsingGoogle} type="button" className="login-with-google-btn" >
//           Sign in with Google
//         </button>
//       }

//       {isLoggedIn &&
//         <div className="wrapper">
//           <div className="profile-card js-profile-card">

//             <div className="profile-card__img">
//               <img src="https://pbs.twimg.com/profile_images/1680659910860869632/0YdmM9FN_400x400.jpg" alt="profile card" />
//             </div>

//             <div className="profile-card__cnt js-profile-cnt">
//               <div className="profile-card__name">{userData.displayName}</div>
//               <div className="profile-card__txt">{userData.email}</div>
//               <div className="profile-card-loc">
//               </div>
//               <div className="profile-card-ctr">
//                 <button className="profile-card__button button--orange" onClick={Logout}>Log out</button>
//               </div>
//             </div>

//           </div>
//         </div>
//       }



//     </div>
//   );
// }

// export default App;











import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import InputControl from "../../components/signup/InputControl";
import { auth } from "../firebase/index";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/blog");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    // Trigger the Google sign-in popup
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google sign-in successful, you can handle the result here
        const user = result.user;
        console.log("Google sign-in result:", user);
        navigate("/blog");
      })
      .catch((error) => {
        // Handle Google sign-in errors
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          type="email"
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          type="password"
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <div className={styles.footer1}>
            <button
              onClick={handleGoogleSignIn}
              className={styles.googleButton}
            >
              Login with Google
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;












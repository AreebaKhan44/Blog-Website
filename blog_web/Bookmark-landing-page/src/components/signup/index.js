// import React, { useEffect, useState } from "react";
// import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
// //import logo from "../assets/logo.png";
// import "./SignUp.css";

// const Register = () => {

//   return (
//     <div className="registercontainer">
//       <div className="registermaincontainer">
        
//         <div className="registerright"></div>
//         <div className="registerleft">
//           <form  className="registerform">
//             {/* <img src={logo} alt="signlogo" className="registerlogo" /> */}
//             <h3>Get Started With Free Account..</h3>
//             <div className="input-fieldregister">
//               <FaUser className="i" />
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 name="firstName"
               
//               />
//             </div>
//             <div className="input-fieldregister">
//               <FaUser className="i" />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 name="lastName"
                
//               />
//             </div>
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
//             <div className="input-fieldregister">
//               <FaLock className="i" />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="cPassword"
             
//               />
//             </div>
//             <input type="submit" value="Register" className="registerbtn" />
//             <p className="aftertext">Or Sign up with social platforms</p>
//             <button className="googlebtn">
//               {/* <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 loading="lazy"
//                 alt="google logo"
//               /> */}
//               <span>Signup with Google</span>
//             </button>
//           </form>
//           <p className="signintext">
//             Already have an account ?
//             <span>
//               <a to={"/login"} className="chngetxtcol">
//                 Signin
//               </a>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Register;















// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import InputControl from "../../components/signup/InputControl";
// import { auth } from "../../components/firebase/index";
// import styles  from'./Signup.module.css'; // Import custom CSS for styling

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     cPassword: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.firstName || !values.lastName || !values.email || !values.password || !values.cPassword) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     if (values.password !== values.cPassword) {
//       setErrorMsg("Passwords do not match");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.password)
//       .then(async (res) => {
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.firstName + " " + values.lastName,
//         });
//         setSubmitButtonDisabled(false);
//         navigate("/blog");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     const provider = new GoogleAuthProvider();

//     // Trigger the Google sign-in popup
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // Google sign-in successful, you can handle the result here
//         const user = result.user;
//         console.log("Google sign-in result:", user);
//         navigate("/blog");
//       })
//       .catch((error) => {
//         // Handle Google sign-in errors
//         console.error("Error during Google sign-in:", error);
//       });
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h1 className="card-title text-center">Signup</h1>

//               <InputControl
//                 type="text"
//                 label="First Name"
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, firstName: event.target.value }))
//                 }
//                 placeholder="Enter your first name"
//               />
//               <InputControl
//                 type="text"
//                 label="Last Name"
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, lastName: event.target.value }))
//                 }
//                 placeholder="Enter your last name"
//               />
//               <InputControl
//                 type="email"
//                 label="Email"
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, email: event.target.value }))
//                 }
//                 placeholder="Enter email address"
//               />
//               <InputControl
//                 type="password"
//                 label="Password"
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, password: event.target.value }))
//                 }
//                 placeholder="Enter password"
//               />
//               <InputControl
//                 type="password"
//                 label="Confirm Password"
//                 onChange={(event) =>
//                   setValues((prev) => ({ ...prev, cPassword: event.target.value }))
//                 }
//                 placeholder="Confirm password"
//               />

//               <div className="text-center">
//                 <b className="text-danger">{errorMsg}</b>
//               </div>

//               <div className="d-grid gap-2 mt-3">
//                 <button className="btn btn-primary" disabled={submitButtonDisabled} onClick={handleSubmission}>
//                   Signup
//                 </button>
//                 <button className="btn btn-danger mt-2" onClick={handleGoogleSignIn}>
//                   Signup with Google
//                 </button>
//               </div>

//               <div className="mt-3 text-center">
//                 Already have an account?{" "}
//                 <Link to="/login">Login</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;












import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import InputControl from "../../components/signup/InputControl";
import { auth } from "../../components/firebase/index";
import styles from "./Signup.module.css"; 

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.password ||
      !values.cPassword
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (values.password !== values.cPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.firstName + " " + values.lastName,
        });
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

    signInWithPopup(auth, provider)
      .then((result) => {

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
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h1 className={`${styles.cardTitle} text-center`}>Signup</h1>

              <InputControl
                type="text"
                label="First Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, firstName: event.target.value }))
                }
                placeholder="Enter your first name"
              />
              <InputControl
                type="text"
                label="Last Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, lastName: event.target.value }))
                }
                placeholder="Enter your last name"
              />
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
                  setValues((prev) => ({ ...prev, password: event.target.value }))
                }
                placeholder="Enter password"
              />
              <InputControl
                type="password"
                label="Confirm Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, cPassword: event.target.value }))
                }
                placeholder="Confirm password"
              />

              <div className={`${styles.textCenter} mt-3`}>
                <b className={`${styles.textDanger}`}>{errorMsg}</b>
              </div>

              <div className={`${styles.dGrid} gap-2 mt-3`}>
                <button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                >
                  Signup
                </button>
                {/* <button
                  className={`${styles.btn} ${styles.btnDanger} mt-2`}
                  onClick={handleGoogleSignIn}
                >
                  Continue with Google
                </button> */}
              </div>

              <div className={`${styles.mt3} ${styles.textCenter}`}>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;















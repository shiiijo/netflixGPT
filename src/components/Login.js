import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { validateFormData } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const name = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleToSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = async () => {
    // data validation
    const validationMessage = validateFormData(
      email.current.value,
      password.current.value
    );
    if (validationMessage !== "ok") {
      setErrorMessage(validationMessage);
      return;
    }
    setErrorMessage(null);
    if (!isSignInForm) {
      //sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/68919917?s=400&u=8963cbbd9fdd7d18f66b9f64564cc97346cc3e30&v=4",
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: auth.currentUser.uid,
                  displayName: auth.currentUser.displayName,
                  email: auth.currentUser.email,
                  photoURL: auth.currentUser.photoURL,
                  phoneNumber: auth.currentUser.phoneNumber,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        className="absolute"
      />
      <form
        className="bg-black absolute p-12 text-white bg-opacity-80 mx-auto right-0 left-0 my-36 w-1/4 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-semibold text-3xl my-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-lg text-red-500 font-semibold">{errorMessage}</p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="px-4 p-2 my-4  w-full bg-gray-800 rounded-lg"
            placeholder="Full name"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          className="px-4 p-2 my-4  w-full bg-gray-800 rounded-lg"
          placeholder="Email or phone number"
        ></input>
        <input
          ref={password}
          type="password"
          className="px-4 p-2 my-4  w-full bg-gray-800 rounded-lg"
          placeholder="Password"
        ></input>
        <button
          className="bg-red-700 p-2 my-6 w-full rounded-lg"
          onClick={() => handleSubmit()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? "New to Netflix? " : " Already a member? "}
          <Link
            className="underline"
            onClick={() => {
              toggleToSignUp();
              setErrorMessage(null);
            }}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

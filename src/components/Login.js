import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateFormData } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, LOGIN_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const name = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
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
            photoURL: USER_AVATAR,
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img src={LOGIN_BG} alt="bg" className="absolute" />
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

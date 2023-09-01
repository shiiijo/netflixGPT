import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateFormData } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const email = React.useRef(null);
  const password = React.useRef(null);

  const toggleToSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    // data validation
    const validationMessage = validateFormData(
      email.current.value,
      password.current.value
    );
    errorMessage !== "ok" && setErrorMessage(validationMessage);

    //sign-in
  };

  const handleSignUp = () => {
    // data validation
    const validationMessage = validateFormData(
      email.current.value,
      password.current.value
    );
    errorMessage !== "ok" && setErrorMessage(validationMessage);

    // sign-up
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
        className="absolute"
      />
      {isSignInForm ? (
        <form
          className="bg-black absolute p-12 text-white bg-opacity-80 mx-auto right-0 left-0 my-36 w-1/4 rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-semibold text-3xl my-6">Sign In</h1>
          <p className="text-lg text-red-500 font-semibold">{errorMessage}</p>
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
            onClick={() => handleSignIn()}
          >
            Sign In
          </button>
          <p>
            New to Netflix?{" "}
            <Link
              className="underline"
              onClick={() => {
                toggleToSignUp();
                setErrorMessage(null);
              }}
            >
              Sign up now.
            </Link>
          </p>
        </form>
      ) : (
        <form
          className="bg-black absolute p-12 text-white bg-opacity-80 mx-auto right-0 left-0 my-36 w-1/4 rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-semibold text-3xl my-6">Sign Up</h1>
          <p className="text-lg text-red-500 font-semibold">{errorMessage}</p>
          <input
            type="text"
            className="px-4 p-2 my-4  w-full bg-gray-800 rounded-lg"
            placeholder="Full name"
          ></input>
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
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign Up
          </button>
          <p>
            Already a member?{" "}
            <Link
              className="underline"
              onClick={() => {
                toggleToSignUp();
                setErrorMessage(null);
              }}
            >
              Sign in now.
            </Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;

import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // clear redux store user data
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black py-6 px-8 z-10 w-screen flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="pt-5">
          <img src={user.photoURL} className="h-10 rounded-full" />
          <p className="">{user.displayName}</p>
          <button className="pt-2" onClick={() => handleSignOut()}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

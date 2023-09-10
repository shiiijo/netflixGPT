import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  React.useEffect(() => {
    // it is a event listner api given by firebase , it does what is defined inside when user state[signin, signout , signup] changes
    // in our case we will dispatch redux action when user state changes to save user data & to delete user data from redux store
    // it is defined here because we want to make data consistant for whole app
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed-up & signed-in
        const { uid, displayName, email, photoURL, phoneNumber } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            phoneNumber: phoneNumber,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

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

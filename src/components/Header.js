import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isGptEnabled = useSelector((store) => store.gpt.isGptEnabled);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
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
    <div className="absolute bg-gradient-to-b from-black  px-8 z-30 w-screen flex justify-between">
      <img className="w-56 cursor-pointer" src={LOGO} />
      {user && (
        <div className="flex">
          <button
            className="bg-purple-800 p-2 m-14 h-10 rounded-lg text-white"
            onClick={handleGptSearch}
          >
            {isGptEnabled ? "Netflix Browse" : "GPT Search"}
          </button>
          <div className="pt-7 text-white">
            <img src={user.photoURL} />
            <p className="">{user.displayName}</p>
            <button className="pt-2" onClick={() => handleSignOut()}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

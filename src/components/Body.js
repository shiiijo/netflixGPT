import React from "react";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  React.useEffect(() => {
    // it is a event listner api given by firebase , it does what is defined inside when user state[signin, signout , signup] changes
    // in our case we will dispatch redux action when user state changes to save user data & to delete user data from redux store
    // it is defined here because we want to make data consistant for whole app
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed-up & signed-in
        const uid = user.uid;
      } else {
        // User is signed out
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

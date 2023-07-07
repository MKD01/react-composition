import { useState } from "react";
import { IsSignedInContext } from "./IsSignedIn";
import Navbar from "../components/Navbar";
import SignInMessage from "../components/SignInMessage";

export const IsSignedInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <IsSignedInContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <Navbar />
      {isSignedIn ? children : <SignInMessage />}
    </IsSignedInContext.Provider>
  );
};

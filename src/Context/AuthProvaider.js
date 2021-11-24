import React, { createContext } from "react";
import useFirbase from "../Hooks/UseFirebase";

export const AuthContex = createContext();

const AuthProvaider = ({ children }) => {
  const allContext = useFirbase();
  return (
    <AuthContex.Provider value={allContext}>{children}</AuthContex.Provider>
  );
};

export default AuthProvaider;

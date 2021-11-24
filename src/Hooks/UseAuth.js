import { useContext } from "react";
import { AuthContex } from "../Context/AuthProvaider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;

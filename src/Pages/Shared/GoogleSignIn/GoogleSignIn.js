import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const GoogleSignIn = () => {
  const { googleProviderLogin } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleProviderLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="p-2 border-2 border-slate-100 hover:border-yellow-400 shadow-md rounded-full flex items-center  hover:-translate-y-1"
    >
      <FaGoogle className="mr-2"></FaGoogle>
      Sign up with Google
    </button>
  );
};

export default GoogleSignIn;

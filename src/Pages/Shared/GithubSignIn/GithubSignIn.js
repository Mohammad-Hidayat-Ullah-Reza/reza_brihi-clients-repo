import { GithubAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const GithubSignIn = () => {
  const { providerLogin } = useContext(AuthContext);
  const provider = new GithubAuthProvider();

  const handleGithubLogin = () => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };
  return (
    <button
      onClick={handleGithubLogin}
      className="p-2 border-2 border-slate-100 hover:border-black  shadow-md rounded-full flex items-center hover:text-gray-800 hover:-translate-y-1"
    >
      <FaGithub className="mr-2"></FaGithub>
      Sign up with Github
    </button>
  );
};

export default GithubSignIn;

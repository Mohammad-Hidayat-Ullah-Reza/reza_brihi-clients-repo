import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useState } from "react";
import GoogleSignIn from "../../Shared/GoogleSignIn/GoogleSignIn";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import GithubSignIn from "../../Shared/GithubSignIn/GithubSignIn";

const Signup = () => {
  const { emailAndPasswordSignUp, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleEmailAndPasswordSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    emailAndPasswordSignUp(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => console.log(e));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="lg:grid grid-cols-5">
      <div className="col-span-2">
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=740&t=st=1666663690~exp=1666664290~hmac=deeec60fa94f3942fae9fbbbcbb4c8581b71c0493f552177e6c586043cf80cdf"
          alt="a women in red dress signing up in her tablet"
        />
      </div>
      <div className="col-span-3 m-5 flex flex-col items-center justify-center">
        <form onSubmit={handleEmailAndPasswordSignUp} className="w-full">
          <div className="form-control w-full max-w-xl mx-auto">
            <h4 className="text-3xl font-bold">
              Sign <span className="text-red-600">Up</span>
            </h4>
            <p className="mt-2 mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600">
                Log in
              </Link>
            </p>

            {/* --------------Input Field Start -------------- */}
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input input-bordered w-full max-w-xl"
            />
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Your Photo URL"
              className="input input-bordered w-full max-w-xl"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="examples@gnail.com"
              className="input input-bordered w-full max-w-xl"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xl"
            />
            <label
              onClick={() => setShowPassword(!showPassword)}
              className="label ml-auto hover:cursor-pointer"
            >
              {showPassword ? (
                <>
                  <FaEye></FaEye>
                  <span className="label-text-alt ml-1">Show password</span>
                </>
              ) : (
                <>
                  <FaEyeSlash></FaEyeSlash>
                  <span className="label-text-alt ml-1">Hide password</span>
                </>
              )}
            </label>
            {/* --------------Input Field end -------------- */}

            {/* ----------checkbox start---------- */}
            <div className="cursor-pointer flex justify-start items-center my-1">
              <label className="label">
                <input type="checkbox" className="checkbox mr-3" />
              </label>
              <span className="label-text">
                I agree to{" "}
                <span className="text-red-600">Terms of Service</span> and{" "}
                <span className="text-red-600">Privacy Policy</span>
              </span>
            </div>
            {/* --------------checkbox end------------------ */}

            <div className="flex items-center">
              <span className="w-full h-1 border-b-2 border-gray-400"></span>
              <span className="mx-2">or</span>
              <span className="w-full h-1 border-b-2 border-gray-400"></span>
            </div>

            {/* ----------------button start--------------- */}
            <div className="flex items-center justify-around my-3">
              <GoogleSignIn></GoogleSignIn>
              <GithubSignIn></GithubSignIn>
            </div>
            <button
              className="p-2 w-fit my-7 mx-auto px-10 border-2 border-slate-100 hover:border-red-600  shadow-md rounded-full text-xl font-semibold hover:text-red-700 hover:-translate-y-1"
              type="submit"
            >
              Create account
            </button>
            {/* ----------------button end--------------- */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="lg:grid grid-cols-5">
      <div className="col-span-2">
        <img
          src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1666703564~exp=1666704164~hmac=77de252a38e0485970810e7ec1d72d1c3891856ccd7186b26470196b0e03b578"
          alt="a women in red dress signing up in her tablet"
        />
      </div>
      <div className="col-span-3 m-5 flex flex-col items-center justify-center">
        <div className="form-control w-full max-w-xl">
          <h4 className="text-3xl font-bold">
            Log <span className="text-red-600">In</span>
          </h4>
          <p className="mt-2 mb-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-600">
              Sign up
            </Link>
          </p>

          {/* --------------Input Field Start -------------- */}

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="examples@gnail.com"
            className="input input-bordered w-full max-w-xl"
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "password" : "text"}
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

          <div className="flex items-center">
            <span className="w-full h-1 border-b-2 border-gray-400"></span>
            <span className="mx-2">or</span>
            <span className="w-full h-1 border-b-2 border-gray-400"></span>
          </div>

          {/* ----------------button start--------------- */}
          <div className="flex items-center justify-around my-3">
            <button className="p-2 border-2 border-slate-100 hover:border-yellow-400 shadow-md rounded-full flex items-center  hover:-translate-y-1">
              <FaGoogle className="mr-2"></FaGoogle>
              Sign up with Google
            </button>
            <button className="p-2 border-2 border-slate-100 hover:border-black  shadow-md rounded-full flex items-center hover:text-gray-800 hover:-translate-y-1">
              <FaGithub className="mr-2"></FaGithub>
              Sign up with Github
            </button>
          </div>
          <button
            className="p-2 w-fit my-7 mx-auto px-10 border-2 border-slate-100 hover:border-red-600  shadow-md rounded-full text-xl font-semibold hover:text-red-700 hover:-translate-y-1"
            type="submit"
          >
            Log In
          </button>
          {/* ----------------button end--------------- */}
        </div>
      </div>
    </div>
  );
};

export default Login;

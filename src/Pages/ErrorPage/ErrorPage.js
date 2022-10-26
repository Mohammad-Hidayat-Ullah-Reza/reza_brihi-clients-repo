import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:grid grid-cols-2 p-10">
      <div>
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg?w=740&t=st=1666754199~exp=1666754799~hmac=577f4d4810d4a5048e98ae3f6e9de5037f5f10eddb5dbcf3cc48953371665269"
          alt="error 404"
        />
      </div>
      <div className="text-center my-auto">
        <p className="font-bold text-3xl mb-3">
          <span className="text-red-700">Oops!</span> Something went wrong.
        </p>
        <p className="font-semibold text-2xl">
          Please Return to{" "}
          <Link
            to="/"
            className="btn bg-red-600 border border-red-600 hover:bg-red-800"
          >
            Homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

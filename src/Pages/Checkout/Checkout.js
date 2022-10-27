import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { id, course_name } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <img
          className="max-h-screen"
          src="https://img.freepik.com/free-vector/shopping-payment-online-process-computer-smartphone-tablet_1150-65523.jpg?w=740&t=st=1666831799~exp=1666832399~hmac=442d3748cbf18420d11f371306453bc58b65fb14eca6fdcd1408d902c53fb2f5"
          alt="blue smartphone checkout"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full px-10 mt-10 lg:mt-0">
        <div className="flex flex-col items-center w-full">
          <img
            className="mask mask-squircle w-20"
            title={user?.displayName}
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <h3 className="text-2xl mt-3 mb-7">Order {id}</h3>
        </div>
        <div className="text-left rounded text-xl text-fuchsia-900 font-semibold bg-red-200 w-full p-2 mb-6">
          Order Summary
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center w-full text-sm md:text-xl text-fuchsia-900 font-semibold mb-4 ">
            <p>Name: </p>
            <p className="text-right">{user?.displayName}</p>
          </div>
          <div className="flex justify-between items-center w-full text-sm md:text-xl text-fuchsia-900 font-semibold mb-4 ">
            <p>Email:</p>
            <p>{user?.email}</p>
          </div>
          <div className="flex justify-between items-center w-full text-sm md:text-xl text-fuchsia-900 font-semibold mb-4 ">
            <p>Course Name:</p>
            <p className="uppercase text-right">{course_name}</p>
          </div>
          <div className="flex justify-between items-center w-full text-sm md:text-xl text-fuchsia-900 font-semibold mb-4 ">
            <p>Status:</p>
            <p>Unpaid</p>
          </div>
        </div>
        <button className="btn btn-outline md:btn-lg btn-wide bg-red-700 text-white mx-auto my-5 hover:-translate-y-2">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Checkout;

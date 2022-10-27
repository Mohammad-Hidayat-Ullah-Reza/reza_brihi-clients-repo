import React from "react";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";

const Stat = () => {
  return (
    <div className="w-full px-20">
      <div className="stats stats-vertical md:stats-horizontal shadow my-10 w-full">
        <div className="stat place-items-center">
          <div className="stat-title uppercase">Online Courses</div>
          <div className="stat-value text-red-900 my-3">1,000+</div>
          <FaSchool className="text-xl"></FaSchool>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title uppercase">teachers</div>
          <div className="stat-value text-red-900 my-3">300+</div>
          <FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title uppercase">students hired</div>
          <div className="stat-value text-red-900 my-3">10,000+</div>
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/512/942/942833.png"
            alt="icon of approved"
          />
        </div>
      </div>
    </div>
  );
};

export default Stat;

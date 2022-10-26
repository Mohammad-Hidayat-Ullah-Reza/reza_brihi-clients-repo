import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesCard from "../Shared/CoursesCard/CoursesCard";

const Courses = () => {
  const coursesDetails = useLoaderData();

  return (
    <div className="grid grid-cols-11">
      {/* --------sidebar start--------- */}
      <div className="hidden md:col-span-2 md:flex flex-col items-start ">
        {coursesDetails.map((courseDetails) => (
          <Link className="mb-3 btn btn-ghost text-left" key={courseDetails.id}>
            {courseDetails.course_name}
          </Link>
        ))}
      </div>
      {/* --------sidebar end--------- */}
      <div className="col-span-11 md:col-span-9">
        {/* ---------Hero start--------- */}
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h2 className="mb-8 text-5xl font-bold">
                  Learn a new skill online on your time
                </h2>
                <p className="mb-1 text-2xl">1,000+ Online Courses</p>
                <p className="mb-1 text-2xl">300+ teachers</p>
                <p className="mb-1 text-2xl">10,000+ students hired</p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------Hero end--------- */}

        <div>
          <h3 className="text-3xl font-bold text-red-900 uppercase text-center mt-20">
            Available courses
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
            {coursesDetails.map((courseDetails) => (
              <CoursesCard
                key={courseDetails.id}
                courseDetails={courseDetails}
              ></CoursesCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

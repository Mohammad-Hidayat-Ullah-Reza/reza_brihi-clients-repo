import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const courseInfo = useLoaderData();
  const { id, img, course_name, course_desc } = courseInfo;
  return (
    <div>
      <div className="flex items-center justify-center">
        <img className="max-w-2/3 max-h-screen" src={img} alt={course_name} />
      </div>
      <div className="mx-40">
        <h2 className="my-10 text-center text-4xl font-bold text-red-700 uppercase">
          {course_name}
        </h2>
        <p className=" text-2xl text-fuchsia-900">{course_desc}</p>
        <div className="flex justify-center my-10">
          <Link
            to={`/courses/${id}/checkout`}
            className="btn text-xl text-fuchsia-900 border-none bg-gradient-to-r  from-amber-200 hover:from-yellow-300  via-yellow-300 hover:via-yellow-300 to-yellow-300 hover:to-amber-200 shadow-lg hover:-translate-y-2 "
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

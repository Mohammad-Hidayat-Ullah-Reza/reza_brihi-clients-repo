import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ courseInfo }) => {
  const { id, img, course_name, course_desc } = courseInfo;
  return (
    <div className="card m-10 bg-base-100 shadow-xl hover:-translate-y-3">
      <figure className="px-10 pt-10">
        <img src={img} alt={course_name} className="rounded-xl max-h-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-red-600 uppercase">{course_name}</h2>
        <p>
          {course_desc.slice(0, 201)}
          <span className="text-red-900">...</span>
        </p>
        <div className="card-actions w-full">
          <Link to={`/courses/${id}`} className="btn w-full bg-red-700 mt-2">
            See Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

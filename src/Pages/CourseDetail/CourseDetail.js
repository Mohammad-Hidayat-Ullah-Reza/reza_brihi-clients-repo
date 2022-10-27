import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaDollarSign, FaFilePdf } from "react-icons/fa";

const CourseDetail = () => {
  const courseInfo = useLoaderData();
  const { id, img, course_name, course_desc } = courseInfo;
  const ref = React.createRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [11.7, 8.3],
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <img className="max-w-2/3 max-h-screen" src={img} alt={course_name} />
      </div>
      <div ref={ref} className="mx-5 lg:mx-40">
        <div className="flex justify-center items-center">
          <h2 className="my-5 mr-3 md:my-10 text-center text-xl md:text-4xl font-bold text-red-700 uppercase">
            {course_name}
          </h2>
          {/* --------pdf generator start -------- */}
          <Pdf
            targetRef={ref}
            filename="course-details.pdf"
            options={options}
            x={1}
            y={1}
            scale={0.65}
          >
            {({ toPdf }) => (
              <FaFilePdf
                onClick={toPdf}
                className="text-lg md:text-3xl text-red-700 hover:cursor-pointer"
                title="download pdf file"
              ></FaFilePdf>
            )}
          </Pdf>
          {/* --------pdf generator end-------- */}
        </div>
        <p className="text-md md:text-2xl text-fuchsia-900 text-justify">
          {course_desc}
        </p>
        <div className="flex justify-center my-10">
          <Link
            to={`/courses/${id}/checkout`}
            className="btn text-md md:text-xl text-fuchsia-900 border-none bg-gradient-to-r  from-amber-200 hover:from-yellow-300  via-yellow-300 hover:via-yellow-300 to-yellow-300 hover:to-amber-200 shadow-lg hover:-translate-y-2 "
          >
            <FaDollarSign />
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

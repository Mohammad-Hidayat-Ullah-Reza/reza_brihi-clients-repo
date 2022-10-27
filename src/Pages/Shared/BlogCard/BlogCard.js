import React from "react";
import { FaHashtag } from "react-icons/fa";

const BlogCard = ({ blogContent }) => {
  return (
    <article className="my-10">
      <div className="text-red-600 flex items-start">
        <FaHashtag className="mr-2 mt-1 text-2xl"></FaHashtag>
        <h4 className=" font-semibold text-2xl mb-3 ">
          {blogContent.question}
        </h4>
      </div>
      <p className="text-lg text-fuchsia-900">{blogContent.answer}</p>
    </article>
  );
};

export default BlogCard;

import React from "react";

const BlogCard = ({ blogContent }) => {
  return (
    <div className="my-10">
      <h4 className="text-red-600 font-semibold text-2xl mb-3">
        {blogContent.question}
      </h4>
      <p className="text-lg text-fuchsia-900">{blogContent.answer}</p>
    </div>
  );
};

export default BlogCard;

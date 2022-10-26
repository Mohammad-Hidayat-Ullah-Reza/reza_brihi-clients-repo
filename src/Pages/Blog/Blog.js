import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../Shared/BlogCard/BlogCard";
import authorImg from "../../assets/media/author.png";

const Blog = () => {
  const blogContents = useLoaderData();
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="w-full uppercase text-center text-4xl text-fuchsia-900 font-bold py-20 bg-orange-100">
        Welcome to <span className="text-red-500">REZABRIHI Blog</span>
      </h1>
      <div className="mx-5 lg:mx-40 pt-8 pb-2 border-b-2 border-gray-400">
        {blogContents.map((blogContent) => (
          <BlogCard key={blogContent.id} blogContent={blogContent}></BlogCard>
        ))}
      </div>
      <div className="my-6 ml-5 lg:ml-44 mr-auto">
        <p className="font-semibold text-lg text-red-700 mb-2">Author:</p>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src={authorImg} alt="" />
          <div className="">
            <p className="my-0 py-0 text-fuchsia-900">
              Mohammad Hidayat Ullah Reza
            </p>
            <p className="text-xs font-semibold text-fuchsia-900">
              front end developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

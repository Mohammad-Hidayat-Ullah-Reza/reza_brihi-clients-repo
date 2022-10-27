import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Shared/Carousel/Carousel";
import Stat from "../Shared/Stat/Stat";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>

      {/* --------hero start-------- */}
      <div className="hero min-h-screen bg-base-200 md:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-photo/portrait-hacker_23-2148165927.jpg?w=360&t=st=1666858985~exp=1666859585~hmac=71406007a1828cf47bfe9448cddcb5bac11f71166e755b06a66eddd4284e4cee"
            className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
            alt="portrait of a programmer"
          />
          <img
            src="https://img.freepik.com/free-photo/caucasian-young-man-sitting-front-laptop-looking-camera_23-2148187169.jpg?w=996&t=st=1666859160~exp=1666859760~hmac=466c5b56bee0e8ca4ff443941efb8c2a90cf19c3b9fb071f32cc5617d40a84f2"
            className="max-w-sm rounded-lg shadow-2xl lg:hidden"
            alt="portrait of a programmer"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-red-700">REZABRIZI</span>
            </h1>
            <p className="py-6 mb-5">
              REZABRIZI is a Bangladeshi online interactive platform that offers
              free coding classes in 12 different programming languages
              including Python (pandas-Python library, Beautiful Soup-Python
              Library), Java, Go, JavaScript (jQuery, AngularJS, React.js), Ruby
              (Ruby on Rails-Ruby framework), SQL, C++, C#, Swift, and Sass, as
              well as markup languages HTML and CSS. The site also offers a paid
              "Pro" option that gives users access to personalized learning
              plans, quizzes, and realistic projects.
            </p>
            <Link
              to="/courses"
              className="btn btn-lg animate-bounce border-none bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
      {/* --------hero start-------- */}

      {/* --------join courses start-------- */}

      <div className="md:grid grid-cols-7 px-20 mt-10 md:my-20">
        <div className="col-span-3 mb-5">
          <img
            className="rounded-lg hidden md:block"
            src="https://img.freepik.com/free-photo/portrait-young-cheerful-european-guy-with-dreads-hipster-male-student-inviting-join-online-course_1258-109308.jpg?w=1060&t=st=1666857351~exp=1666857951~hmac=d148b6d96d856b9048c2b0b7fa9d825c8fdde33000c3f086bedc27d400564cc1"
            alt="a person signaling below"
          />
          <img
            className="rounded-lg md:hidden"
            src="https://img.freepik.com/free-photo/confident-brunette-girl-showing-team-members-great-link-gain-new-skills-pointing-fingers-down-inviting-join-courses-group-smiling-advertise-product-standing-white-background_176420-51452.jpg?w=996&t=st=1666858232~exp=1666858832~hmac=3ba3202b84196a668965c75666a79225e4e9047bc311a326e283407ff392eae0"
            alt="a person signaling below"
          />
        </div>
        <div className="col-span-4 flex flex-col items-center justify-center">
          <h3 className="uppercase font-semibold text-3xl text-red-700 mb-7 text-center">
            Join Our Courses Now
          </h3>
          <Link
            to="/courses"
            className="btn animate-bounce border-none bg-gradient-to-r from-red-400 via-red-500 to-red-600"
          >
            Courses
          </Link>
        </div>
      </div>
      {/* --------join courses end-------- */}

      {/* --------achievement start-------- */}
      <h3 className="text-4xl text-red-700 font-bold mt-10 text-center uppercase">
        Our Achievement
      </h3>
      <Stat></Stat>
      {/* --------achievement end-------- */}
    </div>
  );
};

export default Home;

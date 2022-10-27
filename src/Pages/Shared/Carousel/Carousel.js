import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=1380&t=st=1666855625~exp=1666856225~hmac=e244ce8305e8a15fb5df75336346438209e9b6e828d6fd65390326a3db2cee85"
            className="w-full max-h-screen"
            alt="code testing"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              <FaAngleLeft className="text-lg"></FaAngleLeft>
            </a>
            <a href="#slide2" className="btn btn-circle">
              <FaAngleRight className="text-lg"></FaAngleRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/programer-learning-programming-languages-by-computer-laptop-website-tutorial-channel-online-education-class-vector-illustration-software-development-programming-languages-learning_1150-55428.jpg?w=996&t=st=1666855707~exp=1666856307~hmac=8cc5bb31a2fbd3798f20c0a13f9bc3e221545d699d2da9dbd2d282254e225491"
            className="w-full max-h-screen"
            alt="red shirt dude with a laptop"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              <FaAngleLeft className="text-lg"></FaAngleLeft>
            </a>
            <a href="#slide3" className="btn btn-circle">
              <FaAngleRight className="text-lg"></FaAngleRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-vector/developer-writing-code-website-laptop-computer-designer-flat-vector-illustration-coding-programming_74855-13055.jpg?w=1060&t=st=1666855845~exp=1666856445~hmac=2da745712be7cdf63d2a36bbf86b81c02cc5c444ff28f121384d78c59a6fcb7e"
            className="w-full max-h-screen"
            alt="a person sitting on a chair and coding."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              <FaAngleLeft className="text-lg"></FaAngleLeft>
            </a>
            <a href="#slide4" className="btn btn-circle">
              <FaAngleRight className="text-lg"></FaAngleRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

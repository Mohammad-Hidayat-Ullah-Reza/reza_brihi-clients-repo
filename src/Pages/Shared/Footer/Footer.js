import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="w-32" src="logo.png" alt="logo of rezabrihi" />
          <p>
            Rezabrihi Education Ltd.
            <br />
            Providing reliable online courses since 2018
          </p>
        </div>
        <div>
          <span className="footer-title">Courses</span>
          <Link to="/courses/01" className="link link-hover">
            Front end development
          </Link>
          <Link to="/courses/02" className="link link-hover">
            Back end development
          </Link>
          <Link to="/courses/09" className="link link-hover">
            Cloud development
          </Link>
          <Link to="/courses/07" className="link link-hover">
            Blockchain development
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/courses" className="link link-hover">
            Courses
          </Link>
          <Link to="/faq" className="link link-hover">
            Faq
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

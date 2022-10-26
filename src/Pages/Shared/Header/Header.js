import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="sticky top-0 ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              className="w-20 mr-2"
              src="/logo.png"
              alt="logo of rezabrihi"
            />
            REZABRIHI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li tabIndex={0}>
              <Link to="courses">
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link>Front End Development</Link>
                </li>
                <li>
                  <Link>Back End Development</Link>
                </li>
                <li>
                  <Link>Full Stack Development</Link>
                </li>
                <li>
                  <Link>Php Programming</Link>
                </li>
                <li>
                  <Link>Learn Flutter</Link>
                </li>
                <li>
                  <Link>MEVN Stack Development</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="faq">FAQ</Link>
            </li>
          </ul>
        </div>
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleLogOut()}
                  className="justify-between btn btn-accent text-white"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-info">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

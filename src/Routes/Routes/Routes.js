import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("http://localhost:5000/blog"),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
        loader: () => fetch(`http://localhost:5000/faq`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

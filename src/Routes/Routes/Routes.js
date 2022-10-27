import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
        loader: () =>
          fetch(
            "https://b610-learning-platform-server-side-eight.vercel.app/blog"
          ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
        loader: () =>
          fetch(
            `https://b610-learning-platform-server-side-eight.vercel.app/faq`
          ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(
            `https://b610-learning-platform-server-side-eight.vercel.app/courses`
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(
            `https://b610-learning-platform-server-side-eight.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "courses/:id/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-learning-platform-server-side-eight.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

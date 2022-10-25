import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
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
    ],
  },
]);

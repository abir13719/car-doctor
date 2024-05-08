import { createBrowserRouter } from "react-router-dom";
import Base from "./Base";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;

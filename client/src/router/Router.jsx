import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Upload from "../pages/owner/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
    ],
  },
]);

export default router;

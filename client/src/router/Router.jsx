import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Upload from "../pages/owner/Upload";
import Ownerlyout from "../layout/Ownerlyout";
import ListBook from "../pages/owner/ListBook";
import AdminLayout from "../layout/AdminLayout";
import Book from "../pages/admin/Book";
import Dashboard from "../pages/admin/Dashboard";

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
  {
    path: "/owner",
    element: <Ownerlyout />,
    children: [
      {
        path: "",
        element:<Upload />
      },
      {
        path: "blist",
        element:<ListBook /> 
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
    {
        path: "",
        element:<Dashboard />
      },
      {
        path: "book",
        element:<Book />
      }
      
    ]
  }

]);

export default router;

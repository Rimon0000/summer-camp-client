import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Classes from "../pages/Home/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        }
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);
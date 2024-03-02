import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

import React from "react";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      {
        path:"/post-job",
        element:<CreateJob/>
      },
      {
        path:"/my-job",
        element:<MyJobs/>
      },
      {
        path:"/salary",
        element:<SalaryPage/>
      },
      {
        path:"edit-job/:id",
        element:<UpdateJob/>,
        loader : ({params}) => fetch()
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

export default router;

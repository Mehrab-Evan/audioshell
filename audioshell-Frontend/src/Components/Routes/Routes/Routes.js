import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../../../Layout/Main';
import Login from '../../Authentication/Login/Login';
import Signup from '../../Authentication/Signup/Signup';
import AddNew from '../../Book/Add/AddNew';
import Home from './../../Home/Home';
import Dashboard from '../../Book/Dashboard/Dashboard';
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addnew",
        element: <AddNew />,
      },
    ],
  },
]);

export default Router;
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './Component/Root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home.jsx';
import CardDetails from './Component/CardDetails.jsx';
import Donation from './Component/Donation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader:()=>fetch('cardData.json'),
      
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>,
        // loader:()=>fetch('cardData.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        // loader:()=>fetch('cardData.json')
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

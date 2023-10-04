import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './Navber';
import Short from './Short';
import Details from './Details';
const router = createBrowserRouter([
  {
      path: "/",
      element: <Navber></Navber>,
      children:[
        {
          path :'/',
          element:<Short></Short>
        },
        {
          path:'/details',
          element:<Details></Details>
        }
      ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './coponents/Root/Root';
import Home from './coponents/Home/Home';
import Error from './coponents/Error/Error';
import JobDetails from './coponents/JobDetails/JobDetails';
import AppliedJobs from './coponents/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

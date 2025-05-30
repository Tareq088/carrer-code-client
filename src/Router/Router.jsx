import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true,
            path:'/home',
            Component:Home
        },
        {
          path:'/jobs/:id',
          hydrateFallbackElement:<p>Loading.........</p>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
          Component:JobDetails
        },
        {
          path:"/jobApply/:id",
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:"/myApplications",
          element:<PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
        },
        {
          path:"/addJob",
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:"/myPostedJobs",
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path:'/register',
            Component: Register
        },
        {
          path:'/signin',
          Component:SignIn
        }
    ]
  },
]);
export default router;
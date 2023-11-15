import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../layouts/Main";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute";
import RoomDetail from "../DynamicPages/RoomDetail/RoomDetail";
import SignUp from "../pages/SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "room/details/:id",
        element: <PrivateRoute><RoomDetail></RoomDetail></PrivateRoute>
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import App from "../App";
import MainRoutes from "../protectedRoutes/MainRoutes";
import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { api } from "../config/axiosInstance";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const useHydration = async () => {
    try {
      let res = await api.get("/api/auth/getMe");
      dispatch(addUser(res.data.data));
    } catch (error) {
      console.log("Error in hydration", error);
    }
  };
  useEffect(() => {
    useHydration();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <App />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainRoutes />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

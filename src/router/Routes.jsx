import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import AppDetails from "../pages/AppDetails";
import AllApps from "../pages/AllApps";
import Installation from "../pages/Installation";
import InstalledAppsPage from "../pages/InstalledAppsPage";
import ErrorLayout from "../components/ErrorLayout";
import Error from "../pages/Error"; 
import ErrorPage2 from "../pages/ErrorPage2"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorLayout errorComponent={<Error />} />,
    children:  [
      {
        index: true, 
        element: <Home />,
        loader: () => fetch("/appsData.json").then(res => res.json()),
      },
      {
        path: "apps/:id",
        element: <AppDetails />,
        loader: () => fetch("/appsData.json").then(res => res.json()),
      },
      {
        path: "apps",
        element: <AllApps />,
        loader: () => fetch("/appsData.json").then(res => res.json()),
        errorElement: <ErrorPage2 />,
      },
      {
        path: "installation",
        element: <Installation />,
        loader: () => fetch("/appsData.json").then(res => res.json()),
      },
      {
        path: "installed",
        element: <InstalledAppsPage />,
        loader: () => fetch("/appsData.json").then(res => res.json()),
      },
    ],
  },
]);
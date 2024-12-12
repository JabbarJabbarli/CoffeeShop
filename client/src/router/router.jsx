import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Franchising from "../pages/FranchisingPage";
import LocationPage from "../pages/LocationPage";
import StoriesPage from "../pages/StoriesPage";
import FormPage from "../pages/FormPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/franchising",
    element: <Franchising />,
  },
  {
    path: "/location",
    element: <LocationPage />,
  },
  {
    path: "/stories",
    element: <StoriesPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);

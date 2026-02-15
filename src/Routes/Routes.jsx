import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Profile from "../Pages/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CardsDetails from "../Pages/CardsDetails";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AllItems from "../Pages/AllItems";
import UpdateProfile from "../Pages/UpdateProfile";
import BookNow from "../Pages/BookNow";
import BuyNow from "../Pages/BuyNow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-now",
        element: (
          <PrivateRoute>
            <BookNow />
          </PrivateRoute>
        ),
      },
      {
        path: "/buy-now",
        element: (
          <PrivateRoute>
            <BuyNow />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:serviceId",
        element: <CardsDetails></CardsDetails>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

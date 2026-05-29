import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Overview from "./Pages/Overview/Overview";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tailwind.css";
import { Navigate } from 'react-router-dom';
import Staff from "./Pages/Staff/Staff";
import AddStaff from "./Pages/Staff/AddStaff";
import StaffDetails from "./Pages/Staff/StaffDetails";
import EditStaff from "./Pages/Staff/EditStaff";
import SubscriptionPlans from "./Pages/Subscriptions/SubscriptionPlans";
import CheckoutPage from "./Pages/Subscriptions/CheckoutPage";
import Offers from "./Pages/Offers/Offers";
import OfferDetails from "./Pages/Offers/OfferDetails";
import Finance from "./Pages/Finance/Finance";
import Booking from "./Pages/Booking/Booking";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />
      },
      { path: "overview", element: <Overview /> },
      { path: "staff", element: <Staff /> },
      { path: "staff/add", element: <AddStaff /> },
      { path: "staff/:id", element: <StaffDetails /> },
      { path: "staff/edit/:id", element: <EditStaff /> },
      { path: "subscriptions", element: <SubscriptionPlans /> },
      { path: "subscriptions/checkout/:planId", element: <CheckoutPage /> },
      { path: "offers", element: <Offers /> },
      { path: "offers/:id", element: <OfferDetails /> },
      { path: "finance", element: <Finance /> },
      { path: "booking", element: <Booking /> },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer position="top-right" />
    <RouterProvider router={router} />
  </>
);
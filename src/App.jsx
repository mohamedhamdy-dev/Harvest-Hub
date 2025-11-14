import Account from "./register/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./home/Home";
import ProductListPage from "./shop/productListPage/ProductListPage";
import CartDetialsPage from "./cart/CartDetialsPage";
import Register from "./register/Register";
import SignIn from "./register/SignIn";
import ProductDetailsPage from "./shop/productDetailsPage/ProductDetailsPage";
import BlogDetailsPage from "./blog/BlogDetailsPage";
import ForgotPassword from "./register/ForgotPassword";
import ResetPassword from "./register/ResetPassword";
import EnterCode from "./register/EnterCode";
import Auction from "./auction/Auction";
import AuctionListingsPage from "./auction/AuctionListingPage";
import AuctionDetailPage from "./auction/AuctionDetailPage";
import CreateAuctionPage from "./auction/CreateAuctionPage";
import MyAuctionsPage from "./auction/MyAuctionsPage";
import Monitor from "./monitor/Monitor";
import FieldDetails from "./monitor/FieldDetails";
import SensorAnalytics from "./monitor/SensorAnalytics";
import AlertsNotifications from "./monitor/AlertsNotifications";
import MerchantSetupPage from "./register/MerchantSetupPage";
import ProfileLayout from "./profile/ProfileLayout";
import ProfileEdit from "./profile/ProfileEdit";
import BasicInfoEdit from "./profile/BasicInfoEdit";
import ChangePassword from "./profile/ChangePassword";
import DeactivateAccount from "./profile/DeactivateAccount";
import ManageUsers from "./controlCenter/ManageUsers";
import ManageBlogs from "./controlCenter/ManageBlogs";
import ControlCenter from "./controlCenter/ControlCenter";
import MyBidsPage from "./auction/MyBidsPage";
import ManageProducts from "./manageProducts/ManageProducts";
import Blog from "./blog/Blog";
import DashboardLayout from "./dashboard/DashboardLayout";
import ProductsDashboard from "./dashboard/ProductsDashboard";
import EquipmentDashboard from "./dashboard/EquipmentDashboard";
import SuppliesDashboard from "./dashboard/SuppliesDashboard";
import ProtectedRoute from "./ui/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <SignIn />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "register",
            element: <Register />,
          },

          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "enter-code",
            element: <EnterCode />,
          },
        ],
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "auctions/:id",
            element: <AuctionDetailPage />,
          },
          {
            path: "merchant/setup",
            element: <MerchantSetupPage />,
          },

          {
            path: "auctions",
            element: <Auction />,
            children: [
              {
                path: "list",
                element: <AuctionListingsPage />,
              },
              {
                path: "my-auctions",
                element: <MyAuctionsPage />,
              },
              {
                path: "new",
                element: <CreateAuctionPage />,
              },
              {
                path: "my-bids",
                element: <MyBidsPage />,
              },
            ],
          },

          {
            path: "control-center",
            element: <ControlCenter />,
            children: [
              {
                path: "manage-users",
                element: <ManageUsers />,
              },
              {
                path: "manage-blogs",
                element: <ManageBlogs />,
              },
            ],
          },

          {
            path: "monitor",
            element: <Monitor />,
            children: [
              {
                path: "field-details",
                element: <FieldDetails />,
              },
              {
                path: "sensor-analytics",
                element: <SensorAnalytics />,
              },
              {
                path: "notification-alerts",
                element: <AlertsNotifications />,
              },
            ],
          },

          {
            path: "manage-products",
            element: <ManageProducts />,
          },
          {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
              {
                path: "products-dashboard",
                element: <ProductsDashboard />,
              },
              {
                path: "equipment-dashboard",
                element: <EquipmentDashboard />,
              },
              {
                path: "supplies-dashboard",
                element: <SuppliesDashboard />,
              },
            ],
          },

          {
            path: "profile",
            element: <ProfileLayout />,
            children: [
              {
                path: "profile-info",
                element: <ProfileEdit />,
              },
              {
                path: "basic-info",
                element: <BasicInfoEdit />,
              },
              {
                path: "change-password",
                element: <ChangePassword />,
              },
              {
                path: "deactivate-account",
                element: <DeactivateAccount />,
              },
            ],
          },

          {
            path: "view-cart",
            element: <CartDetialsPage />,
          },

          {
            path: "products/:type",
            element: <ProductListPage />,
          },

          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "blog-view/:id",
            element: <BlogDetailsPage />,
          },

          {
            path: "product-details/:id",
            element: <ProductDetailsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

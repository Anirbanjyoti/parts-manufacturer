// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Business from "./Pages/Home/Business";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Reviews from "./Pages/Home/Reviews";
import Navbar from "./Pages/Sheared/Navbar";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Sheared/Footer";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Portfolio from "./Pages/Home/Portfolio";
import Blog from "./Pages/Home/Blog";
import MyOrder from "./Pages/Dashboard/User/MyOrder";
import AddReview from "./Pages/Dashboard/User/AddReview";
import MyProfile from "./Pages/Dashboard/User/MyProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./Pages/Checkout/Checkout";
import AddShippingDetails from "./Pages/Dashboard/User/AddShippingDetails";
import NotFound from "./Pages/Sheared/NotFound";
import Users from "./Pages/Dashboard/Admin/Users";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route path="/business" element={<Business />} />
        <Route
          path="/shippingDetails/:purchaseId"
          element={
            <RequireAuth>
              <AddShippingDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout/:purchaseId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>

        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

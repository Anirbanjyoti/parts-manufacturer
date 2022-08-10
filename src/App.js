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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/business" element={<Business />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

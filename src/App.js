// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Business from "./Home/Business";
import Contact from "./Home/Contact";
import Home from "./Home/Home";
import Purchase from "./Home/Purchase";
import Reviews from "./Home/Reviews";
import Login from "./Login/Login";
import Footer from "./Sheared/Footer";
import Navbar from "./Sheared/Navbar";

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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

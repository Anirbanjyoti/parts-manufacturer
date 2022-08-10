import logo from "../../Assets/Images/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
      signOut(auth);
      // localStorage.removeItem('accessToken');
  };
  return (
    <div>
      <div className="navbar bg-accent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns=""
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-accent text-white"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex="0">
                <Link to="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to="/">Submenu 1</Link>
                  </li>
                  <li>
                    <Link to="/">Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/purchase">purchase</Link>
              </li>
              <li>
                <Link to="/business">Business Summery</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
          
              <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
            
              
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="images"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex="0">
              <Link to="/purchase">purchase</Link>
              {/* <ul className="p-2">
          <li><Link to='/'>Submenu 1</Link></li>
          <li><Link to='/'>Submenu 2</Link></li>
        </ul> */}
            </li>
            <li>
              <Link to="/business">Business Summery</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {user.displayName}
         {
          user ? <button className="btn btn-secondary ml-2" onClick={logout}>Sign Out</button>
          : <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
         }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

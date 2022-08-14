import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content mx-auto">
        <h2 className="text-5xl font-bold text-purple-500 mb-4 bg-accent p-5 my-5 rounded-lg">
          Welcome To Your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">
              {!admin ? "My Order" : "Manage All Order"}
            </Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/review">Add A Reviews</Link>
            </li>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">ALl Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add a Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manage">Manage products</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/addBlog">Add Blog Post</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

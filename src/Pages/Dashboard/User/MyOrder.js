import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-left">
        <thead>
          <tr>
            {/* <th className=""></th> */}
            <th>SL</th>
            <th>Product ID</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Shipping</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <th>{order._id}</th>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
             
              <td>
                {/* {order.price && !order.paid && (
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
                {order.price && order.paid && (
                  <div>
                    <p>
                      <span className="text-success">Paid</span>
                    </p>
                    <p>
                      Transaction id:{" "}
                      <span className="text-success">{order.transactionId}</span>
                    </p>
                  </div>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;

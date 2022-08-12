import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Checkout = () => {
  const { purchaseId } = useParams();
  const [user] = useAuthState(auth);
  const [shipping, setShipping] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/shippingDetails/${purchaseId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [purchaseId]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product ID</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Shipping</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>{user.displayName}</td>
            <td>{purchaseId}</td>
            <td>{shipping?.address}</td>
            <td>{shipping?.address}</td>
            <td>
              <button>pending...</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;

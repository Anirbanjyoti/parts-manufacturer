import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
    const { purchaseId } = useParams();
    const [user] = useAuthState(auth);
  const [shipping, setShipping] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/shippingDetails";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShipping(data));
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-left">
        <thead>
          <tr>
            {/* <th className=""></th> */}
            <th>Name</th>
            <th>Product ID</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Shipping</th>
          </tr>
        </thead>
        <tbody>
          
         
         {
            shipping?.map(ship=>
            <>
            <tr>
            <td>{user.displayName}</td>
            <td>{purchaseId}</td>
            <td>{ship.address}</td>
            <td>{ship.phone}</td>
            <td>
              <button>pending...</button>
            </td>
            </tr>
            </>
            )
         }
          
            {/* {shipping?.map((ship) => (
              <OrderTable key={ship._id} ship={ship}></OrderTable>
            ))} */}
          
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;

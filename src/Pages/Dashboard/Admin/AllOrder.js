import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AllOrder = () => {
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
            {shipping?.map((ship) => (
              <>
                <tr>
                  <td>{user.displayName}</td>
                  <td>{ship._id}</td>
                  <td>{ship.address}</td>
                  <td>{ship.phone}</td>
                  <td>
                    <button>pending...</button>
                  </td>
                </tr>
              </>
            ))}
  
          </tbody>
        </table>
      </div>
    );
  };

export default AllOrder;
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [tools, setTools] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [purchaseId]);
  const navigate = useNavigate();
  const handleCheckout = () => {
    // navigate(`/checkout/${purchaseId}`);
    navigate(`/shippingDetails/${purchaseId}`);
  };
  console.log(user);

  return (
    <div className="w-1/2 mx-auto my-40">
      <div className="user-profile text-xl mb-20">
        <img src={user.photoURL} alt="images" className="rounded-lg"></img>
        <p>
          <strong>Name:</strong> {user.displayName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      {!purchaseId ? (
        <p className="text-4xl font-bold text-purple-400">
          You have no Purchase Products !
        </p>
      ) : (
        <>
          <img src={tools.img} alt="images"></img>
          {/* <h1 className="text-2xl font-bold">Detail of Purchased Tool</h1> */}
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-3xl font-medium font-bold uppercase">
              Click to see Purchase Details
            </div>
            <div class="collapse-content text-xl">
              <p>
                <strong>Product Name:</strong> {tools.tName}
              </p>
              <p>
                <strong>Product Body:</strong> {tools.body}
              </p>
              <p>
                <strong>Product Description:</strong> {tools.desc}
              </p>
              <p>
                <strong>Product price:</strong> {tools.price}
              </p>
              <p>
                <strong>Product Quantity:</strong> {tools.quantity}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="btn btn-primary mt-5 mx-auto text-center bg-secondary"
          >
            Proceed To checkOut
          </button>
        </>
      )}
    </div>
  );
};

export default Purchase;

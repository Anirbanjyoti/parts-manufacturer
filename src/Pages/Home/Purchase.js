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
    navigate(`/checkout/${purchaseId}`);
  };
  console.log(user);

  return (
    <div className="w-1/2 mx-auto my-40">
      <div className="user-profile mb-20">
        <img src={user.photoURL} alt="images" className="rounded-lg"></img>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
      </div>
      {!purchaseId ? (
        <p className="text-4xl font-bold text-purple-400">You have no Purchase Products !</p>
      ) : (
        <>
          <img src={tools.img} alt="images"></img>
          {/* <h1 className="text-2xl font-bold">Detail of Purchased Tool</h1> */}
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium font-bold">
              Click to see Purchase Details
            </div>
            <div class="collapse-content">
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
          {/* Start Shipping address */}
          <div
            tabindex="0"
            class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-8"
          >
            <div class="collapse-title text-xl font-medium font-bold">
              Shipping Details
            </div>
            <div class="collapse-content">
            <form>

            </form>
        
            </div>
          </div>
          {/*End Shipping address */}
          <button
            type="button"
            onClick={handleCheckout}
            className="btn btn-primary mt-5 mx-auto text-center bg-secondary"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Purchase;

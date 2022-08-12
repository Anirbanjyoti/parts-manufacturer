import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import useShippingDetails from "../../../Hooks/useShippingDetails";

const AddShippingDetails = () => {
  const [user] = useAuthState(auth);
  const [tools, setTools] = useState({});
  const {purchaseId} =useParams();
  const [shipping] = useShippingDetails(purchaseId)

  useEffect(() => {
    const url = `http://localhost:5000/tools/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [purchaseId]);

  const handlePlaceOrder  = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      shipping: shipping.name,
      purchaseId: purchaseId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    console.log(e);


    // const url = `http://localhost:5000/shippingDetails`;
    
    axios.post('http://localhost:5000/shippingDetails',order)
    .then(res=>{
      const {data} = res;
      if(data.insertedId){
        toast(' Your Order is Booked!');
      }
     e.target.reset();
    })
      // Redirection page.


  };
  // const navigate = useNavigate();
  // const handleCheckout = () => {
    // navigate(`/checkout/${purchaseId}`);
    // navigate(`/addShipping/${purchaseId}`);
  // };
  return (
    <div className="add-shippingDetails w-1/2 mx-auto collapse-title text-xl font-medium font-bold border border-base-300 rounded-box mt-8">
      <div className="mb-10 text-3xl uppercase">Shipping Details</div>
      <form onSubmit={handlePlaceOrder} className="mt-2 grid">
        <input
          className="mb-2 border-2 p-2 "
          type="text"
          name="name"
          id=""
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <input
          className="mb-2 border-2 p-2"
          type="email"
          name=""
          id=""
          value={user?.email}
          placeholder="Email"
          required
          disabled
        />
          <input
          className="mb-2 border-2 p-2"
          type="text"
          name=""
          id=""
          value={tools.tName}
          placeholder="Tool Name"
          required
          readOnly
        />
        <input
          className="mb-2 border-2 p-2"
          type="text"
          name="address"
          id=""
          placeholder="Address"
          required
        />

        <input
          className="mb-2 border-2 p-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <input type="submit" value="Place Order" className="border-2 p-2 bg-secondary cursor-pointer"/>    
      </form>
    </div>
  );
};

export default AddShippingDetails;

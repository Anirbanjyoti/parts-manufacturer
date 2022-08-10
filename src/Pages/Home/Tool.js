import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { img, tName, body, desc, price } = tool;
  return (
  
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title text-3xl text-bold">{tName}</h2>
      <p className="text-2xl">{body}</p>
      <p>{desc}</p>
      <span>Price: ${price}</span>
      <div className="card-actions justify-end">
        <Link to='/purchase'><button className="btn btn-primary">Buy Now</button></Link>
      </div>
    </div>
  </div>

  );
};

export default Tool;

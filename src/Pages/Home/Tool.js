import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {_id, img, tName, body, desc, price, quantity } = tool;
  const navigate = useNavigate();
  const handleToolDetail =id=>{
      navigate(`/purchase/${id}`)
  }
  return (
  
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title text-3xl text-bold">{tName}</h2>
      <p className="text-2xl">{body}</p>
      <p>{desc}</p>
      <span>Price: ${price}</span>
      <span>Quantity: {quantity} {quantity > 1 ? 'Pcs' :'Pc'}{quantity === 0 && ' /Not Available'}</span>
      <div className="card-actions justify-end">
        <button onClick={()=>handleToolDetail(_id)} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  );
};

export default Tool;

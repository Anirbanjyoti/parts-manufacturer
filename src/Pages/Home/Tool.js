import React from "react";

const Tool = ({ tool }) => {
  const { img, tName, body, desc } = tool;
  return (
  
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{tName}</h2>
      <p>{body}</p>
      <p>{desc}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  );
};

export default Tool;

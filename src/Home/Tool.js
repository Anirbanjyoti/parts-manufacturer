import React from "react";

const Tool = ({ tool }) => {
  const { img, tName, body, desc } = tool;
  return (
  
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{tName}</h2>
      <p>{body}</p>
      <p>{desc}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  );
};

export default Tool;

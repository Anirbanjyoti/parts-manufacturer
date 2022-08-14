import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register, handleSubmit, acknowledged, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/tools`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Successfully added Product");
        reset();
        if (acknowledged) {
          Navigate("/home");
        }
      });
  };
  return (
    <div className="add-product">
      <h1 className="text-4xl">Please Add Product!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2 grid">
        <input
          className="mb-4 border-2 rounded-lg p-2"
          placeholder="Product Name"
          {...register("tName", { required: true, maxLength: 22 })}
        />
        <input
          className="mb-4 border-2 rounded-lg p-2"
          placeholder="Body Name"
          type="text"
          {...register("body")}
        />
        <textarea
          className="mb-4 border-2 rounded-lg p-4"
          placeholder="Product Description"
          {...register("desc", { required: true })}
        />
        <input
          className="mb-4 border-2 rounded-lg p-2"
          type="text"
          placeholder="Photo Url"
          {...register("img")}
        />
        <input
          className="mb-4 border-2 rounded-lg p-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-4 border-2 rounded-lg p-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          type="submit"
          value="Add Product"
          className="border-2 p-2 bg-secondary cursor-pointer"
        />
      </form>
    </div>
  );
};
export default AddProduct;
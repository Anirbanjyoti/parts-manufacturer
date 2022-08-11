import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const { register, handleSubmit, acknowledged } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review`;
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
       toast("Successfully added Review");
        if(acknowledged){
          Navigate('/home');
        }
      });
  };
    return (
        <div className="add-review">
        <h1>Please Add Review!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 mt-2 grid"
      >
        
        <input
          className="mb-2 border-2 p-2"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2 border-2 p-2"
          placeholder="location"
          type="text"
          {...register("location")}
        />
        <textarea
          className="mb-2 border-2 p-2"
          placeholder="review"
          {...register("review",{ required: true})}
        />
        <input
          className="mb-2 border-2 p-2"
          type="text"
          placeholder="Photo Url"
          {...register("img")}
        />
        <input type="submit" value="Add Review" className="border-2 p-2 bg-secondary cursor-pointer"/>
      </form>
    </div>
  );
};


export default AddReview;<h1>Add review</h1>
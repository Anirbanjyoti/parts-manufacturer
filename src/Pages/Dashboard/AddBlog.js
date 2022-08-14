import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const { register, handleSubmit, acknowledged } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      const url = `http://localhost:5000/post`;
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
         toast("Successfully added Your Post");
          if(acknowledged){
            Navigate('/home');
          }
        });
    };
      return (
          <div className="add-BlogPost">
          <h1 className="text-4xl">Please Add Your Post!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 mt-2 grid"
        >
          
          <input
            className="mb-4 border-2 rounded-lg p-2"
            placeholder="title"
            {...register("title", { required: true})}
          />

          <textarea
            className="mb-4 border-2 rounded-lg p-4"
            placeholder="post"
            {...register("post",{ required: true})}
          />
         
          <input type="submit" value="Add Your Blog Post" className="border-2 p-2 bg-secondary cursor-pointer"/>
        </form>
      </div>
    );
  };

export default AddBlog;
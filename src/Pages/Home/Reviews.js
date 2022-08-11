import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold my-10">Reviews</h1>
        <p className="text-2xl mb-14">We are honored to present you our products. </p>
      </div>

  
      <div className="review flex p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(-3).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

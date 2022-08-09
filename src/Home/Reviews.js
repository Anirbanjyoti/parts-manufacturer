import React from "react";
import people1 from "../Assets/Images/article-1.jpg";
import people2 from "../Assets/Images/article-2.jpg";
import people3 from "../Assets/Images/article-3.jpg";
import Review from "./Review";

const Reviews = () => {
    const reviews = [
        {
          _id: 1,
          name: "Winson Herry",
          review:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          location: "California",
          img: people1,
        },
        {
          _id: 2,
          name: "Winson Herry",
          review:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          location: "California",
          img: people2,
        },
        {
          _id: 3,
          name: "Winson Herry",
          review:
            "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
          location: "California",
          img: people3,
        },
      ];
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold my-10">Reviews</h1>
        <p className="text-2xl">We are honored to present you our products. </p>
      </div>

  
      <div className="review flex p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

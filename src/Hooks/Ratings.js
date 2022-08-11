import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'

const Ratings =()=>{
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: 5) => {
    setRating(rate)
    }
    useEffect( () =>{
       
        if(email){
            fetch(`https://secret-dusk-46242.herokuapp.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setRating(rate);
            })
        }
    }, [user])

    return [rating]


    <Rating onClick={handleRating} ratingValue={rating} />
}
export default Ratings;
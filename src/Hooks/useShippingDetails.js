import { useEffect, useState } from "react";

const useShippingDetails = (purchaseId) => {
  const [shipping, setShipping] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/shippingDetails/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [purchaseId]);
  return [shipping];
};
export default useShippingDetails;

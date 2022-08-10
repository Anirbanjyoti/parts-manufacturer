import React from "react";
import BusinessSummery from "./BusinessSummery";

const Business = () => {
  const clients = 
  [
    {
      'id':1,
      'countries': 72,
      'projects': 535,
      'clients': 273,
      'feedback':432
    },
  ]
  return (
    <div className=" my-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold   mb-10">Millions Business Trust US</h1>
        <p className="text-2xl  mb-24">Try to understand Users Expectation</p>
      </div>
      <div>
        <p className="px-20 justify-center">
          {
            clients.map(client=><BusinessSummery key={client.id} client={client}></BusinessSummery>)
          }
        </p>
      </div>
    </div>
  );
};

export default Business;

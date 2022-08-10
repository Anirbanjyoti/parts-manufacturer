import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFlag, faDiagramProject, faUsers,faSmile } from '@fortawesome/free-solid-svg-icons'

const BusinessSummery = ({ client }) => {
  const { countries, projects, clients, feedback } = client;
  
  return (
    <div className="grid md:grid-cols-4 text-center">
      <div class="card card-compact bg-base-100">
        {/* <figure>
          <img src={} alt="images" />
        </figure> */}
        <FontAwesomeIcon icon={faFlag} />
        <div class="card-body">
          <h2 class="text-5xl font-bold">{countries}</h2>
          <p>countries</p>
        </div>
      </div>
      <div class="card card-compact bg-base-100">
        {/* <figure>
          <img src={} alt="images" />
        </figure> */}
        <FontAwesomeIcon icon={faDiagramProject} />
        <div class="card-body">
          <h2 class="text-5xl font-bold">{projects}+</h2>
          <p>projects</p>
        </div>
      </div>
      <div class="card card-compact bg-base-100">

      <FontAwesomeIcon icon={faUsers} />
        <div class="card-body">
          <h2 class="text-5xl font-bold">{clients}+</h2>
          <p>clients</p>

        </div>
      </div>
      <div class="card card-compact bg-base-100">
        
      <FontAwesomeIcon icon={faSmile} />
        <div class="card-body text-center">
          <h2 class="text-5xl font-bold">{feedback}+</h2>
          <p>feedback</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;

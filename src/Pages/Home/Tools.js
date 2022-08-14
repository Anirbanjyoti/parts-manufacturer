import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/tools";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div  className="my-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-10">Auto Tools</h1>
        <p className="text-2xl mb-24">We are honored to present you our products. </p>
      </div>
      <div className="px-12 grid md:grid-cols-3 sm:grid-cols-2 gap-4 my-12 bg-accent py-14">
        {tools.slice(0).reverse().map((tool) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;

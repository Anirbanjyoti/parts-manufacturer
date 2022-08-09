import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = "toolsData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold my-10">Auto Tools</h1>
        <p className="text-2xl">We are honored to present you our products. </p>
      </div>
      <div className="px-12 grid md:grid-cols-3 sm:grid-cols-2 gap-4 my-12">
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;

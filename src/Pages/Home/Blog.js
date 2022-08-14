import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/post";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {
        posts.slice(0).reverse().map((p, index)=><BlogPost key={p._id} p={p} index={index}></BlogPost>)
      }
      
    </div>
  );
};

export default Blog;

import React from 'react';

const BlogPost = ({p, index}) => {
    const {title, post} = p;
    return (
        <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-1/2 mx-auto my-20"
      >
        <div class="collapse-title text-xl font-medium">
        <strong>{index+1}. </strong>
       {title}
        </div>
        <div class="collapse-content">
          <p>{post}</p>
        </div>
      </div>
    );
};

export default BlogPost;
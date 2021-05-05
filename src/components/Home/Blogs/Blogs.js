import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
  return (
    <div className="container mb-5 mt-5" style={{ hieght: "400px" }}>
      <h1>Most Recent Blogs</h1>
      <hr/>
      <div className="d-flex flex-wrap justify-content-between ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
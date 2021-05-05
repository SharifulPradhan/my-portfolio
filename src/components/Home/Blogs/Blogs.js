import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
  return (
    <div className="container mb-5 mt-5" id="blogs">
      <h1>Most Recent Blogs</h1>
      <hr/>
      <div className="d-flex flex-wrap justify-content-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
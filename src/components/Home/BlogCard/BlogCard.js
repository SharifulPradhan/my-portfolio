import React from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = () => {
  return (
    <Card style={{ width: '18rem' }} className='border rounded shadow mb-5 ml-5 mr-5'>
      <Card.Img variant="top" src="https://miro.medium.com/max/700/1*X3P5a3VqgPYqk_bbkmJMrw.jpeg" />
      <Card.Body>
        <Card.Title>Top 10 Things I have Learned by Exploring Javascript Today.</Card.Title>
        <Card.Text>
        I make my day somewhere valuable by learning more about JavaScript. So I will give a brief description of what I have learned so far...
        </Card.Text>
        <a href="https://medium.com/10-things-i-have-learned-by-exploring-java-script/top-10-things-i-have-learned-by-exploring-javascript-today-75a0a572d694"><button className="button-style">Full Blog</button></a>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
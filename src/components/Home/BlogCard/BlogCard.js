import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = () => {
  return (
    <Card style={{ width: '18rem' }} className='border rounded shadow'>
      <Card.Img variant="top" src="https://i.ibb.co/d4SQM4v/8-Y8j-VFch-XJF6-TPp-Q6i6we-W-320-80.jpg" />
      <Card.Body>
        <Card.Title>How Reacts Work</Card.Title>
        <Card.Text>
          React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way using declarative code.
        </Card.Text>
        <button className="button-style">Full Blog</button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
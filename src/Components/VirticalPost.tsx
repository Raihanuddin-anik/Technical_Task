import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { post } from '../type';
interface eachPost {
    post: post;
    key: number;
  
}
const VirticalPost = ({ post }: eachPost) => {
    return (
       
           
                <Col sm={4} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
         
    );
};

export default VirticalPost;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { post } from '../type';
interface eachPost {
    post: post;
    key: number;
  
}
const HorizontalPost = ({ post }: eachPost) => {
    return (
       
                <Col sm={12}>
                    <Card style={{ borderRadius: "10px", margin: "10px" }}>
                        <Card.Img />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text >
                                {post.body}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
           
    );
};

export default HorizontalPost;
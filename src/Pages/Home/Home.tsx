import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import HorizontalPost from '../../Components/HorizontalPost';
import SidePage from '../../Components/SidePage';
import VirticalPost from '../../Components/VirticalPost';
import { post } from '../../type';


const Home = () => {
    const [isTrue, setTrue] = useState(true)
    const [posts, setPosts] = useState([])
    console.log(posts)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(1, 20)))
    }, [])
    return (

        <div style={{ backgroundColor: "#e7edf2" }}>
            <Row>
                <Col sm={3} style={{ backgroundColor: "#eaf1f6", borderRadius: "40px", boxShadow: "-1px 1px -1px 1px" }} >
                    <SidePage isTrue={isTrue} setTrue={setTrue} />
                </Col>
                <Col sm={9}>
                   {isTrue? <Row>
                        {posts.map((data: post) => <HorizontalPost  key={data.id} post={data} />)}
                    </Row>
                    :<Row>

                        {posts.map((data: post) => <VirticalPost key={data.id} post={data} />)}

                    </Row>}
                </Col>
            </Row>
        </div>

    );
};

export default Home;
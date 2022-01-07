import React from 'react';
import { Card ,Container} from 'react-bootstrap';
import { FaNewspaper,FaGripHorizontal } from 'react-icons/fa'
interface eachPost {
    isTrue:boolean;
    setTrue: Function;
   
  
}


const SidePage = ({setTrue,isTrue}:eachPost) => {
    return (
        <div className='text-center'>
            <Container>
                <Card style={{ borderRadius: "10px", margin: "10px" }}>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>Hi Reader</Card.Title>
                        <Card.Text >
                            Lets Read
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ borderRadius: "10px", margin: "10px" }}>
                    <Card.Img />
                    <Card.Body>
                        <h2>View Toggle</h2>
                        <Card.Text className="d-flex" >
                           <h1 onClick={()=>setTrue(true)}  style={{backgroundColor:isTrue==true?"orange":"",cursor:"pointer"}} className="m-auto"><FaNewspaper /></h1>
                           <h1 onClick={()=>setTrue(false)} style={{backgroundColor:isTrue==false?"orange":"",cursor:"pointer"}} className="m-auto"> <FaGripHorizontal/></h1>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ borderRadius: "10px", margin: "10px" }}>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>Hi Reader</Card.Title>
                        <Card.Text >
                            Lets Read
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default SidePage;
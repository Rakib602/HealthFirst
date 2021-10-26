import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Test = (props) => {
    const{name,img,fees} = props.tests;
    return (
        <div>
            <Col className="card-body">
      <Card className="card" border="warning"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Test Name : {name}</Card.Title>
          <Card.Text>Test Fees: {fees} $</Card.Text>
          {/* dynamic route */}

         
          <button className="btn btn-primary"> Book {name} Test </button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Test;
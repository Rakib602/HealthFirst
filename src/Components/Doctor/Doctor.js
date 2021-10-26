import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
const{name,Specialist,img,fees} = props.doctor;

    return (
        <div>
            <Col className="card-body">
      <Card className="card" border="warning"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>Specialist:{Specialist}</Card.Text>
          <Card.Text>Fees: {fees} $</Card.Text>
         
          <button className="btn btn-primary"> Book {name} </button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;
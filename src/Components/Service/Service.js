import React from 'react';
import {  Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = ({service}) => {
const {id,name,detail,img} =service;
    return (
        <div className="">
            <Col className="card-body">
      <Card className="card" border="warning"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>{detail}</Card.Text>

          {/* dynamic route */}

         <Link to={`/booking/${id}`}>
         <button className="btn btn-primary"> Visit {name} Service</button>
         </Link>
         
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;
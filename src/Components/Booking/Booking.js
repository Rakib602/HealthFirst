import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId}=useParams();
    const [singleServices,setSingleServices]=useState([]);

    const [singleService,setSingleService]=useState({});


    useEffect(()=> {
        fetch('/Services.json')
        .then(res=> res.json())
        .then(data=> setSingleServices(data))
    },[])

    useEffect(()=>{
        const foundService = singleServices.find(service=> service.id == serviceId)
        setSingleService(foundService);
        console.log(foundService)
    },[singleServices])
 
    return (
        <div>
            <Col className=" text-dark fw-bold">
      <Card className="" border="warning"> 
        <Card.Img className="img mx-auto mt-3 p-1" style={{width:300}} variant="top" src={singleService?.img} />
        <Card.Body>
          <Card.Title>Service Name : {singleService?.name}</Card.Title>
          <Card.Text>{singleService?.detail}</Card.Text>
       <Link to="/home"><button className="btn btn-danger">Back To Home</button></Link>
        </Card.Body>
      </Card>
    </Col>    
        </div>
    );
};

export default Booking;
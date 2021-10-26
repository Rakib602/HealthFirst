import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import {MdOutlineMedicalServices} from 'react-icons/md';
import { Row } from 'react-bootstrap';
const Services = () => {
    const [services,setServices] =useState([]);

    useEffect(()=>{
        fetch('./Services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="service">
            <h3 className="mt-3 text-primary"> <MdOutlineMedicalServices /> Our Services</h3>
            <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                services.map(service => <Service 
                    key={service.id}
                     service={service}
                ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;
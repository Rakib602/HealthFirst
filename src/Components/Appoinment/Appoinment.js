import React from 'react';
import { Col, Form, Row,Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appoinment = () => {
    return (
        <div>
            <Container>
              <h2 className="pt-3 text-primary">Make an Appoinment</h2>
              <Row className="mb-5" >
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow rounded">
                <Form>
                <Form.Group className="mb-3">
                   <Form.Control type="text" placeholder="Enter Patient name" />
               </Form.Group>
             <Form.Group className="mb-3">
                   <Form.Control type="text" placeholder="Phone Number" />
             </Form.Group>
             <Form.Group className="mb-3">
                   <Form.Control type="text" placeholder="Date of Birth" />
               </Form.Group>
             <Form.Group className="mb-3">
                   <Form.Control type="text" placeholder="Disease Type" />
             </Form.Group>
             <Form.Group className="mb-3">
                   <Form.Control type="text" placeholder="Appoinment Date" />
               </Form.Group>
           <Link to="/doctors"> <Button>Book Appoinment</Button></Link>
                </Form> 
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Appoinment;
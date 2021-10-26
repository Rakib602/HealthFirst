import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Aboutus = () => {
    return (
        <div className="mx-5">
            <h3 className="text-primary">About US</h3>
            <Row className="container gx-5 align-items-center justify-content-center">
            <Col xs={12} lg={6}><img src="https://i.ibb.co/SrCkgDf/New-Project-2-1.png" alt="" className="img-fluid p-3 " /></Col>
            <Col xs={12} lg={6}>
                <h3>We Are <span className="text-primary">Health-First</span> A Medical Clinic</h3>
                <p> The power of community to create health is far greater than any physician, clinic or hospital. We strongly belive this think and serve ourselves as a friend. One's family is the most important thing in life. I look at it this way: One of these days I'll be over in a hospital somewhere with four walls around me. And the only people who'll be with me will be my family.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Aboutus;
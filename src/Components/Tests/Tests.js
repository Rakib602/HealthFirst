import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Test from './Test';

const Tests = () => {
    const [test,setTest] = useState([]);
    useEffect(()=>{
        fetch('./Tests.json')
        .then(res=>res.json())
        .then(data=>setTest(data))

    },[])
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                test.map(tests=><Test
                key = {tests.id}
                tests={tests}
                ></Test>)
            }
            </Row>
        </div>
    );
};

export default Tests;
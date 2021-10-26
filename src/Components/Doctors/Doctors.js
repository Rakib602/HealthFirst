import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        fetch('./Doctors.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div id="doctors">
              <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                doctors.map(doctor=><Doctor
                key={doctors.id}
                doctor={doctor}
                ></Doctor>)
            }
            </Row>
        </div>
    );
};

export default Doctors;
import React from 'react';
import { FaAmbulance } from 'react-icons/fa';
import { MdOutlineLocalHospital } from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
const ContactUs = () => {
    return (
        <div>
            <div className='p-5'>
            <h3>< FaAmbulance color='red'/>To Book Ambulance call us</h3>
            <p>< BsFillTelephoneFill/> 012-6532-568-9746</p>
            </div>
            <hr/>
            <div className='p-5'>
            <h3><MdOutlineLocalHospital color='red'/>To Book ICU call us</h3>
            <p>< BsFillTelephoneFill/> 012-6532-568-9756</p>
            </div>
        </div>

    );
};

export default ContactUs;
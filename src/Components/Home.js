import React from 'react';
import Aboutus from './Aboutus';
import Appoinment from './Appoinment/Appoinment';



import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Aboutus></Aboutus>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;
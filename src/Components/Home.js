import React from 'react';
import Aboutus from './Aboutus';



import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;
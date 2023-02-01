import React from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import ServiceImg from '../asserts/service.jpg'

const Service = () => {
    return ( 
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Our Services"
        btnClass= "hide" />
        </>
     );
}
 
export default Service;
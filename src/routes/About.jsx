import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutImg from '../asserts/about.jpg'

const About = () => {
    return ( 
        <>
        <Navbar />
        <Hero 
          cName="hero-mid"
          heroImg={AboutImg}
          title="About Us"
          btnClass="hide"
         />
        </>
     );
}
 
export default About;
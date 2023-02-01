import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import ContactImg from '../asserts/contact.jpg'

const Contact = () => {
    return ( 
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        btn="hide"
         />
        </>
     );
}
 
export default Contact;
import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destination from '../Components/Destination';



const Home = () => {
    return (
        <>
        <Navbar />
        <Hero 
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          urlText ="Travel Plan"
          url="/"
          btnClass="show"
         />
         <Destination/>
        </>
    );
}
 
export default Home;
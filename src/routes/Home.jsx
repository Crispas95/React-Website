import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';


const Home = () => {
    return (
        <>
        <Navbar />
        <Hero 
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          buttonText ="Travel Plan"
          url="/"
          btnClass="show"
         />
        </>
    );
}
 
export default Home;
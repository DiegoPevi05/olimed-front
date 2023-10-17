import { FC,useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import News from '../components/News';
import Contact from '../components/ContactUs';


const Home = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
        <News/>
        <About/>
        <Contact/>
      </>
    )
}

export default Home;

import { FC,useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';


const Home = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
        <About/>
      </>
    )
}

export default Home;

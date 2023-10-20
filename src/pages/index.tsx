import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import News from '../components/News';
import Contact from '../components/ContactUs';
import Products from '../components/Sections';


const Home = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
        <News/>
        <Products/>
        <About/>
        <Contact/>
      </>
    )
}

export default Home;

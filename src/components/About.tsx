import { useState} from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../components/ui/hoc";
import {  staggerContainer, textVariant,fadeIn } from "../lib/motions";
import {Carousel} from "../assets/images";
import {ChevronLeftCircle, ChevronRightCircle} from "lucide-react";


interface CardProps {
  title: string;
  subtitle: string; 
  image: string;

}

const dataCards:CardProps[] = [
  {
    title:"Quienes somos?",
    subtitle:"La mejor manera de encontrar nuestros producots",
    image: Carousel
  },
  {
    title:"Quienes somos2?",
    subtitle:"La mejor manera de encontrar nuestros producots",
    image: Carousel
  },
  {
    title:"Quienes somos3?",
    subtitle:"La mejor manera de encontrar nuestros producots",
    image: Carousel
  },
]



const Card = (props:CardProps) => {
  const {title,subtitle,image} = props
  return(
    <motion.section 
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      className="relative w-full h-full">
      <motion.div  
      variants={fadeIn("right", "tween", 0.2, 1)}
        className="absolute h-[360px] w-[180px] sm:w-[380px] lg:w-[580px] right-[40%] -top-4 bg-primary drop-shadow-md">
        <div className="h-full w-[120px] sm:w-[380px] flex flex-col flex-start p-5 sm:p-10">
          <h1 className="block font-body text-whitre text-lg sm:text-xl mt-10 text-left">{title}</h1>
          <h2 className="block font-body text-secondary text-sm sm:text-lg text-left">{subtitle}</h2>
        </div>
      </motion.div>
            
      <motion.div 
      variants={fadeIn("left", "tween", 0.2, 1)}
      className="absolute h-[360px] w-[580px] left-[40%] -bottom-4 bg-white drop-shadow-md overflow-hidden">
        <img src={image} alt="img1" className="w-full h-full hover:scale-125 transition-transform ease-in-out duration-300 opacity-70"/>
      </motion.div>
    </motion.section>
  )
}

const About = () => {

  const [cardsData,setCardsData] = useState<CardProps[]>(dataCards);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex < cardsData.length - 1 ? prevIndex + 1 : cardsData.length - 1);
  };

  const previousCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
  };


  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <h1 className="block font-body text-primary text-lg sm:text-4xl">Lo mejor de Nuestra Empresa</h1>
        <h2 className="block font-body text-secondary text-md sm:text-3xl">Impulsamos el progreso en el cuidado de la salud?</h2>
          <div
            className='w-full h-1/2 flex items-center justify-center mt-10 '
          >
            {cardsData.map((card,index) => {
              if (index == currentCardIndex) {
                return(
                  <Card key={"Card_" + index} {...card}/>
                )
              }
            })}

          </div>
          <div className="w-full flex flex-row justify-center gap-10 mt-10">
            <button onClick={previousCard} className={`${ currentCardIndex == 0 ? 'cursor-default' : 'cursor-pointer' } `}>
              <ChevronLeftCircle className={`${ currentCardIndex == 0 ? 'text-gray-300' : 'text-primary hover:text-secondary ease-in-out duration-300' } w-12 h-12 `}/>
            </button>
            <button onClick={nextCard} className={`${ currentCardIndex == (cardsData.length - 1) ? 'cursor-default' : 'cursor-pointer' } `}>
              <ChevronRightCircle className={`${ currentCardIndex == (cardsData.length - 1) ? 'text-gray-100' : 'text-primary hover:text-secondary ease-in-out duration-300' } w-12 h-12`}/>
            </button>
          </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

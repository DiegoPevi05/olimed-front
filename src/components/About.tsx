import { useState} from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/ui/hoc";
import {  staggerContainer,fadeIn } from "../lib/motions";
import {ChevronLeftCircle, ChevronRightCircle} from "lucide-react";
import {About_1,About_2,About_3} from "../assets/images"


interface CardProps {
  title: string;
  subtitle: string; 
  image: string;

}

const dataCards:CardProps[] = [
  {
    title:"Quienes somos?",
    subtitle:"Somos una empresa peruana con más de siete años de experiencia en la comercialización, importación y distribución de productos farmacéuticos, medicamentos, materiales médicos y equipos de laboratorio.",
    image: About_1
  },
  {
    title:"Nuestros Objetivos",
    subtitle:"A lo largo de nuestra trayectoria hemos apostado por la calidad de los productos que comercializamos, las amplias alternativas de marcas y productos, tecnología de última generación, atención personalizada, asesoría técnica, stock permanente y eficiencia en la entrega a lo largo de todo el país. ",
    image: About_3
  },
  {
    title:"Nuestro Trabajo",
    subtitle:"Nuestros procesos demarcan el éxito de nuestro servicio. Nuestra infraestructura nos permite contar con un lugar apropiado para el almacenamiento de nuestros productos. Controlamos y monitoreamos los procedimientos de calidad y nuestro sistema de distribución para lograr eficiencia y seguridad. ",
    image: About_2
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
        className="sm:absolute h-auto sm:h-[360px] w-full sm:w-[380px] lg:w-[580px] right-[40%] -top-4 bg-primary drop-shadow-md">
        <div className="h-full w-full sm:w-[380px] flex flex-col flex-start p-5 sm:p-10">
          <h1 className="block font-body text-secondary text-lg sm:text-xl mt-10 text-left">{title}</h1>
          <h2 className="block font-body text-white text-sm sm:text-lg text-left">{subtitle}</h2>
        </div>
      </motion.div>
            
      <motion.div 
      variants={fadeIn("left", "tween", 0.2, 1)}
        className="sm:absolute h-[180px] sm:h-[360px] w-full sm:w-[580px] sm:left-[40%] sm:-bottom-4 bg-white drop-shadow-md overflow-hidden">
        <img src={image} alt="img1" className="object-cover object-center w-full h-full hover:scale-125 transition-transform ease-in-out duration-300 opacity-70"/>
      </motion.div>
    </motion.section>
  )
}

const About = () => {

  const [cardsData] = useState<CardProps[]>(dataCards);
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

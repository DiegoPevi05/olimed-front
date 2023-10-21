import { useState} from 'react';
import { motion } from "framer-motion";
import {  staggerContainer,fadeIn } from "../lib/motions";
import {Section_1,Section_2,Section_3,Section_4} from "../assets/images";
import Link  from "../components/ui/Link";
import { useTranslation } from 'react-i18next';


interface CardProps {
  title: string;
  subtitle: string; 
  image: string;
  href:string;

}

const dataCards:CardProps[] = [
  {
    title:"Medicamentos",
    subtitle:"¡Cuida de tu salud con nuestra amplia selección de medicamentos!",
    image: Section_1,
    href:"/#products?category=0"
  },
  {
    title:"Ropa Descartable",
    subtitle:"Comodidad y protección en cada prenda desechable que ofrecemos",
    image: Section_2,
    href:"/#products?category=1"
  },
  {
    title:"Material Medico",
    subtitle:"La calidad que los profesionales de la salud prefieren",
    image: Section_3,
    href:"/#products?category=2"
  },
  {
    title:"Materiales para Laboratorio",
    subtitle:"Herramientas de precisión para investigadores y laboratorios de excelencia",
    image: Section_4,
    href:"/#products?category=3"
  },
]



const Card = (props:CardProps) => {
  const {title,subtitle,image,href} = props

  const { t } = useTranslation()

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return(
    <motion.section 
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      className="relative w-full h-full"

    >
      <motion.div  
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="h-full w-full sm:w-full drop-shadow-md"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-full w-full flex flex-col justify-center items-center p-5 sm:p-10">
          <img src={image} className={`${ isHovered ? 'opacity-30 blur-sm' : 'opacity-100' } absolute w-full h-full object-cover transition-opacity	 ease-in-out duration-700`}  />
          <h1  className={`${ isHovered ? 'opacity-100 translate-y-[0px]' : 'opacity-0 translate-y-[100px]' } block font-body text-lg sm:text-xl lg:mt-10 text-center transition-opacity	 ease-in-out duration-700 transition-transform`} >{t(title)}</h1>
          <h2  className={`${ isHovered ? 'opacity-100 translate-y-[0px]' : 'opacity-0 translate-y-[100px]' } block font-body text-secondary text-sm sm:text-lg my-4 text-center transition-opacity	 ease-in-out duration-700 transition-transform`} >{t(subtitle)}</h2>
          <Link href={href} className={`${ isHovered ? 'opacity-100 translate-y-[0px]' : 'opacity-0 translate-y-[100px]' }  transition-opacity	 ease-in-out duration-700 transition-transform`}>{t("Ir al Producto")}</Link>
        </div>
      </motion.div>
    </motion.section>
  )
}

const Products = () => {

  const [cardsData] = useState<CardProps[]>(dataCards);


  return (
    <div id="products" className="w-full h-auto my-10 sm:my-0 lg:h-[600px] flex flex-col lg:flex-row justify-center items-center text-center overflow-hidden">
            {cardsData.map((card,index) => {
              return(
                <Card key={"Card_" + index} {...card}/>
              )
            })}
      </div>
  );
};

export default Products;

import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { staggerContainer, fadeIn } from "../lib/motions";
import Link from '../components/ui/Link';
import {Video1,Video2,Video3} from "../assets/videos";
import { useTranslation } from 'react-i18next';

const VideoCarousel = [Video1,Video2,Video3]


const Hero = () => {

  const [CurrentVideo, setCurrentVideo] = useState(0);


  const {  t } = useTranslation()


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VideoCarousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return(
      <motion.section 
        id={"hero"}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="relative flex flex-col lg:flex-row w-full h-auto lg:h-[800px] mx-auto overflow-hidden mt-[50px] sm:mt-[120px]">
        <motion.div 
          className="w-full h-1/2 lg:h-full sm:h-full flex justify-center items-center overflow-hidden">
            {VideoCarousel.map((video, index) => {
              if (index === CurrentVideo) {
                return(
                  <div key={"motion_video"+index} className="w-screen h-[240px] sm:h-full">
                    <motion.video
                      key={index}
                      src={video}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      autoPlay
                      loop
                    />
                  </div>
                )
              }
            })}
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="relative lg:absolute lg:left-24 lg:bottom-24 h-1/2 lg:h-96 w-full lg:w-[480px] bg-primary
          flex flex-col p-10 xl:pt-20"
        >
          <h1 className="text-xl xl:text-2xl font-body text-white">{t("Tenemos lo que necesitas")}</h1>
          <h1 className="text-2xl xl:text-3xl font-body mt-4 pr-4 ">{t("Brindamos los mejores equipos medicos y farmaceuticos para tu empresa y para tus trabajadores")}</h1>
          <Link href="/#products" variant="ghost2" className="mt-8">{t("Ver Nuestros Productos")}</Link>
        </motion.div>
      </motion.section>
  )
}

export default Hero;

import {useState,useEffect} from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/ui/hoc";
import { styles } from "../styles";
import { ChevronLeftCircle, ChevronRightCircle} from "lucide-react";
import { newProps } from '../lib/interfaces';
import { newsData } from '../assets/data';
import { NewCardDetail } from '../components/cards/news';

const News = () => {

  const [numberCards,setNumberCards] = useState<number>(3);
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const [NewsData] = useState<newProps[]>(newsData);
  const [ShowData,setShowData] = useState<newProps[]>([]);

  // New function to update the number of cards based on screen width
  const updateNumberCards = () => {
    if (window.innerWidth <= 480) {
      setNumberCards(1);
    } else if(window.innerWidth <= 820) {
      setNumberCards(1);
    }else {
      setNumberCards(3);
    }
  };

  // Call updateNumberCards on initial render and on window resize
  useEffect(() => {
    updateNumberCards();
    window.addEventListener('resize', updateNumberCards);
    return () => {
      window.removeEventListener('resize', updateNumberCards);
    };
  }, []);

  useEffect(()=>{
    if(NewsData && NewsData.length > 0){
      setShowData(NewsData.slice(currentIndex,currentIndex+numberCards));
    }
  },[NewsData,currentIndex,numberCards])


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const remainingItems = NewsData.length - prevIndex - numberCards;
      let newIndex = prevIndex + numberCards;

      if(remainingItems > numberCards){
        setShowData(NewsData.slice(newIndex, newIndex + numberCards));
      }else if (remainingItems > 0) {
        setShowData(NewsData.slice(newIndex));
      }else{
        newIndex = prevIndex;
      }
      return newIndex;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - numberCards >= 0 ? prevIndex - numberCards : prevIndex
    );
  };


  return (
    <div className="relative">
      <div className="absolute top-5 w-full flex flex-col text-center">
        <p className={styles.sectionSubText}>Tenemos ultimos acontecimientos sigue las noticias</p>
        <h2 className={styles.sectionHeadText}>Sigue Nuestros ultimos aconteciemientos</h2>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row items-center gap-0 sm:gap-4 overflow-hidden">
        <ChevronLeftCircle className={`${ currentIndex == 0 ? 'text-gray-300':'text-primary hover:text-secondary hover:translate-y-[-20px] ease-in-out duration-500 cursor-pointer'} hidden md:flex h-16 w-16`} onClick={()=>previousSlide()}/>
        <motion.div
          className="w-full h-[650px] sm:h-[700px] flex flex-row  justify-center items-center p-4 rrlative gap-4">
          {ShowData.length > 0 && ShowData.map((project, index) => (
            <NewCardDetail
              key={"NewCard_" + index}
              index={index}
              isHome={true}
              {...project}
            />
          ))}
        </motion.div>
        <ChevronRightCircle className={`${ (NewsData.length - (currentIndex+1)*numberCards) <= 0 ? 'text-gray-300':'text-primary hover:text-secondary hover:translate-y-[-20px] ease-in-out duration-500 cursor-pointer'} hidden md:flex h-16 w-16`} onClick={()=>nextSlide()}/>
        <div className="flex flex-row justify-center items-center gap-4 md:hidden">
          <ChevronLeftCircle className={`${ currentIndex == 0 ? 'text-gray-300':'text-primary hover:text-secondary hover:translate-y-[-20px] ease-in-out duration-500 cursor-pointer'} flex h-10 w-10`} onClick={()=>previousSlide()}/>
        <ChevronRightCircle className={`${ (NewsData.length - (currentIndex+1)*numberCards) <= 0 ? 'text-gray-300':'text-primary hover:text-secondary hover:translate-y-[-20px] ease-in-out duration-500 cursor-pointer'} flex md:hidden h-10 w-10`} onClick={()=>nextSlide()}/>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(News, "news");

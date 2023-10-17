import {useState,useEffect} from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/ui/hoc";
import Link from '../components/ui/Link';
import { styles } from "../styles";
import { Carousel } from '../assets/images';
import { ChevronLeftCircle, ChevronRightCircle, ExternalLink} from "lucide-react";

interface newProps  {
  id:number;
  header:string;
  subHeader:string;
  body:string;
  image:any;
  external_news:string;
  hashtags:string[];
}

const newsData:newProps[] = [
  {
    id:1,
    header:"Viaje a Barcelona",
    subHeader:"Participacion en conferencia de Barcelona",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:Carousel,
    external_news:"https://www.google.com/?client=safari&channel=iphone_bm",
    hashtags:["medic","medicina","linkedIn"]
  },

  {
    id:2,
    header:"Viaje a Barcelona",
    subHeader:"Participacion en conferencia de Barcelona",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:Carousel,
    external_news:"https://www.google.com/?client=safari&channel=iphone_bm",
    hashtags:["medic","medicina","linkedIn"]
  },

  {
    id:3,
    header:"Viaje a Barcelona",
    subHeader:"Participacion en conferencia de Barcelona",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:Carousel,
    external_news:"https://www.google.com/?client=safari&channel=iphone_bm",
    hashtags:["medic","medicina","linkedIn"]
  },

  {
    id:4,
    header:"Viaje a Barcelona",
    subHeader:"Participacion en conferencia de Barcelona",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:Carousel,
    external_news:"https://www.google.com/?client=safari&channel=iphone_bm",
    hashtags:["medic","medicina","linkedIn"]
  },
]

interface newPropsCard extends newProps {
  index:string
}



const NewCardDetail = (props:newPropsCard) => {
  const { index,id,header, subHeader, body, imagen,external_news, hashtags } = props 
  const [OpenCard,setOpenCard] = useState<boolean>(false)

  const handleMouseEnter = () =>{
    setOpenCard(true);
  }

  const handleMouseLeave = () => {
    setOpenCard(false);

  }

  return (
    <motion.div 
      key={index+"_"+id}
      initial={{ x: "100%", y:0, opacity: 0 }}
      transition={{type:"tween", duration:1,delay:0.4,ease:"easeOut"}}
      animate={{ x: 0, y:0,opacity: 1 }}
      exit={{ x: "-100%",y:0, opacity: 0 }}
      className="w-full lg:w-1/3 h-auto sm:h-full flex flex-col items-center justify-center relative" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`w-full bg-primary flex flex-col justify-center items-center shadow-cardlight  ${OpenCard ? "translate-y-[0px] h-[150px] sm:h-[200px]" :"h-[350px] sm:h-[300px] translate-y-[150px]"} duration-700 ease-in-out z-[10] gap-2`}>
        <h1 className="font-heading text-white z-[20]">{header}</h1>
        <img
          src={imagen}
          className='absolute w-full h-full object-cover opacity-80'
        />
      </div>
      <div className={`w-full bg-white flex flex-col justify-center items-center shadow-cardlight ${OpenCard ? "translate-y-[0px] h-[300px]" :"h-[250px] sm:h-[300px] translate-y-[-150px]"} duration-700 ease-in-out p-4 gap-4`}>
        <p className="text-justify text-[14px] sm:text-[14px] lg:text-[15px] text-secondary lg:leading-[15px] font-bodyItalic">"{body}"</p>
        <div className="flex flex-start w-full h-auto">
          <Link size="sm" href={external_news} target="_blank" className="px-4" variant="ghost2">Ver Noticia Completa <ExternalLink className="h-4 w-4 ml-2"/></Link>
        </div>

        <div className="flex flex-start flex-wrap w-full h-auto gap-2">
          {hashtags.map((hashtag,index)=>(
            <span key={"hashtags_"+index} className="shadow-cardlight rounded-full bg-white px-2 text-[14px] hover:translate-y-[-5px] ease-in-out duration-300">#{hashtag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}



const News = () => {

  const [numberCards,setNumberCards] = useState<number>(3);
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const [NewsData,setNewsData] = useState<newProps[]>(newsData);
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

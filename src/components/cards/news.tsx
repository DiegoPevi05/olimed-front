import {useState} from 'react';
import { motion } from "framer-motion";
import Link from '../../components/ui/Link';
import {  ExternalLink} from "lucide-react";
import { newProps } from '../../lib/interfaces';
import { Link as LinkRouter } from 'react-router-dom';

interface newPropsCard extends newProps {
  index: number;
  isHome:boolean;
}

export const NewCardDetail = (props:newPropsCard) => {
  const { index,isHome,id,header, preview, imagen, hashtags, created_date } = props 
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
      className={`${isHome ? 'lg:w-1/3': 'lg:w-full'} w-full  h-auto sm:h-full flex flex-col items-center justify-center relative`} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`w-full bg-primary flex flex-col justify-center items-center shadow-cardlight  ${OpenCard ? "translate-y-[0px] h-[150px] sm:h-[200px]" :"h-[350px] sm:h-[300px] translate-y-[150px]"} duration-700 ease-in-out z-[10] gap-2`}>
        <img
          src={imagen}
          className='absolute w-full h-full object-cover opacity-80'
        />
      </div>
      <div className={`w-full bg-white flex flex-col justify-center items-center shadow-cardlight ${OpenCard ? "translate-y-[0px] h-[300px]" :"h-[250px] sm:h-[300px] translate-y-[-150px]"} duration-700 ease-in-out p-4 gap-4`}>
        <h1 className="hidden xl:block font-heading text-primary z-[20]">{header}</h1>
        <p className="w-full text-left text-[13px] sm:text-[14px] lg:text-[15px] text-tertiary lg:leading-[15px] font-body">{created_date}</p>
        <p className="text-justify text-[14px] sm:text-[14px] lg:text-[14px] text-secondary lg:leading-[14px] font-bodyItalic">"{preview}"</p>
        <div className="flex flex-start w-full h-auto">
          {isHome ?
            <Link size="sm" href="/#news"  className="px-4" variant="ghost2">Ver Noticias <ExternalLink className="h-4 w-4 ml-2"/></Link>
          :
            <LinkRouter to={`/news/${id}`} state={{newsDetail: props}}  className="active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ease-in-out duration-300 px-4 bg-transparent border-2 border-tertiary hover:text-secondary hover:bg-slate-200 h-10 py-2 px-4" >Ver Noticia Completa <ExternalLink className="h-4 w-4 ml-2"/></LinkRouter>
          }
        </div>

        <div className="flex flex-start flex-wrap w-full h-auto gap-2">
          {hashtags.map((hashtag:any,index:any)=>(
            <span key={"hashtags_"+index} className="shadow-cardlight rounded-full bg-white px-2 text-[14px] hover:translate-y-[-5px] ease-in-out duration-300">#{hashtag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

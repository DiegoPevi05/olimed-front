import { ChevronRight ,Globe2} from "lucide-react";
import { styles } from "../styles";
import { useLocation } from 'react-router-dom';
import Link from '../components/ui/Link';


const NewsComponent = () => {

  const location = useLocation();
  const news = location.state.newsDetail;

  return (
    <div className="w-full h-full mt-[50px] sm:mt-[120px] py-4">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li key={"Breadcrumb_home"}>
          <div className="flex items-center">
            <a href="/#" className="mr-2 text-sm font-medium text-fourth hover:text-primary">
              Inicio 
            </a>
            <ChevronRight className="text-primary "/>
          </div>
        </li>
        <li className="text-sm">
          <div className="flex items-center">
            <a href="/#news" aria-current="page" className="font-medium text-fourth hover:text-primary">
              Noticias 
            </a>
              <ChevronRight className="text-primary "/>
          </div>
        </li>
        <li className="text-sm">
          <span  aria-current="page" className="font-medium text-fourth hover:text-primary cursor-pointer">
            {news.header}
          </span>
        </li>
      </ol>

      <div className="mx-4 mx-auto flex flex-col lg:flex-row max-w-2xl items-start px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4 mt-10 lg:py-8 w-full">
        <div className="flex flex-col justify-start w-full lg:w-1/2">
          <h2 className={styles.sectionNewsSubHeader}>{news.subHeader}</h2>
          <h1 className={styles.sectionNewsHeader}>{news.header}</h1>
          <p className={styles.sectionNewsBody}>{news.body}</p>
        </div>
        <div className="mx-4 p-4 flex flex-col flex-start items-center w-full lg:w-1/2 ">
            <div 
              className="h-[200px] md:h-[360px] w-[300px] md:w-[580px]  overflow-hidden">
              <img src={news.imagen} alt="img1" className="w-full h-full object-contain"/>
            </div>
            <div className="flex flex-start w-full h-auto">
              <Link size="sm" href={news.external_news} target="_blank" className="px-4 lg:ml-4 mt-10" variant="ghost2">Ir a Sitio Web <Globe2 className="h-4 w-4 ml-2"/></Link>
            </div>
            <div className="lg:ml-10 mt-10 flex flex-start flex-wrap w-full h-auto gap-2">
              {news.hashtags.map((hashtag:any,index:any)=>(
                <span key={"hashtags_"+index} className="shadow-cardlight rounded-full bg-white px-2 text-[14px] hover:translate-y-[-5px] ease-in-out duration-300">#{hashtag}</span>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default NewsComponent;

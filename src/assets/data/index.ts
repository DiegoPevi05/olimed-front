import { ProductProps, FilterProductProps, newProps } from '../../lib/interfaces';
import { ProductTest1, ProductTest2_1, ProductTest2_2,News_1, News_2, News_3  } from "../images";

export const FilterProducLabels:FilterProductProps = {
  categories: ["Medicamentos","Ropa Descartable","Material Medico", "Materiales para Laboratorio"],
  subcategories: ["inyectables","guantes"],
  labels: ["primeros auxilios","farmaceutica","emergencias"]
}

export const productListData:ProductProps[] = [
  {
    id:1,
    category:"Material Medico",
    subcategory:"inyectables",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Jeringas Polietileno",
    characteristic:["jeringas"],
    short_description:"Jeringa de Propiepileno",
    description:"Guantes de Gaza para emergencias santiarias y todo tipo de emergencia",
    table: [
      {
        name:"Jeringa 100ml",
        brand:"Braun",
        specifications:"Jeringa 100ml",
      },
      {
        name:"Jeringa 200ml",
        brand:"Braun",
        specifications:"Jeringa 200ml",
      },
      {
        name:"Jeringa 100ml",
        brand:"Braun",
        specifications:"Jeringa 200ml",
      }
    ],
    images:[ProductTest2_1, ProductTest2_2],
  },
  {
    id:2,
    category:"Ropa Descartable",
    subcategory:"guantes",
    labels:["farmaceutica","emergencias"],
    name:"Guantes de Latex",
    characteristic:["jeringas","Movil"],
    short_description:"Guantes de Gaza para emergencias santiarias y todo tipo de emergencia",
    description:"Guantes de Gaza para emergencias santiarias y todo tipo de emergencia",
    table:[
      {
        name:"Guantes 200ml",
        brand:"Monark",
        specifications:"Guantes de Gaza para emergencias santiarias y todo tipo de emergencia",
      },
    ],
    images:[ProductTest1],
  }
]

export const newsData:newProps[] = [
  {
    id:1,
    header:"CPhI Barcelona 2023",
    subHeader:"Que hay de nuevo para el 2023?",
    preview:"CPhI Worldwide es la feria comercial más grande del mundo. Cada parte de la cadena de producción de farmacéuticos se encuentra representado aquí, desde biofármacos, subcontratación y empaquetado, APIs, maquinaria hasta ingredientes.",
    body:"CPHI BARCELONA, el renombrado evento farmacéutico global, se llevará a cabo del 24 al 26 de octubre de 2023 en Fira Barcelona Gran Via, España. Construyendo sobre su legado de excelencia, el evento de este año promete reunir a proveedores, innovadores y profesionales de la industria farmacéutica en un entorno excepcional que combina lo mejor de las experiencias presenciales y en línea. CPHI crea conexiones e inspira colaboraciones en la comunidad farmacéutica global. Este año, CPHI Barcelona presenta The Start-Up Market, un espacio dedicado en el Hall 3 de Fira Barcelona, donde las empresas emergentes, innovadores y pequeñas empresas de la industria pueden exhibir sus emocionantes productos y soluciones nuevos. The Start-Up Market es el lugar para visitar y descubrir nuevas innovaciones y conectarse con empresas líderes en la industria farmacéutica. Las empresas elegibles clasificadas como startups y activas en los sectores farmacéutico, biofarmacéutico, digital o de dispositivos médicos pueden exhibir. El espacio del mercado ofrece diversos beneficios, incluyendo promoción como característica destacada del evento, acceso a mentores para startups y un área de descanso exclusiva para networking de startups.",
    imagen:News_1,
    href:"/#news",
    external_news:"https://europe.cphi.com/europe/en/home.html",
    hashtags:["Conferencia","Farmaceutica","Barcelona"],
    created_date: "2023-10-24",
  },

  {
    id:2,
    header:"MEDICA Düsseldorf (Alemania) - Foro Mundial de la Medicina",
    subHeader:"Feria Médica Nº1 mundial. ",
    preview:"MEDICA es la feria comercial líder mundial para el sector médico donde se presentan las últimas novedades en tecnología médica y que año tras año atrae a miles de visitantes de todo el mundo.",
    body:"MEDICA es la feria comercial líder mundial para el sector médico donde se presentan las últimas novedades en tecnología médica, diagnóstico por imagen, tecnologías de la información, equipos de laboratorio y diagnóstico, equipos de fisioterapia y productos médicos y que año tras año atrae a miles de visitantes de todo el mundo. Con más de 6.000 expositores de 70 países y visitantes de todo el mundo, MEDICA es una de las mayores ferias médicas mundiales que desde hace más de 40 años está establecida firmemente en el calendario de todos los expertos. MEDICA se celebra de forma simultánea con COMPAMED, feria líder del sector de proveedores de tecnología médica que ofrecen una amplia gama de componentes de tecnología médica, servicios y equipos de producción de alta calidad para la industria médica. El amplio Programa de Foros y Conferencias de primer nivel que se presentan en MEDICA/COMPAMED ofrecen el complemento perfecto para conocer las últimas novedades y tendencias del sector médico. MEDICA como feria más importante de la industria sanitaria y la tecnología médica en todo el mundo ofrece la oportunidad de descubrir los últimos productos y tecnologías del sector, aprender de los expertos para conocer los últimos avances y tendencias y establecer nuevos contactos comerciales relacionándose con otros profesionales del sector.",
    imagen:News_2,
    href:"/#news",
    external_news:"https://www.medica-tradefair.com/",
    hashtags:["Conferencia","Farmaceutica","Alemania"],
    created_date: "2023-11-13",
  },

  {
    id:3,
    header:"CMEF: Feria Internacional de Equipamiento Médico de China.",
    subHeader:"Novedades 2023",
    preview:"CMEF es una exposición de equipamiento médico que conecta marcas internacionales con profesionales de la salud y distribuidores globales, facilitando la presentación de productos innovadores y colaboraciones en la fabricación y regulación de equipos médicos.",
    body:" La Feria Internacional de Equipamiento Médico de China (CMEF), una exposición de equipamiento médico, reúne a marcas internacionales de equipamiento médico para conectar con distribuidores, revendedores, fabricantes, médicos, reguladores y agencias gubernamentales con licencia a nivel global. Muestra productos y soluciones innovadoras recién llegados al mercado mundial, establece asociaciones con distribuidores locales e internacionales, colabora en la fabricación en el sudeste asiático y más allá, aprende cómo navegar la complejidad del mercado regulado y amplía tu red de contactos a través de nuestro servicio de conserjería de reuniones en línea y presenciales en CMEF.",
    imagen:News_3,
    href:"/#news",
    external_news:"https://www.cmef.com.cn/en",
    hashtags:["Conferencia","Farmaceutica","Equipos","China"],
    created_date: "2023-10-28",
  },
]

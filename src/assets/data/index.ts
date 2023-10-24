import { ProductProps, FilterProductProps, newProps } from '../../lib/interfaces';
import { 
  ProductTest1,
  ProductTest2,
  ProductTest3,
  ProductTest4,
  ProductTest5,
  ProductTest6,
  ProductTest7,
  ProductTest8,
  ProductTest9,
  ProductTest10,
  ProductTest11,
  ProductTest12,
  ProductTest13,
  ProductTest14,
  ProductTest15,
  ProductTest16,
  ProductTest17,
  ProductTest18,
  ProductTest22,
  ProductTest28,
  ProductTest29,
  ProductTest30_1,
  ProductTest30_2,
  ProductTest31,

  News_1,
  News_2,
  News_3,
} from "../images";

export const SEARCH = {
  es: [
    { label:'Productos', route:'/#products' },
    { label:'Noticias', route:'/#news' },
    { label:'Inicio', route:'/' },
  ],
  en: [
    { label:'Products', route:'/#products' },
    { label:'News', route:'/#news' },
    { label:'Home', route:'/' },
  ]
}
export const LANGUAGES = [
    { label: 'Español', code: 'es' },
    { label: 'Ingles', code: 'en' }
]

export const FilterProducLabels:FilterProductProps = {
  categories: ["Medicamentos","Ropa Descartable","Material Medico", "Materiales para Laboratorio"],
  subcategories: ["Vestimenta","Mascarillas","Enfermería","Seguridad","Consumibles","Equipos Médicos","Anestésicos","Antibióticos","Soluciones Intravenosas","Antiinflamatorios","Analgésicos","Analgésicos","Gastrointestinales","Antieméticos","Dermatológicos"],
  labels: ["Protección Personal","farmaceutica","emergencias","Cirugía","Inyección","Anestesia"]
}

export const productListData:ProductProps[] = [
  {
    "id": 1,
    "category": "Material Medico",
    "subcategory": "Consumibles",
    "labels": ["Medicina","Protección Personal"],
    "name": "Compresa de Gasa 48X48",
    "characteristic": [
      "Compresa de gasa de alta calidad.",
      "Tamaño: 48x48 cm.",
      "Diseñada para uso médico y de protección personal.",
      "Fabricada con materiales suaves y absorbentes para un rendimiento óptimo.",
      "Adecuada para aplicaciones médicas y de cuidado de heridas."
    ],
    "short_description": "Compresa de Gasa 48X48 para Uso Médico y Protección Personal",
    "description": "La Compresa de Gasa 48X48 es un elemento esencial en entornos médicos y de atención de heridas. Fabricada con materiales de alta calidad, esta compresa ofrece un rendimiento óptimo en términos de absorción y suavidad. Con un tamaño de 48x48 cm, es adecuada para una amplia gama de aplicaciones médicas y de cuidado de heridas, brindando protección y comodidad a los usuarios.",
    "table": [],
    "images": [ProductTest1]
  },
  {
    "id": 2,
    "category": "Material Medico",
    "subcategory": "Consumibles",
    "labels": ["Medicina", "Protección Personal"],
    "name": "Gasa de 100 Yardas",
    "characteristic": [
      "Rollo de gasa de alta calidad.",
      "Longitud: 100 yardas.",
      "Diseñado para uso médico y de protección personal.",
      "Fabricado con materiales suaves y absorbentes para un rendimiento óptimo.",
      "Adecuado para una variedad de aplicaciones médicas y de cuidado de heridas."
    ],
    "short_description": "Rollo de Gasa de 100 Yardas para Uso Médico y Protección Personal",
    "description": "La Gasa de 100 Yardas es un producto esencial en entornos médicos y de atención de heridas. Este rollo de gasa de alta calidad tiene una longitud de 100 yardas y está diseñado para uso médico y de protección personal. Fabricado con materiales suaves y absorbentes, ofrece un rendimiento óptimo en términos de absorción y comodidad. Es adecuado para una variedad de aplicaciones médicas y de cuidado de heridas, proporcionando una solución confiable para profesionales de la salud y pacientes.",
    "table": [],
    "images": [ProductTest2]
  },
  {
    "id": 3,
    "category": "Material Medico",
    "subcategory": "Equipos Médicos",
    "labels": ["Medicina", "Cirugía"],
    "name": "Placa Electrocáuterio",
    "characteristic": [
      "Placa de electrocauterización de alta calidad.",
      "Diseñada para su uso en procedimientos quirúrgicos.",
      "Proporciona una conexión segura para dispositivos de electrocauterización.",
      "Fabricada con materiales resistentes y duraderos.",
      "Garantiza un rendimiento óptimo en aplicaciones de electrocauterización."
    ],
    "short_description": "Placa Electrocáuterio para Procedimientos Quirúrgicos",
    "description": "La Placa Electrocáuterio es un componente esencial en procedimientos quirúrgicos que involucran electrocauterización. Esta placa de alta calidad proporciona una conexión segura para dispositivos de electrocauterización, lo que garantiza un rendimiento óptimo y resultados confiables en el quirófano. Diseñada específicamente para su uso en cirugías, la placa está fabricada con materiales resistentes y duraderos. Asegure una electrocauterización eficaz con la Placa Electrocáuterio de calidad profesional.",
    "table": [],
    "images": [ProductTest3]
  },
  {
    "id": 4,
    "category": "Material Medico",
    "subcategory": "Equipos Médicos",
    "labels": ["Medicina", "Respiratorio"],
    "name": "Tubo Endotraqueal con Balón",
    "characteristic": [
      "Tubo endotraqueal de alta calidad con balón inflable.",
      "Diseñado para la intubación endotraqueal en procedimientos médicos.",
      "El balón inflable proporciona un sellado seguro en la tráquea.",
      "Fabricado con materiales suaves y flexibles para comodidad del paciente.",
      "Disponible en varios tamaños para adaptarse a diferentes pacientes."
    ],
    "short_description": "Tubo Endotraqueal con Balón para Intubación Segura",
    "description": "El Tubo Endotraqueal con Balón es un componente esencial en procedimientos médicos que requieren intubación endotraqueal. Este tubo de alta calidad está diseñado para brindar un sellado seguro en la tráquea del paciente, lo que garantiza una vía aérea protegida y la administración de ventilación mecánica. El balón inflable del tubo se puede inflar y desinflar según sea necesario para lograr un sellado adecuado. Fabricado con materiales suaves y flexibles, este tubo proporciona comodidad al paciente. Está disponible en varios tamaños para adaptarse a diferentes pacientes, lo que lo hace versátil y confiable en entornos médicos.",
    "table": [],
    "images": [ProductTest4]
  },
  {
  "id": 5,
  "category": "Material Medico",
  "subcategory": "Equipos Médicos",
  "labels": ["Medicina", "Cuidados Intensivos"],
  "name": "Equipo de Succión",
  "characteristic": [
    "Equipo de succión de alto rendimiento.",
    "Diseñado para eliminar secreciones y líquidos de las vías respiratorias.",
    "Incluye una bomba de succión potente y contenedores desechables.",
    "Operación silenciosa y eficaz para entornos de cuidados intensivos.",
    "Fácil de transportar y almacenar para uso en diversas configuraciones médicas."
  ],
    "short_description": "Equipo de Succión para Eliminación de Secreciones",
    "description": "El Equipo de Succión es una herramienta esencial en entornos de cuidados intensivos y procedimientos médicos que requieren la eliminación de secreciones y líquidos de las vías respiratorias. Este equipo de alto rendimiento incluye una bomba de succión potente y contenedores desechables para una operación eficaz y segura. Su diseño permite una operación silenciosa, lo que es crucial en entornos de cuidados intensivos. Además, el equipo es fácil de transportar y almacenar, lo que lo hace versátil y adecuado para su uso en diversas configuraciones médicas, garantizando la atención adecuada de los pacientes.",
    "table": [],
    "images": [ProductTest5]
  },
  {
    "id": 6,
    "category": "Material Medico",
    "subcategory": "Consumibles",
    "labels": ["Medicina", "Inyección"],
    "name": "Jeringas",
    "characteristic": [
      "Jeringas de alta calidad para administración de medicamentos.",
      "Disponibles en diferentes tamaños y capacidades.",
      "Diseñadas para una administración precisa y segura de medicamentos.",
      "Agujas estériles y de fácil montaje para comodidad del paciente.",
      "Aptas para su uso en entornos médicos y de atención médica."
    ],
    "short_description": "Jeringas para Administración Precisa de Medicamentos",
    "description": "Las Jeringas son un componente esencial en la administración de medicamentos en entornos médicos y de atención médica. Estas jeringas de alta calidad están disponibles en diferentes tamaños y capacidades, lo que las hace versátiles para una variedad de aplicaciones médicas. Están diseñadas para proporcionar una administración precisa y segura de medicamentos, con agujas estériles y de fácil montaje para la comodidad del paciente. Las jeringas son aptas para su uso en entornos médicos y garantizan una administración eficaz de medicamentos, contribuyendo a la atención adecuada de los pacientes.",
    "table": [],
    "images": [ProductTest6]
  },
  {
    "id": 7,
    "category": "Medicamentos",
    "subcategory": "Anestésicos",
    "labels": ["Medicina", "Anestesia"],
    "name": "Bupivacaína Hiperbárica",
    "characteristic": [
      "Solución de bupivacaína hiperbárica de alta calidad.",
      "Diseñada para su uso en procedimientos de anestesia médica.",
      "Proporciona un alivio eficaz y duradero del dolor.",
      "Fabricada según estrictos estándares de calidad para garantizar seguridad y confiabilidad.",
      "Disponible en diversas concentraciones para adaptarse a diferentes necesidades médicas."
    ],
    "short_description": "Bupivacaína Hiperbárica de Alta Calidad para Anestesia",
    "description": "BUPIVACAINA HIPERBARICA es una solución premium de bupivacaína hiperbárica diseñada para su uso en procedimientos de anestesia médica. Ofrece un alivio eficaz y duradero del dolor, lo que la convierte en una opción valiosa para profesionales de la salud. Fabricada según estrictos estándares de calidad, este producto garantiza seguridad y confiabilidad en aplicaciones de anestesia. Está disponible en diversas concentraciones para adaptarse a diferentes necesidades médicas, lo que proporciona versatilidad y un rendimiento excelente.",
    "table": [],
    "images": [ProductTest7]
  },
  {
    "id": 8,
    "category": "Medicamentos",
    "subcategory": "Antibióticos",
    "labels": ["Medicina", "Antibacteriano"],
    "name": "Cetriaxiona 1gr",
    "characteristic": [
      "Ceftriaxona de alta calidad en presentación de 1 gramo.",
      "Antibiótico eficaz para el tratamiento de infecciones bacterianas.",
      "Diseñado para administración intravenosa o intramuscular.",
      "Fabricado cumpliendo rigurosos estándares de calidad y seguridad.",
      "Ampliamente utilizado en entornos médicos para tratar diversas afecciones."
    ],
    "short_description": "Ceftriaxona 1 gramo: Antibiótico de Alta Calidad",
    "description": "CEFTRIAXONA 1GR es un antibiótico de alta calidad en presentación de 1 gramo, que contiene ceftriaxona como principio activo. Es ampliamente reconocido por su eficacia en el tratamiento de infecciones bacterianas. Este medicamento está diseñado para su administración intravenosa o intramuscular, y es una elección común en entornos médicos para tratar diversas afecciones infecciosas. Está fabricado cumpliendo rigurosos estándares de calidad y seguridad, lo que garantiza la confiabilidad en su uso. CEFTRIAXONA 1GR es una solución esencial para el tratamiento de infecciones en el campo de la medicina.",
    "table": [],
    "images": [ProductTest8]
  },
  {
    "id": 9,
    "category": "Medicamentos",
    "subcategory": "Soluciones Intravenosas",
    "labels": ["Medicina", "Electrolitos"],
    "name": "Cloruro 1L 9%",
    "characteristic": [
      "Solución de cloruro al 9% en presentación de 1 litro.",
      "Utilizado para corregir desequilibrios electrolíticos y deshidratación.",
      "Diseñado para administración intravenosa bajo supervisión médica.",
      "Fabricado cumpliendo estándares rigurosos para garantizar seguridad.",
      "Ampliamente empleado en entornos de atención médica y hospitalarios."
    ],
    "short_description": "CLORURO 1L 9%: Solución Intravenosa de Electrolitos",
    "description": "CLORURO 1L 9% es una solución de cloruro al 9% en presentación de 1 litro. Se utiliza para corregir desequilibrios electrolíticos y deshidratación en pacientes bajo supervisión médica. Esta solución está diseñada para su administración intravenosa y es esencial en entornos de atención médica y hospitalarios. Cumple con rigurosos estándares de calidad y seguridad, lo que garantiza su eficacia y confiabilidad en su uso. CLORURO 1L 9% es un recurso valioso para mantener la salud y el equilibrio electrolítico de los pacientes.",
    "table": [],
    "images": [ProductTest9]
  },
  {
    "id": 10,
    "category": "Medicamentos",
    "subcategory": "Soluciones Intravenosas",
    "labels": ["Medicina", "Nutrición Parenteral"],
    "name": "Dextrosa 5% 1L",
    "characteristic": [
      "Solución de dextrosa al 5% en presentación de 1 litro.",
      "Utilizado como fuente de energía y nutrición parenteral.",
      "Diseñado para administración intravenosa bajo supervisión médica.",
      "Fabricado siguiendo estrictos estándares de calidad para garantizar seguridad.",
      "Ampliamente empleado en entornos médicos y hospitalarios para la rehidratación y aporte de energía."
    ],
    "short_description": "DEXTROSA 5% 1L: Solución Intravenosa para Nutrición Parenteral",
    "description": "DEXTROSA 5% 1L es una solución de dextrosa al 5% en presentación de 1 litro, diseñada para su administración intravenosa bajo supervisión médica. Se utiliza como fuente de energía y nutrición parenteral en pacientes que requieren rehidratación y aporte de energía. Cumple con rigurosos estándares de calidad y seguridad, garantizando su eficacia y confiabilidad. DEXTROSA 5% 1L es ampliamente empleado en entornos médicos y hospitalarios, contribuyendo a mantener la salud y proporcionar la nutrición necesaria a los pacientes.",
    "table": [],
    "images": [ProductTest10]
  },
  {
    "id": 11,
    "category": "Medicamentos",
    "subcategory": "Soluciones Intravenosas",
    "labels": ["Medicina", "Hidratación"],
    "name": "Agua Esteril 1L",
    "characteristic": [
      "Agua estéril de alta calidad en presentación de 1 litro.",
      "Utilizada para la hidratación de pacientes y dilución de medicamentos.",
      "Diseñada para administración intravenosa bajo supervisión médica.",
      "Cumple con estrictos estándares de calidad y esterilización para garantizar la seguridad del paciente.",
      "Un componente esencial en entornos médicos y hospitalarios para mantener la hidratación adecuada."
    ],
    "short_description": "AGUA ESTERIL 1L: Solución Intravenosa para Hidratación",
    "description": "AGUA ESTERIL 1L es una solución de agua estéril de alta calidad en presentación de 1 litro, diseñada para su administración intravenosa bajo supervisión médica. Se utiliza para la hidratación de pacientes y la dilución de medicamentos. Este producto cumple con estrictos estándares de calidad y esterilización para garantizar la seguridad del paciente. AGUA ESTERIL 1L es un componente esencial en entornos médicos y hospitalarios para mantener la hidratación adecuada y asegurar el suministro de líquidos esenciales en situaciones clínicas.",
    "table": [],
    "images": [ProductTest11]
  },
  {
    "id": 12,
    "category": "Medicamentos",
    "subcategory": "Soluciones Intravenosas",
    "labels": ["Medicina", "Hidratación"],
    "name": "Cloruro 100ML 9%",
    "characteristic": [
      "Solución de cloruro de sodio al 9% en presentación de 100 ml.",
      "Utilizada para la reposición de electrolitos y la hidratación de pacientes.",
      "Diseñada para administración intravenosa bajo supervisión médica.",
      "Cumple con estrictos estándares de calidad y esterilización para garantizar la seguridad del paciente.",
      "Un componente esencial en entornos médicos y hospitalarios para el mantenimiento de los niveles de electrolitos."
    ],
    "short_description": "CLORURO 100ML 9%: Solución Intravenosa para Reposición de Electrolitos",
    "description": "CLORURO 100ML 9% es una solución de cloruro de sodio al 9% en presentación de 100 ml, diseñada para su administración intravenosa bajo supervisión médica. Se utiliza para la reposición de electrolitos y la hidratación de pacientes en entornos médicos y hospitalarios. Este producto cumple con estrictos estándares de calidad y esterilización para garantizar la seguridad del paciente. CLORURO 100ML 9% es un componente esencial para mantener los niveles adecuados de electrolitos y proporcionar hidratación efectiva.",
    "table": [],
    "images": [ProductTest12]
  },

  {
    "id": 13,
    "category": "Medicamentos",
    "subcategory": "Antiinflamatorios",
    "labels": ["Medicina", "Antiinflamatorio"],
    "name": "Dexametasona 4MG/2ML",
    "characteristic": [
      "Solución inyectable de dexametasona en concentración de 4 mg/2 ml.",
      "Indicada para el tratamiento de condiciones inflamatorias y alérgicas.",
      "Proporciona alivio eficaz de la inflamación y los síntomas alérgicos.",
      "De uso intramuscular o intravenoso bajo supervisión médica.",
      "Un medicamento confiable para el control de trastornos inflamatorios."
    ],
    "short_description": "DEXAMETASONA 4MG/2ML: Solución Inyectable Antiinflamatoria",
    "description": "DEXAMETASONA 4MG/2ML es una solución inyectable de dexametasona en concentración de 4 mg/2 ml, indicada para el tratamiento de condiciones inflamatorias y alérgicas. Este medicamento proporciona un alivio eficaz de la inflamación y los síntomas alérgicos bajo supervisión médica. Puede administrarse por vía intramuscular o intravenosa y es un medicamento confiable en el control de trastornos inflamatorios.",
    "table": [],
    "images": [ProductTest13]
  },
  {
    "id": 14,
    "category": "Medicamentos",
    "subcategory": "Antieméticos",
    "labels": ["Medicina", "Antiémetico"],
    "name": "Dimenhidrinato 50MG",
    "characteristic": [
      "Tabletas de dimenhidrinato en dosis de 50 mg",
      "Utilizadas para prevenir y aliviar náuseas y mareos.",
      "Efectivas en el tratamiento de cinetosis y mareo por movimiento.",
      "De uso oral bajo recomendación médica.",
      "Un aliado en el control de síntomas de náuseas y mareos."
    ],
    "short_description": "DIMENHIDRINATO 50MG: Tabletas Antieméticas",
    "description": "DIMENHIDRINATO 50MG son tabletas de dimenhidrinato en dosis de 50 mg, utilizadas para prevenir y aliviar náuseas y mareos, particularmente en casos de cinetosis y mareo por movimiento. Estas tabletas se toman por vía oral bajo recomendación médica y son un aliado efectivo en el control de síntomas de náuseas y mareos.",
    "table": [],
    "images": [ProductTest14]
  },
  {
    "id": 15,
    "category": "Medicamentos",
    "subcategory": "Analgésicos",
    "labels": ["Medicina", "Analgésico"],
    "name": "Ketoprofeno 100MG / 5ML",
    "characteristic": [
      "Solución oral de ketoprofeno en concentración de 100 mg / 5 ml.",
      "Indicada para el alivio del dolor y la inflamación.",
      "Efectiva en el tratamiento de condiciones dolorosas y estados inflamatorios.",
      "De uso oral bajo recomendación médica.",
      "Un analgésico de confianza para el manejo del dolor."
    ],
    "short_description": "KETOPROFENO 100MG / 5ML: Solución Oral Analgésica",
    "description": "KETOPROFENO 100MG / 5ML es una solución oral de ketoprofeno en concentración de 100 mg / 5 ml, indicada para el alivio del dolor y la inflamación bajo recomendación médica. Este analgésico es efectivo en el tratamiento de condiciones dolorosas y estados inflamatorios, y se administra por vía oral. Es una opción de confianza para el manejo del dolor.",
    "table": [],
    "images": [ProductTest15]
  },
  {
    "id": 16,
    "category": "Medicamentos",
    "subcategory": "Gastrointestinales",
    "labels": ["Medicina", "Antiácido"],
    "name": "Omeprazol 40MG",
    "characteristic": [
      "Cápsulas de omeprazol en dosis de 40 mg.",
      "Indicadas para el tratamiento de trastornos ácido-pépticos.",
      "Efectivas en la reducción de la producción de ácido gástrico.",
      "De uso oral bajo recomendación médica.",
      "Una solución confiable para afecciones gastrointestinales."
    ],
    "short_description": "OMEPRAZOL 40MG: Cápsulas Antiácidas",
    "description": "OMEPRAZOL 40MG son cápsulas de omeprazol en dosis de 40 mg, indicadas para el tratamiento de trastornos ácido-pépticos bajo recomendación médica. Estas cápsulas son efectivas en la reducción de la producción de ácido gástrico y se toman por vía oral. Representan una solución confiable para afecciones gastrointestinales, proporcionando alivio eficaz.",
    "table": [],
    "images": [ProductTest16]
  },
  {
    "id": 17,
    "category": "Medicamentos",
    "subcategory": "Anestésicos",
    "labels": ["Medicina", "Anestesia"],
    "name": "Propofol 1% 20ML",
    "characteristic": [
      "Emulsión inyectable de propofol al 1% en presentación de 20 ml.",
      "Indicada para la inducción y mantenimiento de anestesia general.",
      "Proporciona una rápida recuperación del paciente después de la anestesia.",
      "De uso intravenoso y administrado exclusivamente por profesionales médicos.",
      "Un agente anestésico seguro y eficaz para procedimientos médicos."
    ],
    "short_description": "PROPOFOL 1% 20ML: Emulsión Inyectable Anestésica",
    "description": "PROPOFOL 1% 20ML es una emulsión inyectable de propofol al 1% en presentación de 20 ml, indicada para la inducción y mantenimiento de anestesia general. Esta emulsión proporciona una rápida recuperación del paciente después de la anestesia y se administra exclusivamente por vía intravenosa bajo supervisión de profesionales médicos. Es un agente anestésico seguro y eficaz para procedimientos médicos.",
    "table": [],
    "images": [ProductTest17]
  },
  {
    "id": 18,
    "category": "Medicamentos",
    "subcategory": "Dermatológicos",
    "labels": ["Medicina", "Anestesia Tópica"],
    "name": "Lidocaina Gel 2% 30G",
    "characteristic": [
      "Gel de lidocaína al 2% en presentación de 30 gramos.",
      "Indicado para la anestesia tópica de la piel y las mucosas.",
      "Proporciona alivio local del dolor y molestias cutáneas.",
      "De aplicación tópica según las instrucciones del profesional de la salud.",
      "Una solución eficaz para procedimientos dermatológicos y superficiales."
    ],
    "short_description": "LIDOCAINA GEL 2% 30G: Gel Anestésico Tópico",
    "description": "LIDOCAINA GEL 2% 30G es un gel de lidocaína al 2% en presentación de 30 gramos, indicado para la anestesia tópica de la piel y las mucosas de acuerdo con las instrucciones del profesional de la salud. Proporciona alivio local del dolor y molestias cutáneas en procedimientos dermatológicos y superficiales. Este gel se aplica tópicamente y es una solución eficaz para procedimientos que requieren anestesia local.",
    "table": [],
    "images": [ProductTest18]
  },
  {
    "id": 27,
    "category": "Ropa Descartable",
    "subcategory": "Vestimenta",
    "labels": ["Medicina","Protección Personal"],
    "name": "Mandil de Cirujano",
    "characteristic": [
      "El Mandil de Cirujano es una prenda esencial en entornos quirúrgicos, diseñado para brindar protección y comodidad al usuario.",
      "Fabricado con materiales de alta calidad para garantizar resistencia y durabilidad.",
      "Diseñado para un ajuste adecuado y una cobertura completa, manteniendo al usuario protegido durante procedimientos quirúrgicos."
    ],
    "short_description": "Mandil de Cirujano para Protección en Entornos Quirúrgicos",
    "description": "El Mandil de Cirujano es una prenda indispensable en el ámbito de la cirugía, diseñado para proporcionar una barrera eficaz contra contaminantes biológicos y mantener al personal médico seguro. Está fabricado con los más altos estándares de calidad y se adapta perfectamente para garantizar la protección y la comodidad del usuario durante procedimientos quirúrgicos. Su durabilidad y resistencia hacen que sea una elección confiable para entornos hospitalarios. Proteja a su personal médico con el Mandil de Cirujano de alta calidad.",
    "table": [],
    "images": [ProductTest22]
  },
  {
    "id": 28,
    "category": "Ropa Descartable",
    "subcategory": "Vestimenta",
    "labels": ["Medicina", "Protección Personal"],
    "name": "Chaqueta y Pantalón de Hospital",
    "characteristic": [
      "El Conjunto de Chaqueta y Pantalón de Hospital es esencial en entornos médicos, diseñado para brindar protección y comodidad al usuario.",
      "Fabricado con materiales de alta calidad para garantizar resistencia y durabilidad.",
      "Diseñado para un ajuste adecuado y una cobertura completa, manteniendo al usuario protegido durante procedimientos médicos."
    ],
    "short_description": "Conjunto de Vestimenta Médica para Protección en Entornos Hospitalarios",
    "description": "El Conjunto de Chaqueta y Pantalón de Hospital es una elección esencial en el ámbito médico, diseñado para proporcionar una barrera eficaz contra contaminantes biológicos y mantener al personal médico seguro. Está fabricado con los más altos estándares de calidad y se adapta perfectamente para garantizar la protección y la comodidad del usuario durante procedimientos médicos. Su durabilidad y resistencia lo convierten en una elección confiable para entornos hospitalarios. Proteja a su personal médico con el Conjunto de Chaqueta y Pantalón de alta calidad.",
    "table": [],
    "images": [ProductTest28]
  },
  {
    "id": 29,
    "category": "Ropa Descartable",
    "subcategory": "Mascarillas",
    "labels": ["Medicina", "Protección Personal"],
    "name": "Mascarilla 3 Pliegues",
    "characteristic": [
      "Mascarilla de 3 pliegues diseñada para proporcionar protección y comodidad durante el uso.",
      "Fabricada con materiales de alta calidad para una eficaz filtración de partículas y protección contra contaminantes biológicos.",
      "Diseño de triple capa que proporciona una barrera efectiva en entornos médicos y otros entornos donde se requiere protección facial."
    ],
    "short_description": "Mascarilla de 3 Pliegues para Protección y Confort",
    "description": "La Mascarilla de 3 Pliegues es un elemento esencial en la protección personal, especialmente en entornos médicos y situaciones donde se necesita protección facial. Esta mascarilla está diseñada para ofrecer una barrera eficaz contra contaminantes biológicos y partículas suspendidas en el aire. Fabricada con materiales de alta calidad, garantiza la filtración adecuada y la comodidad del usuario. Su diseño de triple capa proporciona una protección óptima. Mantén a salvo a tu personal y a ti mismo con la Mascarilla de 3 Pliegues de alta calidad.",
    "table": [],
    "images": [ProductTest29]
  },
  {
    "id": 30,
    "category": "Ropa Descartable",
    "subcategory": "Vestimenta",
    "labels": ["Medicina","Protección Personal", "Enfermería"],
    "name": "Gorro de Enfermera",
    "characteristic": [
      "El Gorro de Enfermera es un accesorio esencial para el personal de enfermería y atención médica.",
      "Diseñado para brindar comodidad y estilo a quienes lo usan.",
      "Fabricado con materiales de alta calidad y un diseño que garantiza una sujeción segura durante largos turnos de trabajo."
    ],
    "short_description": "Gorro de Enfermera para Estilo y Comodidad",
    "description": "El Gorro de Enfermera es un accesorio imprescindible en el vestuario del personal de enfermería y atención médica. No solo añade un toque de estilo, sino que también cumple una función importante al mantener el cabello recogido y proporcionar comodidad durante largos turnos de trabajo. Este gorro está diseñado con atención a los detalles, con materiales de alta calidad y un diseño que garantiza un ajuste seguro y cómodo. Es la elección perfecta para mostrar profesionalismo y estilo en el entorno hospitalario. Asegura un aspecto impecable con el Gorro de Enfermera de alta calidad.",
    "table": [],
    "images": [ProductTest30_1,ProductTest30_2]
  },
  {
    "id": 31,
    "category": "Ropa Descartable",
    "subcategory": "Vestimenta",
    "labels": ["Medicina","Protección Personal", "Seguridad"],
    "name": "Cubrezapatos Antideslizantes",
    "characteristic": [
      "Los Cubrezapatos Antideslizantes son esenciales para mantener un entorno seguro y limpio.",
      "Diseñados con una superficie antideslizante para prevenir caídas y resbalones.",
      "Fabricados con materiales duraderos y resistentes al desgaste para un uso prolongado."
    ],
    "short_description": "Cubrezapatos Antideslizantes para Seguridad y Higiene",
    "description": "Los Cubrezapatos Antideslizantes son un componente crucial para mantener la seguridad y la higiene en diversos entornos, incluyendo el ámbito médico. Están diseñados con una superficie antideslizante que previene caídas y resbalones, lo que es esencial para garantizar la seguridad de los trabajadores y pacientes. Estos cubrezapatos están fabricados con materiales duraderos y resistentes al desgaste, lo que permite un uso prolongado y una protección efectiva. Mantén la higiene y seguridad en tu entorno con los Cubrezapatos Antideslizantes de alta calidad.",
    "table": [],
    "images": [ProductTest31]
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
    subHeader:"Feria Médica Nº1 mundial",
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
    body:"La Feria Internacional de Equipamiento Médico de China (CMEF), una exposición de equipamiento médico, reúne a marcas internacionales de equipamiento médico para conectar con distribuidores, revendedores, fabricantes, médicos, reguladores y agencias gubernamentales con licencia a nivel global. Muestra productos y soluciones innovadoras recién llegados al mercado mundial, establece asociaciones con distribuidores locales e internacionales, colabora en la fabricación en el sudeste asiático y más allá, aprende cómo navegar la complejidad del mercado regulado y amplía tu red de contactos a través de nuestro servicio de conserjería de reuniones en línea y presenciales en CMEF.",
    imagen:News_3,
    href:"/#news",
    external_news:"https://www.cmef.com.cn/en",
    hashtags:["Conferencia","Farmaceutica","Equipos","China"],
    created_date: "2023-10-28",
  },
]

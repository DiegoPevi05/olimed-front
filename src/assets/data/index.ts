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
  ProductTest19,
  ProductTest20,
  ProductTest21,
  ProductTest22,
  ProductTest23,
  ProductTest24,
  ProductTest25,
  ProductTest26,
  News_1,
  News_2,
  News_3,
} from "../images";

export const LANGUAGES = [
    { label: 'Español', code: 'es' },
    { label: 'Ingles', code: 'en' }
]

export const FilterProducLabels:FilterProductProps = {
  categories: ["Medicamentos","Ropa Descartable","Material Medico", "Materiales para Laboratorio"],
  subcategories: ["Desinfección e Higiene","Guantes","Instrumentos de Medición","Material de Punción","Materiales e Instrumentación Quirurgicos", "Sondas y Drenajes","Material de Oxigenoterapia", "Vendajes","Set de Infusion"],
  labels: ["primeros auxilios","farmaceutica","emergencias"]
}

export const productListData:ProductProps[] = [
  {
    id:1,
    category:"Material Medico",
    subcategory:"Desinfección e Higiene",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Desinfectantes Hospitalarios",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest1],
  },
  {
    id:2,
    category:"Medicamentos",
    subcategory:"Desinfección e Higiene",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Yodopovidona",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest2],
  },
  {
    id:3,
    category:"Material Medico",
    subcategory:"Desinfección e Higiene",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Productos Galénicos",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest3],
  },
  {
    id:4,
    category:"Material Medico",
    subcategory:"Desinfección e Higiene",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Alcohol Gel",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest4],
  },
  {
    id:5,
    category:"Material Medico",
    subcategory:"Guantes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Guantes de Látex",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest5],
  },
  {
    id:6,
    category:"Material Medico",
    subcategory:"Guantes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Guantes Quirúrgicos Estériles",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest6],
  },
  {
    id:7,
    category:"Material Medico",
    subcategory:"Guantes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Guantes de Nitrilo",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest7],
  },
  {
    id:8,
    category:"Material Medico",
    subcategory:"Instrumentos de Medición",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Glucómetros",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest8],
  },
  {
    id:9,
    category:"Material Medico",
    subcategory:"Insumos Medicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Gasas",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest9],
  },
  {
    id:10,
    category:"Material Medico",
    subcategory:"Insumos Medicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Esparadrapo Hipoalergénico",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest10],
  },
  {
    id:11,
    category:"Material Medico",
    subcategory:"Insumos Medicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Papel Térmico para Ecografia",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest11],
  },
  {
    id:12,
    category:"Material Medico",
    subcategory:"Insumos Medicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Termómetros",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest12],
  },
  {
    id:13,
    category:"Material Medico",
    subcategory:"Material de Oxigenoterapia",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Máscaras de Oxígeno",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest13],
  },
  {
    id:14,
    category:"Material Medico",
    subcategory:"Material de Punción",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Catéter Intravenoso",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest14],
  },
  {
    id:15,
    category:"Material Medico",
    subcategory:"Material de Punción",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Jeringas y Agujas",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest15],
  },
  {
    id:16,
    category:"Material Medico",
    subcategory:"Materiales e Instrumentación Quirurgicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Hojas de Bisturí",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest16],
  },
  {
    id:17,
    category:"Material Medico",
    subcategory:"Materiales e Instrumentación Quirurgicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Instrumental Quirúrgico",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest17],
  },
  {
    id:18,
    category:"Material Medico",
    subcategory:"Materiales e Instrumentación Quirurgicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Sistema de Drenaje de Heridas",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest18],
  },
  {
    id:19,
    category:"Material Medico",
    subcategory:"Materiales e Instrumentación Quirurgicos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Tubos Endotraqueales",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest19],
  },
  {
    id:20,
    category:"Materiales para Laboratorio",
    subcategory:"Materiales para Laboratorio",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Frascos para Muestras",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest20],
  },
  {
    id:21,
    category:"Medicamentos",
    subcategory:"Medicamentos",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Soluciones Inyectables",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest21],
  },
  {
    id:22,
    category:"Ropa Descartable",
    subcategory:"Ropa Descartable",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Ropa Descartable Estéril y No Estéril",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest22],
  },
  {
    id:23,
    category:"Insumos Medicos",
    subcategory:"Set de Infusion",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Equipo de Volutrol y Venoclisis",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest23],
  },
  {
    id:24,
    category:"Insumos Medicos",
    subcategory:"Sondas y Drenajes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Sondas Foley",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest24],
  },
  {
    id:25,
    category:"Insumos Medicos",
    subcategory:"Sondas y Drenajes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Bolsas Urinarias",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest25],
  },
  {
    id:26,
    category:"Insumos Medicos",
    subcategory:"Vendajes",
    labels:["primeros auxilios","farmaceutica","emergencias"],
    name:"Vendas Elásticas",
    characteristic:["Los respiradores N95 quirúrgicos están diseñados para reducir la exposición del usuario a los contaminantes biológicos", "Forman un sello apropiado sobre la boca y la nariz.", "Para lograr la efectividad deseada, se debe realizar una prueba de ajuste y se deben ajustar a la cara del usuario."],
    short_description:"Mascarilla para Proteccion de bacterias",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    table: [
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      },
      {
        name:"Mascarilla KN95",
        brand:"Braun",
        specifications:"Mascarilla con proteccion de 200micras",
      }
    ],
    images:[ProductTest26],
  },
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

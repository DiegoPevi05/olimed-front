import { useState } from 'react';
import { ChevronRight} from "lucide-react";
import {  staggerContainer,fadeIn } from "../lib/motions";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';


const Product = () => {

  const location = useLocation();
  const product = location.state.productDetail;

  const [selectedImage,setSelectedImage] = useState<number>(0);

  const toogleSelectImage = (index:number) => {
    setSelectedImage(index)
  }


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
            <a href="/#products" aria-current="page" className="font-medium text-fourth hover:text-primary">
              Productos
            </a>
              <ChevronRight className="text-primary "/>
          </div>
        </li>
        <li className="text-sm">
          <span  aria-current="page" className="font-medium text-fourth hover:text-primary cursor-pointer">
            {product.name}
          </span>
        </li>
      </ol>

      <div className="flex flex-col lg:flex-row max-w-md px-10 mt-8 lg:mt-0 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto lg:grid-cols-2 lg:grid-rows-[auto] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">

          <div className="lg:col-span-1 lg:pr-8">
            {product.images.map((image:any,index:any) => (
              index == selectedImage && (
                <motion.section 
                  variants={staggerContainer()}
                  initial='hidden'
                  whileInView='show'
                  className="relative w-full flex justify-center">
                    <motion.div 
                    variants={fadeIn("down", "", 0.2, 1)}
                      className="h-[200px] md:h-[360px] w-[300px] md:w-[580px] border-2 rounded-[20px] border-cyan-100 overflow-hidden">
                      <img src={image} alt="img1" className="w-full h-full hover:scale-125 transition-transform ease-in-out duration-300 opacity-70 object-contain"/>
                    </motion.div>
                </motion.section>

              )
            ))}
            <ul className="w-full flex flex-row justify-center items-center gap-4 mt-4">
              {product.images.map((_:any,index:any) => (
                <li key={"bullet_"+index}>
                  <button onClick={()=>toogleSelectImage(index)}  className={`w-5 sm:w-10 h-5 sm:h-10 bg-primary rounded-full hover:scale-125 transition-transform ease-in-out duration-300 focus:outline-none ${index === selectedImage ? "ring-2 ring-primary ring-offset-2" : "focus:ring-2 focus:ring-primary focus:ring-offset-2"}`}>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-2 lg:border-l lg:border-primary lg:pb-16 lg:pl-8 lg:pt-6">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">{product.name}</h1>
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 mt-2">
                <p className="text-base text-tertiary text-wrap">{product.description}</p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-medium text-secondary">Caracteristicas</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.characteristic.map((characteristic:any) => (
                    <li key={characteristic} className="text-secondary">
                      <span className="text-tertiary">{characteristic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-sm font-medium text-secondary">Detalles</h2>
              <div className="mt-4 space-y-6">
                  <table className="w-full text-sm text-left border-collapse border border-slate-400">
                    <thead>
                      <tr>
                        <th className=" border border-slate-300 pl-4 w-1/4">Nombre</th>
                        <th className=" border border-slate-300 pl-4 w-1/4">Marca</th>
                        <th className=" border border-slate-300 pl-4 w-2/4">Especificaciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.table.map((item_table:any,index:any) => (
                        <tr key={"product_"+product.id + "_"+index}>
                          <td className="border border-slate-300 pl-4 w-1/4">{item_table.name}</td>
                          <td className="border border-slate-300 pl-4 w-1/4">{item_table.brand}</td>
                          <td className="border border-slate-300 pl-4 w-2/4 pr-1">
                              {item_table.specifications}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-medium text-secondary">Etiquetas</h3>

              <div className="mt-4">
                <div  className="flex flex-row flex-wrap gap-2">
                  {product.labels.map((label:any) => (
                    <div key={label} className="text-secondary bg-cyan-100 rounded-[20px] py-1 px-2 text-sm">
                      <span className="text-secondary">#{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Product;

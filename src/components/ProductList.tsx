import { useState,useEffect, useCallback, Fragment } from 'react';
import {ChevronDown, ChevronRight, Loader2 ,FilterX} from "lucide-react";
import { fadeIn } from "../lib/motions";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ProductProps, FilterProductProps } from "../lib/interfaces";
import { productListData, FilterProducLabels } from "../assets/data";
import { Menu, Transition } from '@headlessui/react'

interface ProductPropsCard extends ProductProps {
  index:number;
}

const Product = (props:ProductPropsCard) => {
  const {index,id,name,short_description,images} = props;
  return(
      <motion.div
        key={"card_"+index}
        variants={fadeIn("right", "spring", index*0.5, 0.75)}
        className='w-[250px] min-w-[250px] max-w-[250px] w-full h-[320px] bg-cyan-200 p-[1px] rounded-[10px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      >
        <div
          className='relative bg-white rounded-[10px] py-10 px-0 h-[318px] flex flex-col'
        >
          <img
            src={images[0]}
            alt='web-development'
            className='absolute w-36 h-36 top-[-35px] place-self-center rounded-full border-4 border-cyan-100 object-contain'
          />
          <div className="flex flex-col items-center mt-20 px-8">
            <h4 className="text-center text-primary text-[16px] font-bold">
              {name}
            </h4>
            <p className='text-secondary text-center font-body text-[13px] my-2'>
              {short_description}
            </p>
            <Link to={`/products/${id}`} state={{productDetail: props}} className="active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ease-in-out duration-300  bg-primary text-white hover:bg-tertiary h-10 py-2 px-4">Ver Producto</Link>
          </div>
        </div>

      </motion.div>
  )
}

const ProductList = () => {
  const [Products] = useState<ProductProps[]>(productListData);
  const [FilteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [FiltersProducts] = useState<FilterProductProps>(FilterProducLabels);
  const [FilterApply,setFilterApply] = useState<FilterProductProps>({categories:[],subcategories:[],labels:[]}); 
  const [LoadingProductsState,setLoadingProductsState] = useState<boolean>(true);


  useEffect(() =>{
    if(FilterApply.categories.length > 0 || FilterApply.labels.length > 0){
      // Filter the products based on FilterApply
      const filteredProducts = Products.filter(product => {

        if (FilterApply.categories.length > 0 && !FilterApply.categories.includes(product.category)) {
          return false;
        }

        if (FilterApply.subcategories.length > 0 && !FilterApply.subcategories.includes(product.subcategory)) {
          return false;
        }

        if (FilterApply.labels.length > 0) {
          const intersection = product.labels.filter(label => FilterApply.labels.includes(label));
          if (intersection.length === 0) {
            return false;
          }
        }

        return true;
      });
      setFilteredProducts(filteredProducts);

    }else{

      setFilteredProducts(Products);
    }

    setTimeout(() => {
      setLoadingProductsState(false); // Set loading state to false after a 2-second delay
    }, 1000);

  },[FilterApply,Products])


  const cleanFilter = () => {

    setLoadingProductsState(true); // Set loading state to false after a 2-second delay
    setFilterApply({categories:[],subcategories:[], labels:[]})
  }

  const triggerFilter = useCallback((event:any) => {
    setLoadingProductsState(true);

    const id = event.id;
    const concept = id.split('_')[0];
    const index = id.split('_')[1]

    if(concept == "category"){
      var value = FiltersProducts.categories[index];
      if (FilterApply.categories.includes(value)) {
        const updatedCategories = FilterApply.categories.filter(category => category !== value);
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, categories: updatedCategories }));
      } else {
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, categories: [...prevFilterApply.categories, value] }));
      }
    }else if(concept == "subcategory"){
      var value = FiltersProducts.subcategories[index];
      if (FilterApply.subcategories.includes(value)) {
        const updatedSubCategories = FilterApply.subcategories.filter(subcategory => subcategory !== value);
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, subcategories: updatedSubCategories }));
      } else {
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, subcategories: [...prevFilterApply.subcategories, value] }));
      }

    }else if(concept == "label") {
      var value = FiltersProducts.labels[index];
      if (FilterApply.labels.includes(value)) {
        const updatedLabels = FilterApply.labels.filter(label => label !== value);
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, labels: updatedLabels }));
      } else {
        setFilterApply(prevFilterApply => ({ ...prevFilterApply, labels: [...prevFilterApply.labels, value] }));
      }
    }

  },[Products,FiltersProducts,FilterApply])


  return (
    <div className="w-full h-full mt-[120px] py-4">
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
          <a href="/#products" aria-current="page" className="font-medium text-fourth hover:text-primary">
            Productos
          </a>
        </li>
      </ol>

      <Menu as="div" className="w-full flex lg:hidden justify-end relative inline-block text-left right-10">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-cyan-300 hover:bg-gray-50">
                   Filtros
                  <ChevronDown className="-mr-1 h-5 w-5 text-cyan-400" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 top-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-4">

                    <div className="flex flex-row w-full justify-end">
                      <button onClick={()=>cleanFilter()}><FilterX className="text-primary mr-4"/></button>
                    </div>
                    <legend className="font-heading text-secondary leading-6 mt-2 ml-4">Categorias</legend>
                    {FiltersProducts.categories.length > 0 && FiltersProducts.categories.map((category,index) => (
                      <Menu.Item>
                        <div className="relative flex gap-x-3 mx-6">
                          <div className="flex h-6 items-center">
                            <input 
                              id={"category_"+index} 
                              name={"category_"+index} 
                              type="checkbox" 
                              className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                              onChange={event => triggerFilter(event.target)}
                              checked={FilterApply.categories.includes(category)}
                            />
                          </div>
                          <div className="text-body leading-6">
                            <label htmlFor={"category_"+index} className="font-body text-tertiary text-sm">{category}</label>
                          </div>
                        </div>
                      </Menu.Item>
                    ))}
                    <legend className="font-heading text-secondary leading-6 mt-2 ml-4">Sub-Categorias</legend>
                    {FiltersProducts.subcategories.length > 0 && FiltersProducts.subcategories.map((subcategory,index) => (
                      <Menu.Item>
                        <div className="relative flex gap-x-3 mx-6">
                          <div className="flex h-6 items-center">
                            <input 
                              id={"subcategory_"+index} 
                              name={"subcategory_"+index} 
                              type="checkbox" 
                              className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                              onChange={event => triggerFilter(event.target)}
                              checked={FilterApply.subcategories.includes(subcategory)}
                            />
                          </div>
                          <div className="text-body leading-6">
                            <label htmlFor={"subcategory_"+index} className="font-body text-tertiary text-sm">{subcategory}</label>
                          </div>
                        </div>
                      </Menu.Item>
                    ))}
                    <legend className="font-heading text-secondary leading-6 mt-2 ml-4">Etiquetas</legend>
                    {FiltersProducts.labels.length > 0 && FiltersProducts.labels.map((label,index) => (
                      <Menu.Item>
                        <div className="relative flex gap-x-3 mx-6">
                          <div className="flex h-6 items-center">
                            <input 
                              id={"label_"+index} 
                              name={"label_"+index} 
                              type="checkbox" 
                              className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                              onChange={event => triggerFilter(event.target)}
                              checked={FilterApply.labels.includes(label)}
                            />
                          </div>
                          <div className="text-body leading-6">
                            <label htmlFor={"label_"+index} className="font-body text-tertiary text-sm">{label}</label>
                          </div>
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
    </Menu>
      <div className="flex flex-row max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">

        <div className="hidden lg:flex flex-col w-[200px] h-full rounded-[20px] px-8 py-4 lg:min-w-2xl mt-10 shadow-lg">
          <div className="flex flex-row w-full justify-between">
            <legend className="font-heading text-primary leading-2">Filtros</legend> 
            <button onClick={()=>cleanFilter()}><FilterX className="text-primary"/></button>
          </div>
          <legend className="font-heading text-secondary leading-6 mt-2">Categorias</legend>
          {FiltersProducts.categories.length > 0 && FiltersProducts.categories.map((category,index) => (
            <div className="mt-2 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input 
                    id={"category_"+index} 
                    name={"category_"+index} 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                    onChange={event => triggerFilter(event.target)}
                    checked={FilterApply.categories.includes(category)}
                  />
                </div>
                <div className="text-body leading-6">
                  <label htmlFor={"category_"+index} className="font-body text-tertiary text-sm">{category}</label>
                </div>
              </div>
            </div>
          ))}
          <legend className="font-heading text-secondary leading-6 mt-2">Sub-Categorias</legend>
          {FiltersProducts.subcategories.length > 0 && FiltersProducts.subcategories.map((subcategory,index) => (
            <div className="mt-2 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input 
                    id={"subcategory_"+index} 
                    name={"subcategory_"+index} 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                    onChange={event => triggerFilter(event.target)}
                    checked={FilterApply.subcategories.includes(subcategory)}
                  />
                </div>
                <div className="text-body leading-6">
                  <label htmlFor={"subcategory_"+index} className="font-body text-tertiary text-sm">{subcategory}</label>
                </div>
              </div>
            </div>
          ))}
          <legend className="font-heading text-secondary leading-6 mt-2">Etiquetas</legend>
          {FiltersProducts.labels.length > 0 && FiltersProducts.labels.map((label,index) => (
            <div className="mt-2 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input 
                    id={"label_"+index} 
                    name={"label_"+index} 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-600"
                    onChange={event => triggerFilter(event.target)}
                    checked={FilterApply.labels.includes(label)}
                  />
                </div>
                <div className="text-body leading-6">
                  <label htmlFor={"label_"+index} className="font-body text-tertiary text-sm">{label}</label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul role="list" className="mx-4 flex flex-wrap max-w-2xl justify-center sm:justify-start items-center gap-12 px-4 sm:px-6 lg:max-w-5xl lg:px-8 py-4 mt-10 lg:py-8 w-full">
          {LoadingProductsState ?
            <div className="w-full h-full flex justify-center items-center">
              <Loader2 className=' text-primary h-16 w-16 animate-spin' />
            </div>
          :
            FilteredProducts.length > 0 && FilteredProducts.map((product,index) => (
              <li key={"product_"+index}>
                <Product index={index} {...product}/>
              </li>
            ))
          }

        </ul> 
      </div>
    </div>
  );
};

export default ProductList;

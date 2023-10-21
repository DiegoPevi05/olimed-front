import { useState, useEffect, Fragment ,useCallback } from 'react';
import { ChevronRight, Loader2,FilterX ,ChevronDown } from "lucide-react";
import { newProps } from '../lib/interfaces';
import { newsData } from '../assets/data';
import { Menu, Transition } from '@headlessui/react'
import { NewCardDetail } from '../components/cards/news';
import { useTranslation } from 'react-i18next';

const NewsList = () => {


  const [NewsData] = useState<newProps[]>(newsData);
  const [ShowData,setShowData] = useState<newProps[]>([]);
  const [LoadingProductsState,setLoadingProductsState] = useState<boolean>(true);
  const {  t } = useTranslation()


  useEffect(() => {
    setShowData(NewsData);
    setLoadingProductsState(false);
  }, []);

  const cleanOrder = () => {
    setShowData(NewsData);
  }


  const orderNews = useCallback((order:string) => {
    setLoadingProductsState(true);
    const clonedData = [...NewsData];

    if (order === 'new') {

      // @ts-ignore
      clonedData.sort((a:any, b:any) => new Date(b.created_date) - new Date(a.created_date));

    } else if (order === 'old') {

      // @ts-ignore
      clonedData.sort((a:any, b:any) => new Date(a.created_date) - new Date(b.created_date));
    }

    setShowData(clonedData);
    setLoadingProductsState(false);
  },[NewsData])


  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="w-full h-full mt-[50px] sm:mt-[120px] py-4">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li key={"Breadcrumb_home"}>
          <div className="flex items-center">
            <a href="/#" className="mr-2 text-sm font-medium text-fourth hover:text-primary">
              {t("Inicio")} 
            </a>
            <ChevronRight className="text-primary "/>
          </div>
        </li>
        <li className="text-sm">
          <a href="/#news" aria-current="page" className="font-medium text-fourth hover:text-primary">
              {t("Noticias")} 
          </a>
        </li>
      </ol>

      <Menu as="div" className="w-full flex  justify-end relative inline-block text-left mx-auto lg:max-w-5xl">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
                  {t("Ordenar")} 
                  <ChevronDown className="-mr-1 h-5 w-5 text-primary" aria-hidden="true" />
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
                <Menu.Items as="div" className="absolute right-0 z-10 mt-2 w-36 top-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-4">
                    <div className="flex flex-row w-full justify-end">
                      <button onClick={()=>cleanOrder()}><FilterX className="text-primary mr-4"/></button>
                    </div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={()=>orderNews('new')}
                          className={classNames(
                            active ? 'bg-gray-100 text-primary' : 'text-secondary',
                            'block w-full px-4 py-2 text-sm'
                          )}
                        >
                          {t("Recientes")} 
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={()=>orderNews('old')}
                          className={classNames(
                            active ? 'bg-gray-100 text-primary' : 'text-secondary',
                            'block w-full px-4 py-2 text-sm'
                          )}
                        >
                          {t("Antiguas")} 
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
    </Menu>

      <ul role="list" className="mx-4 mx-auto flex  flex-wrap max-w-2xl justify-center sm:justify-center items-center gap-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4 mt-10 lg:py-8 w-full">
        {LoadingProductsState ?
          <div className="w-full h-full flex justify-center items-center">
            <Loader2 className=' text-primary h-16 w-16 animate-spin' />
          </div>
        :
          ShowData.length > 0 && ShowData.map((newItem,index) => (
            <li key={"new_"+index} className="w-[360px]">
              <NewCardDetail index={index}  
              isHome={false}
              {...newItem}/>
            </li>
          ))
        }

      </ul> 
    </div>
  );
};

export default NewsList;

import { FC, useState,useEffect, Fragment} from 'react';
import {BrandLogo,Logo,USAFLAG, PERUFLAG} from '../assets/images';
import { Menu as MenuIcon, X, Search, ChevronDown, ExternalLink } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { LANGUAGES,SEARCH } from '../assets/data';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react'
// @ts-ignore
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';

interface INavigation {
  name: string;
  label: string;
  href: string;
  offset: number;
}

const navigation:INavigation[] = [
  { name: 'Home',label:'Inicio', href: 'hero', offset:0 },
  { name: 'News', label:'Noticias',href: 'news', offset:-80 },
  { name: 'Products', label:'Productos',href: 'products',offset:-100 },
  { name: 'About', label:'Nosotros',href: 'about',offset:0 },
  { name: 'Contact', label:'Contactanos',href: 'contact',offset:-20 },
]

const Navbar: FC = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [scrollNav, setScrollNav] = useState(true)

  const { i18n, t } = useTranslation()

  const changeLang = (value:string) => {
        i18n.changeLanguage(value)
    }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const changeNav = () => {
    if (window.scrollY >= 120) {
      setScrollNav(false)
    } else {
      setScrollNav(true)
    }
  }

  const ToogleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const [listSearched,setListSearched] = useState<any[]>([])
  const [searchedValue, setSearchedValue] = useState<string>("");

  const handleChange = (event:any) => {
    const { target } = event;
    const { value } = target;

    setSearchedValue(value);

  };

  useEffect(()=>{
    if(searchedValue.length > 0){
      // @ts-ignore
      const listFiltered = SEARCH[i18n.language].filter((search:any) => search.label.toLowerCase().includes(searchedValue.toLowerCase()));
      setListSearched(listFiltered);
    }
  },[searchedValue])


  return(
    <div className={`${ scrollNav ? 'h-[50px] sm:h-[120px]' : 'h-[50px] sm:h-[50px] hover:h-[120px] ' } fixed top-0  w-full z-10 bg-white drop-shadow-lg transition-all ease-in-out duration-1000`} onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}>

      <nav className="flex flex-row items-center w-full h-full px-8 sm:px-16 lg:px-24 ">
        <div className="flex justify-center items-center py-4 w-full lg:w-1/5">
          <a 
            onClick={scrollToTop}
            className="w-full h-full cursor-pointer">
            <img src={BrandLogo} alt="logo" className={`${ scrollNav ? 'h-auto w-48 lg:w-64' : isHovered ? 'h-auto w-48 lg:w-64' : 'h-auto w-24' } hidden sm:block transition-all ease-in-out duration-1000 `} 
            /> 
            <img src={Logo} alt="logo" className="block sm:hidden h-auto w-10 rounded-full" 
            /> 
          </a>
        </div>
        <ul className="hidden lg:flex flex-row justify-end items-center gap-12 w-4/5">
          {scrollNav ?
            <>
              {navigation.map((item,index)=>(
                <LinkScroll key={"Link_"+index} 
                  to={item.href}
                  offset={item.offset}
                >

                  <li key={"Link_"+item.name} className="mx-4 text-xl  font-body text-fourth hover:text-primary hover:underline ease-in-out duration-300 cursor-pointer">{t(item.label)}</li>
                </LinkScroll>
              ))}
              <div className="hidden lg:flex flex-row w-auto gap-4">
                <button onClick={() => setSearchOpen(true)} className="p-0">
                  <Search className="text-primary hover:text-tertiary"/>
                </button>
              </div>
              <Menu as="div" className="w-auto flex relative inline-block text-left sm:mr-4 lg:mr-0">
                    <div>
                      <Menu.Button className="inline-flex w-[80px] xl:w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm  hover:bg-gray-50">
                        <img src={i18n.language == 'es' ? PERUFLAG : USAFLAG} className="h-4 w-auto"/>
                        <ChevronDown className=" h-5 w-5 text-primary" aria-hidden="true" />
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
                        <div className="py-2 ">
                          {LANGUAGES.map((lan,index) => (
                            <Menu.Item key={"lan_"+index}>
                              <div className="relative flex gap-x-3 mx-1">
                                <button className="bg-white hover:bg-primary w-full h-full text-fourth font-body font-bold" onClick={() => changeLang(lan.code)}>{t(lan.label)}</button>
                              </div>
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
              </Menu>
            </>
          :
            isHovered ? 
            <>
              {navigation.map((item,index)=>(
                <LinkScroll key={"Link_"+index} 
                  to={item.href}
                  offset={item.offset}
                >

                  <li key={"Link_"+item.name} className="mx-4 text-xl  font-body text-fourth hover:text-primary hover:underline ease-in-out duration-300 cursor-pointer">{t(item.label)}</li>
                </LinkScroll>
              ))}
              <div className="hidden lg:flex flex-row w-auto gap-4">
                <button onClick={() => setSearchOpen(true)} className="p-0 ">
                  <Search className="text-primary hover:text-tertiary"/>
                </button>
              </div>

              <Menu as="div" className="w-auto flex relative inline-block text-left sm:mr-4 lg:mr-0">
                    <div>
                      <Menu.Button className="inline-flex w-[80px] xl:w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm  hover:bg-gray-50">
                        <img src={i18n.language == 'es' ? PERUFLAG : USAFLAG} className="h-4 w-auto"/>
                        <ChevronDown className=" h-5 w-5 text-primary" aria-hidden="true" />
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
                        <div className="py-2 ">
                          {LANGUAGES.map((lan,index) => (
                            <Menu.Item key={"lan_"+index}>
                              <div className="relative flex gap-x-3 mx-1">
                                <button className="bg-white hover:bg-primary w-full h-full text-fourth font-body font-bold" onClick={() => changeLang(lan.code)}>{t(lan.label)}</button>
                              </div>
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
              </Menu>
            </>
              :
                  <MenuIcon className="h-6 w-6 sm:h-10 sm:w-10 text-primary hover:text-secondary ease-in-out duration-300" aria-hidden="true" />
          }

        </ul>

        <Menu as="div" className="w-auto flex lg:hidden relative inline-block text-left sm:mr-4 lg:mr-0">
              <div>
                <Menu.Button className="inline-flex w-[80px] xl:w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary shadow-sm  hover:bg-gray-50">
                  <img src={i18n.language == 'es' ? PERUFLAG : USAFLAG} className="h-4 w-auto"/>
                  <ChevronDown className=" h-5 w-5 text-primary" aria-hidden="true" />
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
                  <div className="py-2 ">
                    {LANGUAGES.map((lan,index) => (
                      <Menu.Item key={"lan_"+index}>
                        <div className="relative flex gap-x-3 mx-1">
                          <button className="bg-white hover:bg-primary w-full h-full text-fourth font-body font-bold" onClick={() => changeLang(lan.code)}>{t(lan.label)}</button>
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
        </Menu>


        <div className="flex justify-end lg:hidden w-auto gap-4">
          <button onClick={() => ToogleSearchOpen()}>
            <Search className="h-6 w-6 text-primary hover:text-tertiary"/>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center text-fifth"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t("Abrir Menu Principal")}</span>
            <MenuIcon className="h-6 w-6 text-primary hover:text-secondary ease-in-out duration-300" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <div 
        className={`${ searchOpen ? 'block opacity-100 h-auto sm:h-[360px]' : 'block opacity-0 h-[0px]' } absolute top-[50px] sm:top-[120px] w-full  bg-white  transition-opacity ease-in-out duration-300 
        flex flex-col justify-center items-center py-4 gap-2`}>
          <button className="hidden sm:block absolute top-4 right-20" onClick={() => setSearchOpen(false)}><X className="w-10 h-10 text-primary hover:text-tertiary ease-in-out duration-300"/></button>
        <h1 className="hidden sm:block font-body text-primary text-4xl">{t("Que estas buscando?")}</h1>
          <div className="relative w-[300px] sm:w-1/4">
            <input
              type="text"
              value={searchedValue}
              onChange={handleChange}
              className="w-full p-2 pl-10 rounded-lg border bg-white text-secondary focus:outline-none"
              placeholder={t("Busqueda")}
            />
            <div className="absolute left-3 top-2 text-primary">
              <Search />
            </div>
            <div className={`${searchedValue.length > 0 && listSearched.length > 0 ? 'block opacity-100 h-auto' : 'hidden opacity-0 h-[0px]'} absolute top-[50px] left-0 w-[300px] sm:w-full border-2 bg-white transition-opacity ease-in-out duration-300 `}>
              <div className='h-auto w-full cursor-pointer px-2 py-1'>
                {listSearched.map((SearchedOutput,index:any) => (
                  <a key={"tag_"+index} href={SearchedOutput.route} className="flex flex-row justify-between text-primary w-full h-full hover:bg-slate-100 hover:underline z-[20]">{t(SearchedOutput.label)} <ExternalLink/> </a>
                ))}
              </div>
            </div>
            <div className={`${searchedValue.length > 0 && listSearched.length == 0 ? 'block opacity-100 h-auto' : 'hidden opacity-0 h-[0px]'} absolute top-[50px] left-0 w-[300px] sm:w-full border-2 bg-white transition-opacity ease-in-out duration-300 `}>
              <div className='h-auto w-full hover:bg-slate-100 cursor-pointer px-2 py-1'>
                  <span className="flex flex-row justify-between text-primary w-full hover:underline">{t("No hay resultados")}</span>
              </div>
            </div>
          </div>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Olimed</span>
              <img
              className="h-12 w-auto"
                src={BrandLogo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{t("Cerrar Menu")}</span>
              <X className="h-10 w-10 text-fifth" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <LinkScroll
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-fifth text-lg font-semibold leading-7 hover:bg-gray-50"
                  >
                    {t(item.label)}
                  </LinkScroll>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Navbar;

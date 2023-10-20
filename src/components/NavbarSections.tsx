import { FC, useState} from 'react';
import {BrandLogo,Logo} from '../assets/images';
import { Menu, X, Search } from 'lucide-react';
import { Dialog } from '@headlessui/react';

interface INavigation {
  name: string;
  label: string;
  href: string;
}

const navigation:INavigation[] = [
  { name: 'Home',label:'Inicio', href: '/#' },
  { name: 'News', label:'Noticias',href: '/#news' },
  { name: 'Products', label:'Productos',href: '/#products' },
]

const Navbar: FC = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const ToogleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  }

  return(
    <div className="fixed top-0 h-[50px] sm:h-[120px] w-full z-10 bg-white drop-shadow-lg">
      <nav className="flex flex-row items-center w-full h-full px-8 sm:px-16 lg:px-24 ">
        <div className="flex justify-center items-center py-4 w-full lg:w-1/5">
          <a 
            href="/#"
            className="w-full h-full cursor-pointer">
            <img src={BrandLogo} alt="logo" className="hidden sm:block h-auto w-48 lg:w-64" 
            /> 
            <img src={Logo} alt="logo" className="block sm:hidden h-auto w-10 rounded-full" 
            /> 
          </a>
        </div>
        <ul className="hidden lg:flex flex-row justify-end items-center gap-12 w-4/5">
          {navigation.map((item,index)=>(
            <a key={"Link_"+index} 
              href={item.href}
            >

              <li key={"Link_"+item.name} className="mx-4 text-xl  font-body text-fourth hover:text-primary hover:underline ease-in-out duration-300 cursor-pointer">{item.label}</li>
            </a>
          ))}
          <div className="hidden lg:flex flex-row gap-4">
            <button onClick={() => setSearchOpen(true)} className="p-0 mr-10">
              <Search className="text-primary hover:text-tertiary"/>
            </button>
          </div>
        </ul>
        <div className="flex justify-end lg:hidden w-auto gap-4">
          <button onClick={() => ToogleSearchOpen()}>
            <Search className="h-6 w-6 sm:h-10 sm:w-10 text-primary hover:text-tertiary"/>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center text-fifth"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir Menu Principal</span>
            <Menu className="h-6 w-6 sm:h-10 sm:w-10 text-primary hover:text-secondary ease-in-out duration-300" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <div 
        className={`${ searchOpen ? 'block opacity-100 h-auto sm:h-[360px]' : 'block opacity-0 h-[0px]' } absolute top-[50px] sm:top-[120px] w-full  bg-white  transition-opacity ease-in-out duration-300 
        flex flex-col justify-center items-center py-4 gap-2`}>
          <button className="hidden sm:block absolute top-4 right-20" onClick={() => setSearchOpen(false)}><X className="w-10 h-10 text-primary hover:text-tertiary ease-in-out duration-300"/></button>
          <h1 className="hidden sm:block font-body text-primary text-4xl">Que estas buscando?</h1>
          <div className="relative w-[300px] sm:w-1/4">
            <input
              type="text"
              className="w-full p-2 pl-10 rounded-lg border bg-white text-secondary focus:outline-none"
              placeholder="Busqueda"
            />
            <div className="absolute left-3 top-2 text-primary">
              <Search />
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
              <span className="sr-only">La Nonna Rose</span>
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
              <span className="sr-only">Cerrar Menu</span>
              <X className="h-10 w-10 text-fifth" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-fifth text-lg font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
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

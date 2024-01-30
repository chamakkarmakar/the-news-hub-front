import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  let [open, setOpen] = useState(false);
  let [scroll, setScroll] = useState(false);

  const navItems = [
    {
      menu: 'Home',
      link: '/'
    },
    {
      menu: 'About',
      link: '/about'
    },
    {
      menu: 'Blog',
      link: '/blog'
    },
    {
      menu: 'Contact',
      link: '/contact'
    },
    {
      menu: 'Login',
      link: '/login'
    }
  ];

  const handleOnScroll = () => {
   const isScrolled = window.scrollY > 0;
    setScroll(isScrolled);
    // console.log(scroll);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };

  }, [])

  return (
    <div className="sticky top-0 max-w-full">
      <div className=' bg-zinc-100 py-4'>
        <nav className="flex justify-between items-center w-full">
          <div className='md:w-1/4 w-1/2 md:mx-0 mx-auto transition-all duration-150 ease-linear delay-75'>
            <h1 className={`md:text-3xl text-xl text-center block font-bold font-[poppins] text-green-800 
            ${scroll ? 'md:block' : 'md:hidden'}
            `}>The News Hub</h1>
          </div>

          <div className="md:w-80 w-full md:mx-10 mx-0 ">

            <div className={`w-full flex md:flex-row flex-col md:justify-between justify-center items-center md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent bg-zinc-200 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
            ${open ? 'top-14' : '-top-80'}`}>
              {
                navItems.map(item =>
                  <Link key={item.menu}
                    onClick={() => setOpen(!open)}
                    to={item.link}
                    className='text-teal-950 text-center md:w-auto w-full md:mt-0 mt-3 font-semibold capitalize px-3 py-1 rounded hover:shadow-lg hover:bg-slate-400 hover:text-white'
                  >{item.menu}</Link>
                )
              }
            </div>

          </div>
          <div className='md:hidden block mx-5'>
            <button onClick={() => setOpen(!open)}>
              {
                !open ? <HiOutlineMenu className='w-6 h-6' /> : <HiOutlineX className='w-6 h-6' />
              }
            </button>
          </div>


        </nav>
      </div>
    </div>

  )
}

export default NavBar

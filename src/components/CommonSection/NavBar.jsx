import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import moment from 'moment';

const NavBar = () => {
  let [open, setOpen] = useState(false);

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

  return (
    <div className='shadow-lg w-full fixed top-0 left-0'>
      <div className='bg-purple-50 grid grid-cols-6 gap-4 py-4 '>
        <div className='md:col-start-2 col-span-4'>
          <h1 className='font-bold md:text-7xl text-3xl
    text-black ' style={{ fontFamily: 'CloisterBlack BT' }}>
            The News Hub
          </h1>
          <p className='md:block hidden text-md text-gray-500 py-2'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl col-span-2 absolute right-8 top-3 cursor-pointer md:hidden'>
          <button className='duration-300 ease-in py-2'>
            {open ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <ul className={`md:col-start-2 md:col-span-4 flex flex-col md:flex-row items-center md:justify-between justify-center md:pb-0 pb-10 absolute md:static bg-purple-50 md:z-auto z-[-2] left-0 w-full md:w-auto transition-all delay-100 duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            navItems.map((item) => (
              <Link key={item.menu} to={item.link} className='md:ml-8 text-md md:my-0 my-3 text-gray-800 hover:text-gray-400 duration-500'>
                {item.menu}
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBar

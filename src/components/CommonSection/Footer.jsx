import moment from 'moment'
import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    {
      item: "Home",
      to: "/"
    },
    {
      item: "Applied Jobs",
      to: "/applied"
    },
    {
      item: "Blog",
      to: "/blog"
    },
    {
      item: "Contact Us",
      to: "/#contact"
    }


  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='shadow-lg w-full fixed bottom-0 left-0 bg-black pb-2 pt-12'>

      <div className=" grid md:grid-cols-6 grid-cols-2 gap-5  text-white">
        <div className='md:col-start-1 col-span-2'>
          <h1 className='font-bold md:text-5xl text-3xl' style={{ fontFamily: 'CloisterBlack BT' }}>
            The News Hub
          </h1>
        </div>

        <div>
          <p className='mb-3'>About Us</p>
          <p className='mb-3'>Contact Us</p>
          <p className='mb-3'>Advertisement</p>
        </div>

        <div>
          <p className='mb-3'>About Us</p>
          <p className='mb-3'>Contact Us</p>
          <p className='mb-3'>Advertisement</p>
        </div>

        <div>
          <p className='mb-3'>About Us</p>
          <p className='mb-3'>Contact Us</p>
          <p className='mb-3'>Advertisement</p>
        </div>

        <div>
          <p className='mb-3'>About Us</p>
          <p className='mb-3'>Contact Us</p>
          <p className='mb-3'>Advertisement</p>
        </div>
      </div>

      <div className="px-6 text-red-500">
        <hr />
      </div>

      <div className='text-gray-500 pt-3'>
        <div className="w-1/4 mx-auto flex justify-between items-center py-3">
          <FaFacebookSquare className='w-8 h-8'/>
          <FaInstagram  className='w-8 h-8'/>
          <FaTwitter  className='w-8 h-8'/>
          <FaYoutube   className='w-8 h-8'/>
        </div>
        <small>
          © The New Hub, {moment().format('YYYY')}
        </small>
      </div>

    </div>
    
  )
}

export default Footer

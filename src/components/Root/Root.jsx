import React from 'react'
import NavBar from '../CommonSection/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../CommonSection/Footer'
import moment from 'moment'

const Root = () => {
    return (
        <div>
            <div className=' text-center'>
                <h1 className='font-bold md:text-7xl text-3xl
    text-black md:block hidden' style={{ fontFamily: 'CloisterBlack BT' }}>
                    The News Hub
                </h1>
                <p className='md:block hidden text-md text-gray-500 py-2'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Root

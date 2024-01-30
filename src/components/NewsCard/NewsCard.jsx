import React from 'react'
import { Link } from 'react-router-dom';
import { MdAccessTime } from "react-icons/md";
import moment from 'moment';

const NewsCard = ({news}) => {

    const {urlToImage,description,url,publishedAt,title}=news;
    // const yearMonthDate = publishedAt.split('T')[0].replaceAll('-','');
    // const publishDate = moment(yearMonthDate, "YYYYMMDD").fromNow()   //2 days ago
    var publishDate = moment(publishedAt).format('ll');
    

    return (
        <div className="md:w-2/5 border rounded-lg w-full h-auto mx-auto p-5 mb-10 shadow-lg">
            <div className='overflow-hidden'>
                <img src={ urlToImage} alt="" className='w-full h-[250px] object-cover rounded-md transition ease-in-out delay-300 duration-500 transform-none hover:scale-125' />
            </div>
            <div>
                <h1 className='text-2xl font-bold my-4 hover:text-rose-700'><Link to={ url} target='_blank'>{title}</Link></h1>
                <p className='text-gray-800 '>{ description} <span className='text-blue-800'><Link to={ url} target='_blank'>see more</Link></span> </p>
                <p className='text-gray-600 mt-5'><MdAccessTime className='inline  w-5 h-5' /> <span>{publishDate }</span></p>
                
            </div>
        </div>
    )
}

export default NewsCard

import React from 'react'
import RecentNews from '../RecentNews/RecentNews'
import NewsCategory from '../NewsCategory/NewsCategory'
import PopularNews from '../PopularNews/PopularNews'

const Home = () => {
  return (
    <div className='grid md:grid-cols-6 grid-cols-1 gap-x-10'>
        <NewsCategory />
        <RecentNews />
        <PopularNews />
    </div>
  )
}

export default Home

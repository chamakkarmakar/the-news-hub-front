import React, { useEffect, useState } from 'react'

import NewsCard from '../NewsCard/NewsCard';

const apiKey = import.meta.env.VITE_API_KEY;

const RecentNews = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const newsData = data.articles;
        // console.log(newsData);
        setAllNews(newsData)
      })
  }, [])
  return (
    <div className='mt-10 mx-5 col-span-4'>
      {
        allNews.slice(5, 20).map((news,index) =>
          <NewsCard key={index} news={news}/>
        )
      }

    </div>
  )
}

export default RecentNews

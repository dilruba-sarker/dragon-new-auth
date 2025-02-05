import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard';

export default function CategoryNews() {
    const {data:news} = useLoaderData(); 
    console.log("Data:", news);

  return (
    <div>
<h1 className='tex-2xl font-bold'>Dragon News Home</h1>
<p className='text-gray-500'>length of news in this category: {news.length}</p>
<div>
  {news.map(singleNews=><NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)}
</div>
    </div>
  )
}


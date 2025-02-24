import React from 'react';
import Header from '../components/Header';
import RightNavBar from '../components/RightNavBar/RightNavBar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data=useLoaderData()
    const news=data.data[0]
    console.log("data",news);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
<main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
<section className='col-span-9'>
    <h1 className='text-2xl'>Dragon News</h1>


    <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news.category_id
}`} className="btn btn-primary">Go Back</Link>
    </div>
  </div>
</div>
     </section>
<aside className='col-span-3'>
    <RightNavBar></RightNavBar>
</aside>
</main>
        </div>
    );
};

export default NewsDetails;
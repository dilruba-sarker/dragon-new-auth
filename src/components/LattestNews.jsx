import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LattestNews = () => {
    return (
        <div className='flex justify-center items-center gap-4'>
            <div className='bg-pink-950 px-3 py-1 text-base-100'>Lattest News</div>
            <Marquee speed={100} pauseOnHover={true} className='bg-green-400 space-x-4 '>
<p><Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nihil eaque omnis ducimus recusandae! </Link></p>
<p><Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nihil eaque omnis ducimus recusandae! </Link></p>
<p><Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nihil eaque omnis ducimus recusandae! </Link></p>

            </Marquee>
        
        </div>
    );
};

export default LattestNews;
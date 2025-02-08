import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={singleNews.author.img}
            alt={singleNews.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{singleNews.author.name}</p>
            <p className="text-sm text-gray-500">{singleNews.author.published_date}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Card Image */}
      <figure>
        <img src={singleNews.thumbnail_url} alt={singleNews.title} className="w-full h-56 object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{singleNews.title}</h2>
        <p className="text-gray-600">
          {singleNews.details.length > 100 ? singleNews.details.slice(0, 100) + "..." : singleNews.details}
        </p>

        {/* Rating & Views */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary">{singleNews.rating.badge}</span>
            <span className="text-sm text-gray-500">{singleNews.rating.number} ⭐⭐⭐⭐⭐</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{singleNews.total_view}</span>
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-4">
          <Link to={`/news/${singleNews._id}`}>
          <button className="btn btn-outline btn-primary w-full">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

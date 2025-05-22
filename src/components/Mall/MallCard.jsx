import React from 'react';
const Mall = ({ mall }) => {
  const {
    mall_name,
    location,
    number_of_stores,
    total_retail_floor_area,
    number_of_floors,
    description,
    source,
    image_url
  } = mall;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
      {image_url && (
        <div className="overflow-hidden mb-4 w-full h-48 rounded-lg">
          <img
            src={image_url}
            alt={`${mall_name}`}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <h2 className="mb-4 text-xl font-semibold text-gray-800">{mall_name}</h2>
      
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <span className="text-xl">📍</span>
          <span className="text-gray-600">
            {`${location.area}, ${location.city}, ${location.state}`}
          </span>
        </div>
        
        <div className="flex gap-2 items-center">
          <span className="text-xl">🏪</span>
          <span className="text-gray-600">{number_of_stores} stores</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-xl">📏</span>
          <span className="text-gray-600">{total_retail_floor_area}</span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-xl">🏢</span>
          <span className="text-gray-600">{number_of_floors} floors</span>
        </div>
        
        <div className="flex gap-2">
          <span className="text-xl">📝</span>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
        
        <div className="flex gap-2 items-center">
          <span className="text-xl">🔗</span>
          <a 
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mall;

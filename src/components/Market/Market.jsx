import React from 'react';
const Market = ({ market }) => {
  const {
    market_name,
    location,
    operating_hours,
    specialties,
    description,
    source
  } = market;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">{market_name}</h2>
      
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <span className="text-xl">📍</span>
          <span className="text-gray-600">
            {`${location.area}, ${location.city}, ${location.state}`}
          </span>
        </div>
        
        <div className="flex gap-2 items-center">
          <span className="text-xl">🕒</span>
          <span className="text-gray-600">{operating_hours}</span>
        </div>
        
        <div className="flex gap-2 items-start">
          <span className="text-xl">✨</span>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
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

      <div className="flex gap-2 items-center">
        {/* <span className="text-xl">🖼️</span> */}
        <img 
          src={market.image}
          alt={market_name}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Market;

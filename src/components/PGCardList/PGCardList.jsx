import React, { useState } from 'react';
import { useSidebar } from '../SidebarContext/SidebarContext';

const PGCard = ({ pg }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="overflow-hidden w-full h-60">
        <img 
          src={pg.image || 'https://placeholder.com/400x300'} 
          alt={pg.pg_name} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">{pg.pg_name}</h2>
        <p className="mb-4 text-gray-600">
          {pg.location.area}, {pg.location.city}
        </p>
        
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-medium text-gray-800">Rent per month:</h3>
          <ul className="space-y-1">
            {Object.entries(pg.rent_per_month).map(([type, price]) => (
              <li key={type} className="text-gray-600">
                {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}: 
                <span className="font-medium">₹{price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-medium text-gray-800">Amenities:</h3>
          <div className="flex flex-wrap gap-2">
            {pg.amenities.map(amenity => (
              <span 
                key={amenity} 
                className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-200">
          <p className="text-gray-600">{pg.contact_info}</p>
          <a 
            href={pg.source_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const PGCardList = ({ pgData }) => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  
  const filteredPGs = pgData.filter(pg => {
    const searchLower = searchTerm.toLowerCase();
    const locationString = `${pg.location.area} ${pg.location.city}`.toLowerCase();
    const matchesSearch = pg.pg_name.toLowerCase().includes(searchLower) || 
                         locationString.includes(searchLower);
    
    // Price filter logic
    const lowestPrice = Math.min(...Object.values(pg.rent_per_month));
    const matchesPrice = (!priceRange.min || lowestPrice >= Number(priceRange.min)) &&
                        (!priceRange.max || lowestPrice <= Number(priceRange.max));
    
    return matchesSearch && matchesPrice;
  });
  
  return (
    <div className={`px-4 py-8 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <div className="flex relative gap-2 justify-end mb-6">
        <input
          type="text"
          placeholder="Search by PG name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={() => setShowPriceFilter(!showPriceFilter)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Filter
        </button>
        
        {showPriceFilter && (
          <div className="absolute right-0 top-12 z-10 p-4 bg-white rounded-lg border border-gray-200 shadow-lg">
            <div className="space-y-3">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Min Price (₹)</label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  className="px-3 py-1 rounded-md border border-gray-300"
                  placeholder="Min price"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Max Price (₹)</label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  className="px-3 py-1 rounded-md border border-gray-300"
                  placeholder="Max price"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-${isCollapsed ? '3' : '2'}`}>
        {filteredPGs.map((pg, index) => (
          <PGCard key={index} pg={pg} />
        ))}
      </div>
    </div>
  );
};

export default PGCardList;
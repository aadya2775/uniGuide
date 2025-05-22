import React, { useState } from 'react';
import { useSidebar } from '../SidebarContext/SidebarContext';

const DharamshalaCard = ({ dharamshala }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="overflow-hidden w-full h-60">
        <img 
          src={dharamshala.contact_info.image || "https://placeholder.com/400x300"}
          alt={dharamshala.name} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">{dharamshala.name}</h2>
        <p className="mb-4 text-gray-600">
          {dharamshala.location.area}, {dharamshala.location.city}, {dharamshala.location.state}
        </p>
        
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-medium text-gray-800">Amenities:</h3>
          <div className="flex flex-wrap gap-2">
            {dharamshala.amenities.map(amenity => (
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
          <p className="text-gray-600">📞 {dharamshala.contact_info.phone}</p>
          <a 
            href={dharamshala.contact_info.website} 
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

const DharamshalaCardList = ({ dharamshalaData }) => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showStateFilter, setShowStateFilter] = useState(false);
  
  const states = [...new Set(dharamshalaData.map(d => d.location.state))];
  
  const filteredDharamshalas = dharamshalaData.filter(dharamshala => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      dharamshala.name.toLowerCase().includes(searchLower) || 
      dharamshala.location.city.toLowerCase().includes(searchLower) ||
      dharamshala.location.area.toLowerCase().includes(searchLower);
    
    const matchesState = !selectedState || dharamshala.location.state === selectedState;
    
    return matchesSearch && matchesState;
  });
  
  return (
    <div className={`px-4 py-8 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <div className="flex relative gap-2 justify-end mb-6">
        <input
          type="text"
          placeholder="Search by name, city, or area..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={() => setShowStateFilter(!showStateFilter)}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Filter
        </button>
        
        {showStateFilter && (
          <div className="absolute right-0 top-12 z-10 p-4 bg-white rounded-lg border border-gray-200 shadow-lg">
            <div className="space-y-3">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-600">Select State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="px-3 py-1 rounded-md border border-gray-300"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {filteredDharamshalas.map((dharamshala, index) => (
          <DharamshalaCard key={index} dharamshala={dharamshala} />
        ))}
      </div>
    </div>
  );
};

export { DharamshalaCardList };
export default DharamshalaCard;
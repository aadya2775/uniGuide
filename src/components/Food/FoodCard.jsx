import React, { useState } from 'react';
import { useSidebar } from '../SidebarContext/SidebarContext';

const FoodCard = ({ city, foods }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">{city}</h2>
        
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-medium text-gray-800">Famous Foods:</h3>
          <div className="flex flex-wrap gap-2">
            {foods.famous_foods.map(food => (
              <span 
                key={food} 
                className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
              >
                {food}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200">
          <h3 className="mb-3 text-lg font-medium text-gray-800">Popular Restaurants:</h3>
          <ul className="space-y-1 list-disc list-inside text-gray-600">
            {foods.popular_restaurants.map(restaurant => (
              <li key={restaurant}>{restaurant}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FoodCardList = ({ foodData }) => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCities = Object.entries(foodData).filter(([city, data]) => {
    const searchLower = searchTerm.toLowerCase();
    return city.toLowerCase().includes(searchLower) ||
           data.famous_foods.some(food => food.toLowerCase().includes(searchLower)) ||
           data.popular_restaurants.some(restaurant => restaurant.toLowerCase().includes(searchLower));
  });
  
  return (
    <div className={`px-4 py-8 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <div className="flex justify-between items-center mt-16 mb-6">
        <h1 className="text-2xl font-bold"></h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search by city, food, or restaurant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 text-gray-400 -translate-y-1/2">
            🔍
          </span>
        </div>
      </div>
      
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {filteredCities.map(([city, foods]) => (
          <FoodCard key={city} city={city} foods={foods} />
        ))}
      </div>
    </div>
  );
};

export { FoodCardList };
export default FoodCard;
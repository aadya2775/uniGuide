import React from 'react';
import { FoodCardList } from './FoodCard';
import foodData from '../../api/food.json';
import { useSidebar } from '../SidebarContext/SidebarContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const FoodList = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-5">
      <div className={`container mx-auto py-0 transition-all duration-300 ${
        isCollapsed 
          ? 'px-4 sm:px-6 md:px-8'
          : 'px-8 sm:px-12 md:px-16'
      }`}>
        <Header />
        {/* <h1 className="px-20 py-6 mb-8 text-3xl font-bold text-center text-gray-900 bg-white rounded-lg shadow-sm">
          Local Food Guide
        </h1> */}
        <FoodCardList foodData={foodData.places} />
      </div>
      <div className='mb-8 ml-60'>
      <Footer />
      </div>
    </div>
  );
};

export default FoodList;
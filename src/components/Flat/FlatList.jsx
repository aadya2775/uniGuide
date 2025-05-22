import React from 'react';
import { FlatCardList } from './FlatCard';
import flatData from '../../api/flat.json';
import { useSidebar } from '../SidebarContext/SidebarContext';

const FlatList = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`container mx-auto py-8 transition-all duration-300 ${
        isCollapsed 
          ? 'px-4 sm:px-6 md:px-8'
          : 'px-8 sm:px-12 md:px-16'
      }`}>
        <h1 className="p-4 mb-8 text-3xl font-bold text-center text-gray-900 bg-white rounded-lg shadow-sm">
          Available Flats
        </h1>
        <FlatCardList flatData={flatData} />
      </div>
    </div>
  );
};

export default FlatList;
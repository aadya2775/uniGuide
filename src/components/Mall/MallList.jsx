import React, { useState, useEffect } from 'react';
import Mall from './MallCard';
import mallData from '../../api/mall.json';
import { useSidebar } from '../SidebarContext/SidebarContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MallList = () => {
  const [malls, setMalls] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    setMalls(mallData);
  }, []);

  const filteredMalls = malls.filter(mall =>
    mall.mall_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mall.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mall.location.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Sidebar collapsed:', isCollapsed);

  return (
    <div className={`p-6 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <Header />
      <div className="flex justify-between items-center mt-16 mb-6">
        <h1 className="text-2xl font-bold">Shopping Malls</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search malls..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 text-gray-400 -translate-y-1/2">
            🔍
          </span>
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${
        isCollapsed ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
      } lg:grid-cols-3`}>
        {filteredMalls.map((mall, index) => (
          <Mall key={index} mall={mall} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MallList;

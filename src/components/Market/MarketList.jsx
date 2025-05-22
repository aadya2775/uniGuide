import React, { useState, useEffect } from 'react';
import Market from './Market';
import marketData from '../../api/market.json';
import { useSidebar } from '../SidebarContext/SidebarContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MarketList = () => {
  const [markets, setMarkets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    setMarkets(marketData);
  }, []);

  const filteredMarkets = markets.filter(market =>
    market.market_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  console.log('Sidebar collapsed:', isCollapsed);

  return (
    <div className={`p-6 ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <Header />
      <div className="flex justify-between items-center mt-16 mb-6">
        <h1 className="text-2xl font-bold">Markets</h1>
        
        {/* <div className="flex space-x-4">
          <button className="px-2 py-2 text-2xl font-bold text-black rounded-lg">Local Market</button>
          <button className="px-2 py-2 text-2xl font-bold text-black rounded-lg">Weekly Market</button>
        </div>
         */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search markets..."
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
        {filteredMarkets.map((market, index) => (
          <Market key={index} market={market} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MarketList;

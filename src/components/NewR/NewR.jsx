import React, { useContext } from 'react';
import { SidebarContext } from '../SidebarContext/SidebarContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

const NewR = () => {
  const { isCollapsed } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleAccommodationClick = (path) => {
    navigate(path);
  };

  return (
    <div className={`p-0 mx-auto ${isCollapsed ? 'ml-20':'ml-64'}`}>
      <div className="flex justify-between items-center mb-6 h-20 bg-gray-900">
        <button 
          className="p-2 ml-8 bg-gray-100 rounded-full"
          onClick={() => navigate('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="absolute left-1/2 text-xl font-bold transform -translate-x-1/2">New Resident</h1>
      </div>

      {/* Search Bar */}
      {/* <div className="mb-6">
        <input
          type="text"
          placeholder="Explore neighborhoods..."
          className="p-3 w-full bg-gray-100 rounded-lg"
        />
      </div> */}

      {/* Neighborhoods */}
      {/* <div className="grid grid-cols-3 gap-4 mb-8">
        {['Neighborhood 1', 'Neighborhood 2', 'Neighborhood 3'].map((item, index) => (
          <div key={index} className="p-4 text-center bg-gray-100 rounded-lg">
            {item}
          </div>
        ))}
      </div> */}

      {/* Accommodations */}
      <div className="mb-8">
        <h2 className="mb-4 ml-2 text-lg font-bold">Accommodations</h2>
        <div className="grid grid-cols-3 gap-4 mr-2 ml-2">
          {[
            { title: 'Flat', icon: '🏢', path: '/flats'},
            { title: 'Apartment', icon: '🏠', path: '/flats' },
            { title: 'Room', icon: '🛏️', path: '/flats'}
          ].map((item, index) => (
            <button
              key={index}
              className="p-8 text-center bg-blue-500 rounded-lg transition-transform duration-300 hover:bg-slate-200 hover:shadow-lg hover:-translate-y-1"
              onClick={() => handleAccommodationClick(item.path)}
            >
              <div className="mb-2 text-3xl">{item.icon}</div>
              <div className="text-lg">{item.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Market Place */}
      {/* <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Market Place</h2>
        <div className="grid grid-cols-3 gap-4">
          {['Market 1', 'Market 2', 'Market 3'].map((item, index) => (
            <div key={index} className="p-8 text-center bg-gray-100 rounded-lg">
              {item}
            </div>
          ))}
        </div>
      </div> */}

      {/* Mall Famous */}
      {/* <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Mall Famous</h2>
        <div className="grid grid-cols-3 gap-4">
          {['Mall 1', 'Mall 2', 'Mall 3'].map((item, index) => (
            <div key={index} className="p-8 text-center bg-gray-100 rounded-lg">
              {item}
            </div>
          ))}
        </div>
      </div> */}

      {/* Weekly Markets Calendar */}
      {/* <div>
        <h2 className="mb-4 text-lg font-semibold">Weekly Markets (Calendar)</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { date: 'Jan 15, 2025', event: 'Market Day' },
            { date: 'Jan 22, 2025', event: 'Market Day' },
            { date: 'Jan 29, 2025', event: 'Market Day' }
          ].map((item, index) => (
            <div key={index} className="p-8 text-center bg-gray-200 rounded-lg">
              <div className="font-medium">{item.date}</div>
              <div className="text-gray-600">{item.event}</div>
            </div>
          ))}
        </div>
      </div> */}
      <div className='flex flex-col mb-8 min-h-screen'>
        
      <Footer />
      </div>
    </div>
  );
};

export default NewR;

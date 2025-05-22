import React, { useContext } from 'react';
import { SidebarContext } from '../SidebarContext/SidebarContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
// import Header from '../Header/Header';
// import { userTypes } from '../FeaturedContent/userTypes';

const Traveller = () => {
  const { isCollapsed } = useContext(SidebarContext);
  const navigate = useNavigate();
  const guides = [
    { name: 'John Doe', type: 'Local Expert', rating: 4.9 },
    { name: 'Sarah Smith', type: 'City Guide', rating: 4.8 },
    { name: 'Mike Johnson', type: 'Adventure Guide', rating: 4.7 }
  ];

  const accommodations = [
    { type: 'Hotel', icon: '🏨', path: '/hotels' },
    { type: 'Hostel', icon: '🛏️', path: '/hostels' },
    { type: 'Dharamshala', icon: '🏠', path: '/dharamshala-list' },
  ];
  // const markets = [
  //   { name: 'Local Market 1', description: 'Traditional goods & crafts' },
  //   { name: 'Local Market 2', description: 'Street food & spices' }
  // ];

  // const expenseCategories = [
  //   { name: 'Transport', icon: '🚌' },
  //   { name: 'Accommodation', icon: '🏨' },
  //   { name: 'Food', icon: '🍽️' },
  //   { name: 'Total', icon: '📊' }
  // ];
  
  const handleHostelClick = () => {
    console.log('Hostel button clicked');
    navigate('/hostels');
  };
  
  const handleHotelClick = () => {
    navigate('/hotels');
  };
  const handleDharamshalaClick = () => {
    navigate('/dharamshala-list');
  };

  return (
    <div className={`p-0 ${isCollapsed ? 'ml-20':'ml-64'} transition-all duration-300`}>
      <div className="mx-auto max-w-7xl">
        <header className="flex sticky top-0 z-50 justify-between items-center mb-6 h-20 bg-gray-900">
        <button 
          className="p-2 ml-8 bg-gray-100 rounded-full"
          onClick={() => navigate('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
          <h1 className="flex-1 text-xl font-bold text-center text-white">Traveller</h1>
        </header>

        {/* Search Bar */}
        {/* <div className="mb-8">
          <input
            type="text"
            placeholder="Find a local guide..."
            className="p-3 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* Guides Section */}
        <section className="mb-8">
          <div className="grid grid-cols-3 gap-4 mr-2 ml-2">
            {guides.map((guide, index) => (
              <div key={index} className="p-4 text-center rounded-lg border border-gray-200">
                <div className="mx-auto mb-3 w-16 h-16 bg-gray-200 rounded-full"></div>
                <h3 className="font-medium">{guide.name}</h3>
                <p className="text-sm text-gray-600">{guide.type} • {guide.rating} ⭐</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="mb-8">
          <h2 className="mb-4 ml-2 text-lg font-bold">Accommodations</h2>
          <div className="grid grid-cols-3 gap-5 mr-2 ml-2">
            {accommodations.map((accommodation, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-9 w-full bg-blue-500 rounded-lg shadow-sm transition-colors hover:bg-gray-50"
                onClick={
                  accommodation.type === 'Hostel' 
                    ? handleHostelClick 
                    : accommodation.type === 'Hotel'
                    ? handleHotelClick
                    : accommodation.type === 'Dharamshala' 
                      ? handleDharamshalaClick 
                      : undefined
                }
              >
                <span className="mb-2 text-3xl">{accommodation.icon}</span>
                <span className="font-medium">{accommodation.type}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Marketplace Section */}
        {/* <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Market Place</h2>
          <div className="grid grid-cols-2 gap-4">
            {markets.map((market, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                <div className="flex justify-center items-center h-48 bg-gray-200">
                  Market Image
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-medium">{market.name}</h3>
                  <p className="text-sm text-gray-600">{market.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Map Section */}
        <section className="mb-8">
          <h2 className="mb-4 ml-2 text-lg font-bold">Explorer Site (Map View)</h2>
          <div className="h-[600px] mr-2 ml-2 rounded-lg overflow-hidden">
            <Map />
          </div>
        </section>

        {/* Expenses Calculator Section */}
        {/* <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Travel Expenses Calculator</h2>
          <div className="grid grid-cols-4 gap-4">
            {expenseCategories.map((category, index) => (
              <div key={index} className="p-4 text-center rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
                <span className="block mb-2 text-2xl">{category.icon}</span>
                <p className="font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Traveller;

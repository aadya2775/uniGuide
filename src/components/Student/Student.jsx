import React, { useContext } from 'react';
import { SidebarContext } from '../SidebarContext/SidebarContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Campuslife } from '../FeaturedContent/Campuslife';
// import Header from '../Header/Header';

const Student = () => {
  const { isCollapsed } = useContext(SidebarContext);
  const navigate = useNavigate();

  const students = [
    { name: 'Sarah K.', role: 'Senior' },
    { name: 'Mike R.', role: 'Senior' },
    { name: 'Alex T.', role: 'Senior' }
  ];

  const accommodations = [
    { type: 'PG', icon: '🏢', bgColor: 'bg-blue-500' },
    { type: 'Hostel', icon: '🏠', bgColor: 'bg-blue-500' },
    { type: 'Flat', icon: '🏡', bgColor: 'bg-blue-500' },
    { type: 'Hotel', icon: '🏨', bgColor: 'bg-blue-500' }
  ];

  const foodSpots = [
    { name: 'Campus Cafe', description: 'Popular for breakfast' },
    { name: 'Study Brew', description: 'Best coffee spot' }
  ];

  const events = [
    { 
      date: { month: 'MAR', day: '15' },
      year: '2025',
      name: 'Tech Fest 2025',
      description: 'Annual technology festival'
    },
    {
      date: { month: 'MAR', day: '20' },
      year: '2025',
      name: 'Cultural Night',
      description: 'Evening of performances'
    }
  ];

  const handlePGClick = () => {
    navigate('/pg-listings');
  };

  const handleHostelClick = () => {
    console.log('Hostel button clicked');
    navigate('/hostels');
  };

  const handleFlatClick = () => {
    navigate('/flats');
  };

  const handleHotelClick = () => {
    navigate('/hotels');
  };


  return (
    <div className={`p-0 transition-all duration-300 ${
      isCollapsed ? 'ml-20' : 'ml-64'
    }`}>
      <header className="flex-grow p-2 mb-2 w-full h-20 bg-gray-900">
        <div className="flex justify-between items-center mt-1 mb-1">
          <button 
            className="p-2 ml-8 bg-gray-100 rounded-full"
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="absolute left-1/2 p-2 text-xl font-bold text-white rounded shadow-lg transform -translate-x-1/2">Student</h1>
          <div className="w-8"></div> {/* Spacer to balance the button */}
          <div className="relative">
            {/* <input 
              type="text" 
              placeholder="Find a senior..." 
              className="p-2 pl-8 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            <svg className="absolute left-2 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>
      

      <section className="mb-8 ml-2">
        <div className="flex space-x-4">
          {students.map((student, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={`https://c8.alamy.com/comp/JC2CA3/indian-college-friends-student-studying-laptop-library-JC2CA3.jpg${student.name.replace(/\s+/g, '-').toLowerCase()}.jpg`} alt={student.name} className="mb-2 w-16 h-16 rounded-full" />
              <p className="text-sm font-medium">{student.name}</p>
              <p className="text-xs text-gray-500">{student.role}</p>
            </div>
          ))}
        </div>
      </section>
       <section className="mb-8">
        <h2 className="mb-4 ml-2 text-lg font-semibold">Accommodation Options</h2>
        <div className="grid grid-cols-4 gap-4 mr-2 ml-2">
          {accommodations.map((accommodation, index) => (
            <button
              key={index}
              className={`flex flex-col items-center p-12 w-full shadow-sm transition-colors rounded-lg hover:bg-slate-200 ${accommodation.bgColor}`}
              onClick={
                accommodation.type === 'PG' 
                  ? handlePGClick 
                  : accommodation.type === 'Hostel' 
                    ? handleHostelClick 
                    : accommodation.type === 'Flat'
                      ? handleFlatClick
                      : accommodation.type === 'Hotel'
                        ? handleHotelClick
                        : undefined
              }
            >
              <span className="mb-2 text-6xl">{accommodation.icon}</span>
              <span className="font-medium">{accommodation.type}</span>
            </button>
          ))}
        </div>
      </section>

          {/* food section */}
      {/* <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Food Famous</h2>
        <div className="grid grid-cols-2 gap-4">
          {foodSpots.map((spot, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-sm">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="mb-1 font-medium">{spot.name}</h3>
                <p className="text-sm text-gray-600">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Campus Life</h2>
        <div className="grid grid-cols-2 gap-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start p-4 space-x-4 bg-white rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-600">{event.date.month}</span>
                <span className="text-xl font-bold">{event.date.day}</span>
                <span className="text-xs text-gray-500">{event.year}</span>
              </div>
              <div>
                <h3 className="mb-1 font-medium">{event.name}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
       <section className="mb-8">
       <h2 className="mb-4 ml-2 text-lg font-semibold">Campus Life</h2>
      <div className="grid grid-cols-1 gap-4 mr-2 ml-2 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Campuslife.map((content, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-36 md:h-48">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="mb-2 text-sm font-medium md:text-base">{content.title}</h3>
                  <p className="text-xs text-gray-600 md:text-sm">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
          </section>

     

      <section>
        <h2 className="mb-4 ml-2 text-lg font-semibold">Personalized Roadmap</h2>
        <div className="ml-2 space-y-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600 rounded form-checkbox" />
            <span className="text-gray-700">Complete campus tour</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-blue-600 rounded form-checkbox" />
            <span className="text-gray-700">Meet academic advisor</span>
          </label>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Student;

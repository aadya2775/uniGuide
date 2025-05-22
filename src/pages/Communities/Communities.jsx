import React, { useState } from 'react';
import { MdSearch, MdNotifications, MdPerson, MdLocationOn, MdEvent, MdGroup } from 'react-icons/md';
import { useSidebar } from '../../components/SidebarContext/SidebarContext';
import Footer from '../../components/Footer/Footer';

const Communities = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { isCollapsed } = useSidebar();

  const cities = [
    { id: 'noida', name: 'Noida', memberCount: 1200 },
    { id: 'delhi', name: 'Delhi', memberCount: 2500 },
    { id: 'greater-noida', name: 'Greater Noida', memberCount: 800 }
  ];

  const trendingTopics = [
    { id: 'accommodation', title: 'Accommodation', icon: '🏠' },
    { id: 'food', title: 'Food', icon: '🍽️' },
    { id: 'safety', title: 'Safety', icon: '🔐' },
    { id: 'travel', title: 'Travel', icon: '🛣️' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Meetup',
      date: '2024-04-15',
      location: 'Sector 62, Noida',
      attendees: 45
    },
    // Add more events as needed
  ];

  // Filter cities based on search query
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'} px-4 py-8`}>
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Community Hub</h1>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search communities..."
              className="py-2 pr-4 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MdSearch className="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-8 mb-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
        <h2 className="mb-4 text-4xl font-bold">Connect, Explore, Belong – Join the Community!</h2>
        <button className="px-6 py-2 font-semibold text-cyan-600 bg-white rounded-lg hover:bg-gray-100">
          Join Now
        </button>
      </div>

      {/* City Groups */}
      <section className="mb-8">
        <h3 className="mb-4 text-2xl font-semibold">City Groups</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredCities.map(city => (
            <div key={city.id} className="p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                  <MdLocationOn className="text-2xl text-cyan-500" />
                  <h4 className="text-xl font-semibold">{city.name}</h4>
                </div>
                <span className="text-gray-500">{city.memberCount} members</span>
              </div>
              <button className="py-2 w-full text-white bg-cyan-500 rounded-lg hover:bg-cyan-600">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section className="mb-8">
        <h3 className="mb-4 text-2xl font-semibold">Trending Topics</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trendingTopics.map(topic => (
            <div key={topic.id} className="p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-2xl">{topic.icon}</span>
                <h4 className="font-semibold">{topic.title}</h4>
              </div>
              <button className="py-2 w-full text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                View Discussions
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h3 className="mb-4 text-2xl font-semibold">Upcoming Events</h3>
        <div className="grid grid-cols-1 gap-4 mb-2 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map(event => (
            <div key={event.id} className="p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <div className="flex gap-2 items-center mb-4">
                <MdEvent className="text-2xl text-cyan-500" />
                <h4 className="font-semibold">{event.title}</h4>
              </div>
              <div className="mb-4 text-gray-600">
                <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                <p>📍 {event.location}</p>
                <p>👥 {event.attendees} attending</p>
              </div>
              <button className="py-2 w-full text-white bg-cyan-500 rounded-lg hover:bg-cyan-600">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Communities; 
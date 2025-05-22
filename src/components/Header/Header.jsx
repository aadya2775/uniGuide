import React, { useState } from 'react';
import {MdMenu, MdLogin, MdPersonAdd, MdLogout } from 'react-icons/md';
import { useAuth0 } from "@auth0/auth0-react";
import { useSidebar } from '../SidebarContext/SidebarContext';
import { userTypes } from '../FeaturedContent/userTypes';

const Header = ({ navigate }) => {
  const { isCollapsed } = useSidebar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={`
      transition-all duration-300
      ${isCollapsed ? 'ml-16' : 'ml-0 lg:ml-64'}
     bg-white flex flex-col
    `}>
      <nav className={`
        flex fixed top-0 right-0 z-20
        ${isCollapsed ? 'left-16' : 'left-0 lg:left-64'}
        justify-between items-center px-6 py-4 h-20 
        bg-gray-900 shadow-sm transition-all duration-300 flex-wrap
      `}>
        <div className="flex flex-wrap items-center space-x-6">
          <div className="flex items-center space-x-2">
            {/* If need Home Button */}
          </div>
          {/* User Type Cards in Nav */}
          <div className="flex overflow-x-auto py-2 space-x-4 hide-scrollbar sm:hidden md:flex">
            {userTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1 space-x-2 text-sm whitespace-nowrap bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
                onClick={() => navigate(type.path)}
              >
                {React.cloneElement(type.icon, { className: 'text-xl' })}
                <span>{type.title}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* User Profile Menu */}
        <div className="flex items-center ml-auto space-x-4">
          <div className="relative">
            <button 
              className="flex items-center p-2 space-x-3 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img 
                src={user?.picture} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden text-white md:block">{user?.name}</span>
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 py-2 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <div className="px-4 py-2 border-b">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 space-x-2 w-full text-left hover:bg-gray-100"
                >
                  <MdLogout className="text-xl" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

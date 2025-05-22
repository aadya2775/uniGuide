import React from 'react';
import { useSidebar } from '../../components/SidebarContext/SidebarContext';

const Footer = () => {
  const { isCollapsed } = useSidebar();

  return (
    <footer className={`${isCollapsed ? 'ml-16' : 'ml-64'} mt-auto py-4 sm:py-6 bg-gray-50 transition-all duration-300`}>
      <div className="container px-4 mx-auto sm:px-6">
        <div className="flex flex-col justify-between items-center space-y-4 sm:space-y-0 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-600 sm:text-sm">
              © {new Date().getFullYear()} uniGuide. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
            <a href="#" className="text-xs text-center text-gray-600 sm:text-sm hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-xs text-center text-gray-600 sm:text-sm hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-xs text-center text-gray-600 sm:text-sm hover:text-gray-900">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
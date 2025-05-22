import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdDashboard, 
  MdPerson, 
  MdStorefront,
  MdLocalMall,
  MdLocationOn,
  MdNotifications,
  MdLanguage,
  MdFastfood,
  MdTrackChanges
} from 'react-icons/md';
import { useSidebar } from '../SidebarContext/SidebarContext';

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  
  const menuItems = [
    { title: 'Dashboard', icon: <MdDashboard />, path: '/' },
    { title: 'User Profile', icon: <MdPerson />, path: '/profile' },
    { title: 'Market Place', icon: <MdStorefront />, path: '/market' },
    { title: 'Mall', icon: <MdLocalMall />, path: '/mall' },
    { title: 'Famous Food', icon: <MdFastfood />, path: 'famousfood'},
    { title: 'Maps', icon: <MdLocationOn />, path: '/maps' },
    { title: 'Community', icon: <MdLanguage />, path: '/communities' },
    { title: 'Local Guide', icon: <MdDashboard />, path: 'LocalGuide'},
    { title: 'Notifications', icon: <MdNotifications />, path: '/notifications' },
    { title: 'Track Application', icon: <MdTrackChanges />, path: '/track' },
  ];

  return (
    <div className={`fixed h-full ${isCollapsed ? 'w-16' : 'w-64'} bg-indigo-950 text-white shadow-lg transition-all duration-300`}>
      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-3 -right-3 p-2 text-gray-300 bg-gray-900 rounded-full border border-gray-700 hover:text-white"
      >
        {isCollapsed ? '→' : '←'}
      </button>

      {/* Logo Section */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-6 border-b border-gray-700 bg-gray-900`}>
        <img src="logo.png" alt="Logo" className="w-8 h-8 rounded-2xl" />
        {!isCollapsed && <span className="text-lg font-medium">UniGuide</span>}
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4 px-6'} py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200`}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>

      {/* Upgrade Button */}
      {/* <div className="absolute bottom-8 px-6 w-full">
        <Link
          to="/pro"
          className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200`}
        >
          <span className="text-xl">⭐</span>
          {!isCollapsed && <span>Upgrade to PRO</span>}
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;

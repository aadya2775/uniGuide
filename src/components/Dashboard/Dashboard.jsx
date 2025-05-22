import React from 'react';
import { MdArrowBack, MdArrowForward, MdMenu, MdLogin, MdPersonAdd } from 'react-icons/md';
import { useSidebar } from '../SidebarContext/SidebarContext';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { featuredContent } from '../FeaturedContent/featuredContent';
import { userTypes } from '../FeaturedContent/userTypes';
import { heroImages } from '../FeaturedContent/HeroImage';
import Header from '../Header/Header';

const Dashboard = () => {
  const { isCollapsed } = useSidebar();
  const [currentHeroIndex, setCurrentHeroIndex] = React.useState(0);
  const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextHeroImage();
    }, 4000); // Auto-scroll every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Empty dependency array means this effect runs once on mount

  const nextHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  // Add pause functionality when hovering over the hero section
  const [isHovered, setIsHovered] = React.useState(false);
  React.useEffect(() => {
    if (isHovered) return; // Don't start timer if section is hovered
    const timer = setInterval(() => {
      nextHeroImage();
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, currentHeroIndex]);

  return (
    <div className={`
      transition-all duration-300
      ${isCollapsed ? 'ml-16' : 'ml-0 lg:ml-64'}
      min-h-screen bg-white flex flex-col
    `}>
      <Header userTypes={userTypes} navigate={navigate} />
      
      {/* Main content wrapper */}
      <main className="relative flex-grow pt-20">
        {/* Hero Section */}
        <div 
          className="relative pt-4 h-[32rem] text-white bg-gray-900 md:h-[32rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Hero Image */}
          <div className="overflow-hidden absolute inset-0">
            <img
              src={heroImages[currentHeroIndex].image}
              alt={heroImages[currentHeroIndex].title}
              className="object-cover w-full h-full transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevHeroImage}
            className="absolute left-4 top-1/2 z-10 p-2 rounded-full transition-colors -translate-y-1/2 bg-black/50 hover:bg-black/70"
          >
            <MdArrowBack className="text-2xl" />
          </button>
          <button
            onClick={nextHeroImage}
            className="absolute right-4 top-1/2 z-10 p-2 rounded-full transition-colors -translate-y-1/2 bg-black/50 hover:bg-black/70"
          >
            <MdArrowForward className="text-2xl" />
          </button>

          {/* Content */}
          <div className="flex absolute inset-0 flex-col justify-center items-center px-4 text-center">
            <h1 className="mb-6 text-2xl font-bold md:text-4xl">{heroImages[currentHeroIndex].title}</h1>
            <button className="px-4 py-2 font-medium text-gray-900 bg-white rounded-lg transition-colors md:px-6 hover:bg-gray-100">
              {heroImages[currentHeroIndex].buttonText}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex absolute bottom-4 left-1/2 space-x-2 -translate-x-1/2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentHeroIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Featured Content Section */}
        <div className="px-4 pb-3 mx-auto mt-8 max-w-7xl md:px-6 md:mt-16">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-lg font-semibold md:text-xl">Featured Content</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <MdArrowBack className="text-xl" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <MdArrowForward className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {featuredContent.map((content, index) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import { SidebarProvider } from './components/SidebarContext/SidebarContext';
import Traveller from './components/Traveller/Traveller';
import Student from './components/Student/Student';
import NewR from './components/NewR/NewR';
import PGListPage from './components/PGCardList/PGListPage';
import HostelList from './components/Hostel/HostelList';
import FlatList from './components/Flat/FlatList';
import HotelList from './components/Hotel/HotelList';
import DharamshalaList from './components/Dharamshala/DharamshalaList';
import MarketList from './components/Market/MarketList';
import MallList from './components/Mall/MallList';
import Map from './components/Map/Map';
import Communities from './pages/Communities/Communities';
import LocalGuide from './components/LocalGuide/LocalGuide';
import FoodList from './components/Food/FoodList';
import Notification from './components/Notification/Notification';
import Profile from './pages/profile/Profile';
import Track from './pages/Track/Track';

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="w-full min-h-screen">
      {!isAuthenticated ? (
        <div className="flex justify-center items-center min-h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://asset.gecdesigns.com/img/background-templates/glowing-purple-bubble-ring-background-design-sr06012404-1704697997104-cover.webp')",
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds a dark overlay
            backgroundBlend: 'overlay'
          }}>
          <div className="flex flex-col gap-4 items-center">
            <h1 className='text-4xl font-bold text-white'>Welcome to UniGuide !</h1>
            <button
              onClick={() => loginWithRedirect()}
              className="px-8 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <SidebarProvider>
          <Router>
            <div className="app">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/student" element={<Student />} />
                <Route path="/traveller" element={<Traveller />} />
                <Route path="/new-resident" element={<NewR />} />
                <Route path="/pg-listings" element={<PGListPage />} />
                <Route path="/hostels" element={<HostelList />} />
                <Route path="/flats" element={<FlatList />} />
                <Route path="/hotels" element={<HotelList />} />
                <Route path="/dharamshalas" element={<DharamshalaList />} />
                <Route path="/dharamshala-list" element={<DharamshalaList />} />
                <Route path="/market" element={<MarketList />} />
                <Route path='/mall' element={<MallList />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/maps" element={<Map />} />
                <Route path="/LocalGuide" element={<LocalGuide />} />
                <Route path="/famousfood" element={<FoodList />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/track" element={<Track />} />
              </Routes>
            </div>
          </Router>
        </SidebarProvider>
      )}
    </div>
  );
}

export default App;
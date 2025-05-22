import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const navigate = useNavigate();
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [mapData, setMapData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mapRef, setMapRef] = useState(null);
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 48.8719556,
    lng: 2.3415407
  };

  useEffect(() => {
    const fetchMapData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'maps-data.p.rapidapi.com',
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY
        }
      };

      try {
        const response = await fetch(
          `https://maps-data.p.rapidapi.com/whatishere.php?lat=${center.lat}&lng=${center.lng}&lang=en&country=us`,
          options
        );
        const data = await response.json();
        setMapData(data.data || []);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchMapData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setSearchResults(data);
      
      if (data.length > 0) {
        const firstResult = data[0];
        const lat = parseFloat(firstResult.lat);
        const lon = parseFloat(firstResult.lon);
        
        setMapData([...mapData, {
          lat: lat,
          lon: lon,
          name: firstResult.display_name,
          type: 'Search Result'
        }]);

        if (mapRef) {
          mapRef.setView([lat, lon], 13);
        }
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Back button */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-4 left-4 z-[1000] p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <IoArrowBack size={24} className="text-gray-700" />
      </button>

      {/* Enhanced search bar */}
      <div className="absolute top-4 left-16 z-[1000] w-72">
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location..."
              className="w-full pl-4 pr-10 py-2.5 rounded-full shadow-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       bg-white/90 backdrop-blur-sm"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 p-2 rounded-full transition-colors -translate-y-1/2 hover:bg-gray-100"
            >
              <svg 
                className="w-5 h-5 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      
      <div style={{ height: "100vh", width: "100%" }}>
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={13}
          style={mapContainerStyle}
          ref={setMapRef}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            maxZoom={19}
          />
          
          {mapData.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lon]}
              eventHandlers={{
                click: () => setSelectedMarket(location),
              }}
            >
              {selectedMarket === location && (
                <Popup onClose={() => setSelectedMarket(null)}>
                  <div className="p-2">
                    <h3 className="font-bold">{location.name}</h3>
                    <p className="text-sm">{location.type}</p>
                    <button
                      onClick={() => navigate(`/market/${location.id}`)}
                      className="px-4 py-2 mt-3 w-full text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map; 
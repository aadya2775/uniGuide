import React, { useState } from 'react';
import { useSidebar } from '../../components/SidebarContext/SidebarContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Track() {
  const { isCollapsed } = useSidebar();
  const [trackingId, setTrackingId] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // TODO: Implement actual API call to check status
    // Mock status for demonstration
    setApplicationStatus({
      status: 'pending',
      submittedAt: new Date().toLocaleDateString(),
      details: 'Your application is being reviewed'
    });
  };

  return (
    <div className={`p-6 bg-white rounded-lg shadow-md ${isCollapsed ? 'ml-20' : 'ml-64'} transition-all duration-300`}>
      <Header />
      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="mb-8 text-2xl font-bold text-center text-blue-600">Track Your Application</h2>
        
        <form onSubmit={handleTrack} className="mb-8">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Application ID</label>
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="p-2 w-full rounded border border-gray-300"
              placeholder="Enter your tracking ID"
              required
            />
          </div>
          <button 
            type="submit"
            className="p-2 w-full text-white bg-blue-500 rounded transition duration-200 hover:bg-blue-600"
          >
            Track Application
          </button>
        </form>

        {applicationStatus && (
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h3 className="mb-2 font-semibold">Application Status</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Status:</span> {applicationStatus.status}</p>
              <p><span className="font-medium">Submitted:</span> {applicationStatus.submittedAt}</p>
              <p><span className="font-medium">Details:</span> {applicationStatus.details}</p>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col mb-8 min-h-screen'>
        
      <Footer />
      </div>
    </div>
  );
}

export default Track;
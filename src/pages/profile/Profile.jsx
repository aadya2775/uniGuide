import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useSidebar } from '../../components/SidebarContext/SidebarContext';

function Profile() {
  const { user, isLoading } = useAuth0();
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    picture: ''
  });
  const { isCollapsed } = useSidebar();

  React.useEffect(() => {
    if (user) {
      setUserDetails({
        name: user.name,
        email: user.email,
        picture: user.picture
      });
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col mb-4 ml-60 min-h-screen">
        <Header />
        <main className={`p-6 mx-auto transition-all duration-300 flex-grow ${
          isCollapsed ? 'max-w-6xl' : 'max-w-4xl'
        } profile-content`}>
            <div className="p-6 mt-40 bg-white rounded-lg shadow-lg">
                <div className="flex gap-6 items-center mb-6">
                    <img 
                        src={userDetails.picture} 
                        alt="Profile" 
                        className="w-24 h-24 rounded-full"
                    />
                    <div>
                        <h1 className="mb-2 text-3xl font-bold">Profile</h1>
                        <button 
                            onClick={() => setIsEditing(!isEditing)}
                            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        >
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 font-bold text-gray-700">Name</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                                className="p-2 w-full rounded border"
                            />
                        ) : (
                            <p className="text-gray-600">{userDetails.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-bold text-gray-700">Email</label>
                        <p className="text-gray-600">{userDetails.email}</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Profile
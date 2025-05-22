import React from 'react'
import Header from '../Header/Header'   
import Footer from '../Footer/Footer'
function Notification() {
  return (
    <div className="flex flex-col mb-4 ml-60 min-h-screen notification-container">
      <Header />
      <main className="flex-grow notification-content">
        {/* Add your notification content here */}
        <h1 className='mt-20 h-20 text-2xl font-bold text-center text-black'>No Notifications</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Notification
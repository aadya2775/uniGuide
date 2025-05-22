import React, { useState } from 'react';
import { useSidebar } from '../SidebarContext/SidebarContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LocalGuide = () => {
  const { isCollapsed } = useSidebar();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'traveler', // default type
    message: ''
  });

  const [emailConfirm, setEmailConfirm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailConfirmChange = (e) => {
    setEmailConfirm(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const isEmailMatching = formData.email === emailConfirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a unique tracking ID with 4 digits
    const randomNum = Math.floor(1000 + Math.random() * 9000); // generates number between 1000-9999
    const trackingId = `APP-${randomNum}`;
    
    // Combine all form data
    const submissionData = {
      ...formData,
      phoneNumber,
      trackingId,
      submissionDate: new Date().toISOString(),
      status: 'pending'
    };

    // TODO: Send to backend API
    console.log('Form submitted:', submissionData);

    // Show tracking ID to user
    alert(`Your application has been submitted!\nTracking ID: ${trackingId}\nUse this ID to track your application status.`);
  };

  return (
    <div className={`p-6 bg-white rounded-lg shadow-md ${isCollapsed ? 'ml-20':'ml-64'} transition-all duration-300`}>
      <Header />
      <h2 className="mt-16 mb-4 text-2xl font-bold text-center text-blue-600">Hire a Local Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 w-full rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 w-full rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Confirmation</label>
          <input
            type="email"
            name="emailConfirm"
            value={emailConfirm}
            onChange={handleEmailConfirmChange}
            required
            className={`p-2 w-full rounded border ${isEmailMatching ? 'border-gray-300' : 'border-red-500'} transition duration-200`}
          />
          {!isEmailMatching && <p className="text-sm text-red-500">Emails do not match.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
            className="p-2 w-full rounded border border-gray-300"
            placeholder="e.g., 123-456-7890"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">User Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="p-2 w-full rounded border border-gray-300"
          >
            <option value="traveler">Traveler</option>
            <option value="student">Student</option>
            <option value="new resident">New Resident</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 w-full rounded border border-gray-300"
          />
        </div>
        <button type="submit" className="p-2 text-white bg-blue-500 rounded transition duration-200 hover:bg-blue-600">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default LocalGuide; 
// ContactPage.js

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the form data to the server using fetch or axios
    fetch('http://localhost:8074/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  };

  return (
    <div className='bg-house bg-cover bg-center h-screen relative flex justify-center items-center'>
      <div className="container mx-auto mt-10">
        <h1 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                <input type="text" id="name" className="w-full border-gray-300 rounded-lg px-4 py-2" onChange={handleChange} value={formData.name} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                <input type="email" id="email" className="w-full border-gray-300 rounded-lg px-4 py-2" onChange={handleChange} value={formData.email} />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full border-gray-300 rounded-lg px-4 py-2" onChange={handleChange} value={formData.message}></textarea>
              </div>
              <button type="submit" className="bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg px-6 py-2">Submit</button>
            </form>
          </div>
          <div className="mb-8 md:mb-0 lg:mb-0" style={{ textAlign: 'right' }}>
            <h2 className='font-primary text-2xl md:text-3xl lg:text-4xl mb-4 font-bold'>Private Chalet Information</h2>
            <p className='font-primary text-xl md:text-2xl lg:text-3xl mb-4'>Address: Strada Bisercii 195, Moieciu de jos, Brasov, Romania</p>
            <p className='font-primary text-xl md:text-2xl lg:text-3xl mb-4'>Phone: 0745327654</p>
            <p className='font-primary text-xl md:text-2xl lg:text-3xl mb-4'>Email: privatechaletro@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

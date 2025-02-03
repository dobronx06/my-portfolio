import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed left-1/2 top-20 -translate-x-1/2 w-full max-w-xl px-4 z-50">
      {/* Header Card */}
      <div className="relative bg-white/70 rounded-lg shadow-md mx-4 mb-0 overflow-hidden w-4/5 max-w-md h-12 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] hover:w-full hover:max-w-xl z-[51]">
        <div className="p-2 font-sans">
          <h2 className="text-gray-800 text-xl font-medium">Contact Us</h2>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="relative bg-white/40 backdrop-blur-sm rounded-lg shadow-md mx-4 mt-3 overflow-hidden w-full min-h-[400px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-transparent hover:border-white z-[50]">
        <form onSubmit={handleSubmit} className="p-6 font-sans space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
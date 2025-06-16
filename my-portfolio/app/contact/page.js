"use client";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

   
    try {
      const response = await fetch('http://localhost:8000/api/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (data.success) {
        setFeedback('Message sent successfully!');
        
      } else {
        setFeedback(' Something went wrong.');
      }
    } catch (error) {
      setFeedback(' Server error. Please try again.');
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12">Get in Touch</h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">Contact Information</h2>
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                <p className="text-sm sm:text-base text-gray-600">sreyajayan35@gmail.com</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Location</h3>
                <p className="text-sm sm:text-base text-gray-600">kannur, kerala</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                    Facebook
                  </a>
                  <a href="https://github.com/sreya-jayan" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                    GitHub
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">Send a Message</h2>
            <form  onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              {feedback && <p className="text-sm font-medium">{feedback}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default Contact;
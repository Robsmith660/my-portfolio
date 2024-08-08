import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_17jdc2l';
    const templateID = 'template_s9cods2';
    const userID = 'iPWYWPbKHvAv-dLUw';

    const emailData = {
      to_name: 'Robert Smith',
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, emailData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-grid-pattern text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-2/3 max-w-3xl mx-auto mb-8 md:mb-0">
            <div className="bg-slate-600 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform">
              <h2 className="text-4xl font-extrabold mb-6 text-white text-center">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">Name:</label>
                  <input 
                    type="text" 
                    id="from_name" 
                    name="from_name" 
                    value={formData.from_name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">Email:</label>
                  <input 
                    type="email" 
                    id="from_email" 
                    name="from_email" 
                    value={formData.from_email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    rows="4"
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white transition-colors duration-300 hover:from-red-700 hover:to-red-900"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

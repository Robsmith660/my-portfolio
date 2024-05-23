// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_lbevjg6', 'template_vy3sbxn', event.target, 'mc5Q-casFpmnu8SuB')
      .then((result) => {
        setFormStatus('Form submission successful!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setFormStatus('Form submission failed.');
        console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 bg-grid-pattern text-white">      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 block text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="font-bold block text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="font-bold block text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 font-bold block text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg">Send</button>
          {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

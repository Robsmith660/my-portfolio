import React, { useState } from 'react';

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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormStatus('Form submission successful!'))
      .catch((error) => setFormStatus('Form submission failed.'));
  };

  return (
    <section id="contact" className="py-20 bg-grid-pattern text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 block text-white">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Send
          </button>
          {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

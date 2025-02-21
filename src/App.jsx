
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simple bot response logic
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: "Thank you for reaching out! We'll get back to you soon." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-yellow-500 text-white px-4 py-2 flex justify-between items-center">
            <span>Chat with us</span>
            <button onClick={toggleChat} className="text-xl">&times;</button>
          </div>
          <div className="px-4 py-2 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                <span
                  className={`inline-block px-3 py-1 rounded-full ${
                    msg.sender === 'bot' ? 'bg-gray-200' : 'bg-yellow-500 text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l focus:outline-none"
              placeholder="Type your message..."
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            />
            <button
              onClick={handleSend}
              className="bg-yellow-500 text-white px-4 py-2 rounded-r hover:bg-yellow-400"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-400 focus:outline-none"
      >
        {isOpen ? 'Close Chat' : 'Chat'}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black bg-opacity-80">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-2xl font-serif cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            La Cucina
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-yellow-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b" 
            alt="Italian Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            Experience Authentic Italian Cuisine
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Where tradition meets modern elegance in Columbus
          </motion.p>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Reserve a Table
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2010, La Cucina brings the heart of Italy to Columbus, Ohio. Our passionate team, led by Chef Marco Rossi, creates authentic Italian dishes using traditional recipes and the finest ingredients.
              </p>
              <p className="text-gray-600">
                Every dish tells a story of our Italian heritage, crafted with love and served in an atmosphere that makes you feel like family.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-xl w-full md:w-4/5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
              'https://images.unsplash.com/photo-1514516875530-4277e25c9da3',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
              'https://images.unsplash.com/photo-1498579809087-ef1e558fd1b8',
              'https://images.unsplash.com/photo-1484727445732-3c3d56fe2949',
              'https://images.unsplash.com/photo-1528605248644-14dd04022da1'
            ].map((src, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-60 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Reservations</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 border rounded text-black"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 border rounded text-black"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-2 border rounded text-black"
                required
              />
              <input 
                type="datetime-local" 
                className="w-full p-2 border rounded text-black"
                required
              />
              <textarea 
                placeholder="Special Requests" 
                className="w-full p-2 border rounded h-24 text-black"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {['Appetizers', 'Main Courses', 'Desserts', 'Beverages'].map((category) => (
              <motion.div 
                key={category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif mb-4">{category}</h3>
                <div className="space-y-4">
                  {/* Sample menu items */}
                  <div className="flex justify-between">
                    <p className="font-medium">Classic Item</p>
                    <p className="text-gray-600">$14</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Signature Dish</p>
                    <p className="text-gray-600">$18</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif">Contact Us</h2>
              <p>123 Italian Street</p>
              <p>Columbus, Ohio 43215</p>
              <p>Phone: (614) 555-0123</p>
              <p>Email: info@lacucina.com</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
              viewport={{ once: true }}
            >
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 rounded text-black"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 rounded text-black"
                required
              />
              <textarea 
                placeholder="Message" 
                className="w-full p-2 rounded h-32 text-black"
                required
              ></textarea>
              <button 
                className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 La Cucina. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-500">Facebook</a>
            <a href="#" className="hover:text-yellow-500">Instagram</a>
            <a href="#" className="hover:text-yellow-500">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default App;

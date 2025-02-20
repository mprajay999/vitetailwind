
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaRobot, FaTimes } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll implementation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Chatbot component
  const Chatbot = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-20 right-5 w-72 h-96 rounded-lg shadow-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h3>Chat with us</h3>
        <button onClick={() => setChatOpen(false)}>
          <FaTimes />
        </button>
      </div>
      <div className="p-4 h-72 overflow-y-auto">
        {/* Add chatbot messages here */}
        <div className="mb-2">How can we help you today?</div>
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded border"
        />
      </div>
    </motion.div>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Raaga Indian Grand</h1>
              <div className="flex items-center gap-6">
                {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize ${
                      activeSection === section ? 'text-orange-500' : ''
                    }`}
                  >
                    {section}
                  </button>
                ))}
                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="h-screen relative">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2096"
            alt="Indian Cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-6xl font-bold mb-4">Experience Authentic Indian Flavors</h1>
              <button className="bg-orange-500 px-8 py-3 rounded-full text-lg">
                Reserve a Table
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg mb-4">
                  At Raaga Indian Grand, we bring you the authentic flavors of India through our
                  carefully crafted dishes and traditional recipes passed down through generations.
                </p>
                <p className="text-lg">
                  Our expert chefs use only the finest ingredients and traditional cooking methods
                  to create an unforgettable dining experience.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Appetizers', 'Main Course', 'Desserts'].map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">{category}</h3>
                  {/* Add menu items */}
                  <ul className="space-y-2">
                    {['Item 1', 'Item 2', 'Item 3'].map((item) => (
                      <li key={item} className="text-lg">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://picsum.photos/400/300?random=${item}`}
                    alt={`Gallery ${item}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((review) => (
                <motion.div
                  key={review}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <p className="text-lg mb-4">
                    "The food was amazing! The flavors were authentic and the service was excellent."
                  </p>
                  <p className="font-bold">- Customer {review}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-4">
                  Have questions or want to make a reservation? Reach out to us!
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> info@raagaindiangrand.com
                </p>
              </div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded border"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded border"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded border"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 px-8 py-3 rounded-full text-lg text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Raaga Indian Grand</h3>
                <p>Experience the finest Indian cuisine</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection(link)}
                        className="capitalize hover:text-orange-500"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                <p>+1 (123) 456-7890</p>
                <p>info@raagaindiangrand.com</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <p>Social media links here</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Chatbot Toggle Button */}
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-5 right-5 bg-orange-500 p-4 rounded-full shadow-lg"
        >
          <FaRobot className="text-white text-xl" />
        </button>

        {/* Chatbot Window */}
        <AnimatePresence>{chatOpen && <Chatbot />}</AnimatePresence>
      </div>
    </div>
  );
}

export default App;

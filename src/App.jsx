import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Ruchi Indian Kitchen</h1>
          
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'menu', 'gallery', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => smoothScroll(section)}
                className={`${activeSection === section ? 'text-orange-600' : ''} hover:text-orange-600 capitalize`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white dark:bg-gray-900 p-4"
            >
              {['home', 'about', 'menu', 'gallery', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => smoothScroll(section)}
                  className="block w-full text-left py-2 capitalize hover:text-orange-600"
                >
                  {section}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80')] bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Experience Authentic Indian Flavors</h1>
          <p className="text-xl mb-8">A journey through the rich spices and traditions of India</p>
          <button onClick={() => smoothScroll('menu')} className="bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
            View Menu
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine made with love and tradition.
              Our recipes have been passed down through generations, bringing the true taste of India to your plate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://images.unsplash.com/photo-1625398407796-82650a8c2462?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Chef cooking"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu items would go here - this is a sample */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Butter Chicken"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Butter Chicken</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Tender chicken pieces in rich tomato gravy
              </p>
              <p className="text-orange-600 font-bold">$16.99</p>
            </motion.div>
            {/* Add more menu items as needed */}
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-orange-600 p-4 rounded-full text-white shadow-lg"
        >
          {showChatbot ? 'Close Chat' : 'Need Help?'}
        </button>
        
        <AnimatePresence>
          {showChatbot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4"
            >
              <div className="chat-header border-b pb-2 mb-4">
                <h3 className="font-bold">Chat with us</h3>
              </div>
              <div className="chat-messages h-60 overflow-y-auto">
                {/* Chat messages would go here */}
                <p className="mb-2">Hello! How can we help you today?</p>
              </div>
              <div className="chat-input mt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-2 border rounded"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ruchi Indian Kitchen</h3>
              <p>Bringing authentic Indian flavors to your table</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-orange-600 cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-orange-600 cursor-pointer" />
                <FaTwitter className="text-2xl hover:text-orange-600 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p>&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

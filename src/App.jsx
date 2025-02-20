
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// Added image imports (you'll need to add actual images)
const images = {
  hero: '/images/hero-bg.jpg',
  gallery: [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg'
  ]
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // Added mobile menu state

  // Enhanced menu items with images
  const [menuItems] = useState({
    appetizers: [
      { name: 'Samosas', price: '$6.99', description: 'Crispy pastries with spiced potatoes', image: '/images/samosas.jpg' },
      { name: 'Pakoras', price: '$5.99', description: 'Vegetable fritters with mint chutney', image: '/images/pakoras.jpg' }
    ],
    mains: [
      { name: 'Butter Chicken', price: '$16.99', description: 'Creamy tomato curry with tender chicken', image: '/images/butter-chicken.jpg' },
      { name: 'Palak Paneer', price: '$14.99', description: 'Cottage cheese in spinach gravy', image: '/images/palak-paneer.jpg' }
    ],
    desserts: [
      { name: 'Gulab Jamun', price: '$4.99', description: 'Sweet milk dumplings in syrup', image: '/images/gulab-jamun.jpg' },
      { name: 'Kheer', price: '$4.99', description: 'Traditional rice pudding', image: '/images/kheer.jpg' }
    ]
  });

  const [isVisible, setIsVisible] = useState(false);

  // Enhanced scroll visibility toggle
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Enhanced smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navHeight = 80; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setMobileMenu(false); // Close mobile menu after clicking
  };

  // Navigation items
  const navItems = ['home', 'about', 'menu', 'gallery', 'contact'];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Enhanced Navigation Bar */}
      <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-600">Ruchi Indian Kitchen</div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 dark:text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? '✕' : '☰'}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-orange-600 capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="transition-transform hover:scale-110"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden py-4 space-y-4"
              >
                {navItems.map((item) => (
                  <div key={item} className="block">
                    <button
                      onClick={() => scrollToSection(item)}
                      className="w-full text-left hover:text-orange-600 capitalize py-2"
                    >
                      {item}
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full text-left py-2"
                >
                  {darkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section 
        id="home" 
        className="pt-20 min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Authentic Indian Cuisine Made with Love</h1>
          <p className="text-xl mb-8">Experience the rich flavors of India in every bite</p>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            View Our Menu
          </button>
        </motion.div>
      </section>

      {/* Rest of the sections remain the same but with enhanced animations */}
      {/* ... (Previous sections code) ... */}

      {/* Enhanced Chatbot */}
      <AnimatePresence>
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
          >
            💬
          </button>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-700 rounded-lg shadow-xl p-4"
            >
              <div className="text-sm">Chat with us!</div>
              {/* Add chat functionality here */}
            </motion.div>
          )}
        </div>
      </AnimatePresence>

      {/* Enhanced Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 left-4 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

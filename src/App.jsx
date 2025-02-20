
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItems } from './data/MenuItems';  // Create this file for menu data
import { GalleryImages } from './data/GalleryImages';  // Create this file for gallery data
import Logo from './assets/logo.png';  // Add your logo
import HeroImage from './assets/hero-image.jpg';  // Add hero image
import AboutImage from './assets/about-image.jpg';  // Add about image

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Handle initial dark mode based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    setIsLoading(false);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  if (isLoading) return null;

  return (
    <AnimatePresence>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        {/* Navbar */}
        <nav className="fixed w-full bg-opacity-95 backdrop-blur-sm bg-white dark:bg-gray-800 shadow-lg z-50">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img src={Logo} alt="Raaga Logo" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'gallery', 'reservation', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-orange-500 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          id="home"
          className="h-screen relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <img
            src={HeroImage}
            alt="Restaurant Interior"
            className="h-full w-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              Raaga Indian Grand
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
              Experience the Finest Indian Flavors
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full transition-colors duration-300"
              onClick={() => scrollToSection('reservation')}
            >
              Book a Table
            </motion.button>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={AboutImage}
                  alt="Restaurant"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed">
                  Raaga Indian Grand has been serving authentic Indian cuisine since 1995.
                  Our commitment to excellence in both food and service has made us one
                  of the most beloved Indian restaurants in the region.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Our expert chefs craft each dish with passion and precision, using
                  traditional recipes passed down through generations and the finest,
                  freshly-sourced ingredients.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {MenuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <p className="text-orange-500 font-bold">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Continue with Gallery, Reservation, Contact sections... */}
        {/* Add similar motion effects and responsive design */}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Raaga Indian Grand</h3>
                <p>123 Culinary Street</p>
                <p>Foodie City, FC 12345</p>
                <p>Phone: (555) 123-4567</p>
              </div>
              {/* Add more footer content */}
            </div>
          </div>
        </footer>

        {/* Chatbot */}
        <motion.div 
          className="fixed bottom-4 right-4 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Chat with us"
          >
            💬
          </button>
          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4"
              >
                <h3 className="font-bold mb-4">Chat with us</h3>
                {/* Add chat interface */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default App;

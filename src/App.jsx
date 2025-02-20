
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Ruchi Indian Kitchen</h1>

          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'menu', 'gallery', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => smoothScroll(section)}
                className={`capitalize transition-colors ${activeSection === section ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'}`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode" className="p-2">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
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
      <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80)' }}>
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
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine made with love and tradition.
              Our recipes have been passed down through generations, bringing the true taste of India to your plate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Menu</h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Butter Chicken" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Butter Chicken</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Tender chicken pieces in rich tomato gravy</p>
              <p className="text-orange-600 font-bold">$16.99</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

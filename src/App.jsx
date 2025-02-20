import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showChatbot, setShowChatbot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const menuItems = [
    {
      name: "Butter Chicken",
      description: "Tender chicken pieces in rich tomato gravy",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },
    // Add more menu items as needed
  ];

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen transition-colors duration-300`}>
      {/* Enhanced Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              Ruchi Indian Kitchen
            </motion.h1>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'gallery', 'contact'].map(section => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => smoothScroll(section)}
                  className={`${
                    activeSection === section 
                      ? 'text-orange-600 font-semibold' 
                      : 'hover:text-orange-600'
                  } capitalize transition-colors`}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                onClick={() => setDarkMode(!darkMode)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </motion.button>
              <button
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-6"
            >
              <motion.div variants={staggerContainer} className="space-y-4">
                {['home', 'about', 'menu', 'gallery', 'contact'].map(section => (
                  <motion.button
                    key={section}
                    variants={fadeInUp}
                    onClick={() => smoothScroll(section)}
                    className="block w-full text-left py-2 capitalize hover:text-orange-600 transition-colors"
                  >
                    {section}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80')] 
              bg-cover bg-center transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="relative text-center text-white max-w-4xl mx-auto px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Experience Authentic Indian Flavors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-gray-200"
          >
            A journey through the rich spices and traditions of India
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              onClick={() => smoothScroll('menu')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg
                transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-600/30"
            >
              Explore Our Menu
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Menu Section */}
      <section id="menu" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Signature Dishes</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Carefully crafted dishes that bring the authentic flavors of India to your table
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <p className="text-orange-600 font-bold text-lg">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-orange-600 p-4 rounded-full text-white shadow-lg hover:bg-orange-700 
            transition-colors duration-300"
        >
          {showChatbot ? 'Close Chat' : 'Need Help?'}
        </motion.button>
        
        <AnimatePresence>
          {showChatbot && (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bottom-20 right-0 w-96 bg-white dark:bg-gray-800 rounded-xl 
                shadow-2xl overflow-hidden"
            >
              <div className="p-4 bg-orange-600 text-white">
                <h3 className="font-bold text-lg">Chat with us</h3>
              </div>
              <div className="chat-messages h-80 overflow-y-auto p-4 space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-[80%]">
                  <p>Hello! How can we help you today?</p>
                </div>
              </div>
              <div className="p-4 border-t dark:border-gray-700">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700
                    focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 
                bg-clip-text text-transparent">
                Ruchi Indian Kitchen
              </h3>
              <p className="text-gray-400">Bringing authentic Indian flavors to your table</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>123 Main Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
              <div className="flex space-x-6">
                {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="text-gray-400 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <Icon className="text-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400">&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

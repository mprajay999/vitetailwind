
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const scaleUp = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3 }
};

// Component for Section Headers
const SectionHeader = ({ title }) => (
  <h2 className="text-4xl font-bold text-center mb-16 
                 bg-gradient-to-r from-red-600 to-red-400 
                 bg-clip-text text-transparent">
    {title}
  </h2>
);

// Component for Service Card
const ServiceCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-100 to-gray-200 
               dark:from-gray-800 dark:to-gray-900 
               p-8 rounded-xl shadow-lg hover:shadow-2xl 
               transition-all duration-300"
  >
    <h3 className="text-xl font-bold mb-4 text-red-600">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Component for Membership Card
const MembershipCard = ({ plan }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-900 p-8 rounded-xl 
               shadow-lg hover:shadow-2xl transition-all 
               duration-300 border border-gray-200 
               dark:border-gray-700"
  >
    <h3 className="text-2xl font-bold mb-4 text-red-600">{plan.title}</h3>
    <p className="text-4xl font-bold mb-6">
      ${plan.price}<span className="text-sm text-gray-500">/month</span>
    </p>
    <ul className="mb-8 space-y-3">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center space-x-2">
          <span className="text-green-500">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-gradient-to-r from-red-600 to-red-500 
                     text-white py-3 rounded-full hover:from-red-700 
                     hover:to-red-600 transition-all duration-300 
                     transform hover:-translate-y-1">
      Choose Plan
    </button>
  </motion.div>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}
                     min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 
                      ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
        {/* Navbar content */}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <motion.div {...fadeIn} className="relative h-full flex flex-col 
                                        justify-center items-center text-white 
                                        text-center z-10">
          <h1 className="text-7xl font-bold mb-6 
                       bg-gradient-to-r from-white to-red-400 
                       bg-clip-text text-transparent">
            Unleash Your Strength
          </h1>
          <p className="text-2xl mb-8">Train with Purpose</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-500 
                     text-white px-8 py-3 rounded-full 
                     hover:from-red-700 hover:to-red-600 
                     transition-all duration-300"
          >
            Join Now
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <motion.div {...fadeIn} className="container mx-auto">
          <SectionHeader title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <motion.div {...fadeIn} className="container mx-auto">
          <SectionHeader title="Membership Plans" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <MembershipCard key={index} plan={plan} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            {...scaleUp}
            className="fixed bottom-20 right-4 z-50"
          >
            {/* Chat content */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Data objects remain the same...

export default App;

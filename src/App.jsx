
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Navbar items
  const navItems = ['home', 'about', 'menu', 'story', 'reservations', 'gallery', 'reviews', 'contact'];

  // Menu data
  const menuCategories = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Edamame', price: '6', description: 'Steamed soybeans with sea salt' },
        { name: 'Gyoza', price: '8', description: 'Pan-fried dumplings with pork and vegetables' },
      ]
    },
    {
      title: 'Sushi Rolls',
      items: [
        { name: 'Dragon Roll', price: '18', description: 'Eel, cucumber, avocado' },
        { name: 'Rainbow Roll', price: '16', description: 'California roll topped with assorted sashimi' },
      ]
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 z-50 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold"
          >
            TSUKI IZAKAYA
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item ? 'text-red-500' : 'text-white'
                } hover:text-red-400 transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580835239846-5bb9ce0642f7')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/50">
            <div className="h-full flex flex-col justify-center items-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                TSUKI IZAKAYA
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl"
              >
                Traditional Flavors, Modern Elegance
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl mb-8">About Us</h2>
            <p className="text-lg mb-8">
              Welcome to Tsuki Izakaya, where traditional Japanese dining meets contemporary elegance.
              Our restaurant offers an authentic izakaya experience, serving carefully crafted dishes
              that honor centuries-old recipes while embracing modern culinary innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Our Menu</h2>
          {menuCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl mb-6">{category.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="border border-gray-800 p-4 rounded">
                    <h4 className="text-xl mb-2">{item.name}</h4>
                    <p className="text-gray-400">{item.description}</p>
                    <p className="text-red-500 mt-2">${item.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl text-center mb-8">Make a Reservation</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-black border border-gray-800 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-black border border-gray-800 rounded"
              />
              <input
                type="date"
                className="w-full p-2 bg-black border border-gray-800 rounded"
              />
              <button
                type="submit"
                className="w-full bg-red-600 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Reserve Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Tsuki Izakaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

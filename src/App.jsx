
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    setActiveSection(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const menuItems = [
    {
      name: "Sake Glazed Black Cod",
      price: "$28",
      description: "Marinated for 72 hours in our house-made sake mixture",
      image: "https://source.unsplash.com/random/800x600/?japanese-food-cod"
    },
    {
      name: "Dragon Roll",
      price: "$24",
      description: "Premium eel, avocado, and tempura crunch",
      image: "https://source.unsplash.com/random/800x600/?sushi-roll"
    },
    // Add more menu items as needed
  ];

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">築 TSUKI</h1>
          <div className="space-x-6">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item)}
                className={`${
                  activeSection === item ? 'text-red-600' : 'text-white'
                } hover:text-red-500 transition-colors`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen bg-[url('https://source.unsplash.com/random/1920x1080/?japanese-restaurant')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold mb-4"
              {...fadeIn}
            >
              TSUKI IZAKAYA
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              {...fadeIn}
            >
              Where Samurai Spirit Meets Japanese Cuisine
            </motion.p>
            <motion.button
              className="bg-red-600 px-8 py-3 rounded hover:bg-red-700 transition-colors"
              onClick={() => smoothScroll('menu')}
              whileHover={{ scale: 1.05 }}
            >
              Explore the Experience
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-gradient-to-b from-black to-gray-900"
        {...fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-8 font-bold">Our Story</h2>
          <p className="text-lg leading-relaxed">
            TSUKI IZAKAYA embodies the essence of traditional Japanese dining,
            where the noble principles of the samurai — honor, discipline, and
            hospitality — guide our service. Our master chefs craft each dish
            with precision and artistry, offering an authentic izakaya experience
            that transports you to the heart of Japan.
          </p>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-20 px-6 bg-black"
        {...fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center font-bold">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-2">{item.description}</p>
                  <p className="text-red-600 font-bold">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
        {...fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-8 font-bold">Visit Us</h2>
          <div className="mb-8">
            <p className="text-lg">123 Samurai Street, Tokyo District</p>
            <p className="text-lg">Phone: (555) 123-4567</p>
            <p className="text-lg">Email: info@tsukiizakaya.com</p>
          </div>
          <button
            className="bg-red-600 px-8 py-3 rounded hover:bg-red-700 transition-colors"
            onClick={() => window.location.href = 'mailto:info@tsukiizakaya.com'}
          >
            Book a Table
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black py-6 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {['facebook', 'instagram', 'twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                {social.charAt(0).toUpperCase() + social.slice(1)}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2024 TSUKI IZAKAYA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

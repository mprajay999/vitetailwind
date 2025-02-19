
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    appetizers: [
      { name: 'Samosa', price: '$8', description: 'Crispy pastry filled with spiced potatoes and peas' },
      { name: 'Paneer Tikka', price: '$12', description: 'Grilled cottage cheese with aromatic spices' },
    ],
    mainCourse: [
      { name: 'Butter Chicken', price: '$24', description: 'Tender chicken in rich tomato cream sauce' },
      { name: 'Dal Makhani', price: '$18', description: 'Black lentils slow-cooked with cream and spices' },
    ],
    desserts: [
      { name: 'Gulab Jamun', price: '$8', description: 'Sweet milk dumplings in rose syrup' },
      { name: 'Kheer', price: '$7', description: 'Traditional rice pudding with cardamom' },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-serif"
          >
            Ruchi Indian Kitchen
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'Reservations', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
        id="home"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3")' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Authentic Indian Cuisine
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Elevated Dining Experience
            </motion.p>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gold text-black px-8 py-3 rounded-full hover:bg-gold/80 transition-colors"
              onClick={() => document.getElementById('reservations').scrollIntoView()}
            >
              Reserve a Table
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-center mb-16"
          >
            Our Menu
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-serif mb-4 capitalize">{category}</h3>
                {items.map((item) => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-gold">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-center mb-16"
          >
            Make a Reservation
          </motion.h2>
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto space-y-4"
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 bg-black/50 border border-gold rounded focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 bg-black/50 border border-gold rounded focus:outline-none"
            />
            <input 
              type="datetime-local" 
              className="w-full p-3 bg-black/50 border border-gold rounded focus:outline-none"
            />
            <button 
              type="submit" 
              className="w-full bg-gold text-black p-3 rounded hover:bg-gold/80 transition-colors"
            >
              Reserve Now
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif mb-8">Contact Us</h2>
            <p className="mb-4">123 Culinary Street, Foodie City, FC 12345</p>
            <p className="mb-4">Phone: (555) 123-4567</p>
            <p className="mb-8">Email: info@ruchiindian.com</p>
            <div className="flex justify-center space-x-6">
              {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2024 Ruchi Indian Kitchen. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;

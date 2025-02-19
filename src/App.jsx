
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
          alt="background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 text-white z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#menu" className="hover:text-yellow-500 transition">Menu</a>
            <a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a>
            <a href="#reservations" className="hover:text-yellow-500 transition">Reservations</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="h-screen flex items-center justify-center text-center text-white"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="bg-black/50 p-12 rounded-lg">
          <h1 className="text-6xl font-serif mb-4">Ruchi Indian Kitchen</h1>
          <p className="text-2xl mb-8">Experience the Art of Indian Dining</p>
          <a 
            href="#reservations"
            className="bg-yellow-500 text-black px-8 py-3 rounded hover:bg-yellow-600 transition"
          >
            Reserve a Table
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 bg-white/95"
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-lg leading-relaxed">
              At Ruchi Indian Kitchen, we blend centuries-old traditions with modern culinary innovation. 
              Our master chefs craft each dish with carefully selected spices and premium ingredients, 
              ensuring an authentic yet elevated dining experience. We take pride in offering a luxurious 
              atmosphere where every meal becomes a memorable celebration of Indian gastronomy.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe" 
              alt="restaurant interior" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section 
        id="menu"
        className="py-20 bg-black/95 text-white"
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu categories */}
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl mb-4 font-serif">Appetizers</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Samosa Royal</h4>
                  <p className="text-sm text-gray-300">Crispy pastry filled with spiced potatoes and peas</p>
                  <p className="text-yellow-500">$8</p>
                </li>
                {/* Add more menu items */}
              </ul>
            </div>
            {/* Add more categories */}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        id="gallery"
        className="py-20 bg-white/95"
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center">A Glimpse Inside</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0" alt="gallery" className="rounded-lg hover:scale-105 transition"/>
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe" alt="gallery" className="rounded-lg hover:scale-105 transition"/>
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d" alt="gallery" className="rounded-lg hover:scale-105 transition"/>
          </div>
        </div>
      </motion.section>

      {/* Reservations Section */}
      <motion.section 
        id="reservations"
        className="py-20 bg-black/95 text-white"
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center">Reserve Your Table</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full p-2 rounded bg-white/10 border border-white/20"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full p-2 rounded bg-white/10 border border-white/20"
              />
              <input 
                type="datetime-local" 
                className="w-full p-2 rounded bg-white/10 border border-white/20"
              />
              <button 
                type="submit"
                className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4 font-serif">Location</h3>
              <p>123 Culinary Street</p>
              <p>New York, NY 10001</p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-serif">Contact</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ruchiindian.com</p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-serif">Hours</h3>
              <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p>&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

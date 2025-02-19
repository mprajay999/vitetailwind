
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarTransparent(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavbarTransparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-2xl font-serif ${isNavbarTransparent ? 'text-white' : 'text-burgundy'}`}
            >
              Raaga Indian Grand
            </motion.h1>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Menu', 'Reservations', 'About Us', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                   className={`${isNavbarTransparent ? 'text-white' : 'text-gray-800'} hover:text-gold transition`}>
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1 
            className="text-6xl font-serif mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Raaga Indian Grand
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Experience Authentic Indian Grandeur
          </motion.p>
          <motion.button 
            className="bg-gold text-white px-8 py-3 rounded hover:bg-opacity-90 transition"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Reserve a Table
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-white"
        id="about-us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Raaga Indian Grand, we bring you the finest authentic Indian cuisine, 
                crafted with passion and tradition. Our expert chefs combine age-old recipes 
                with modern culinary techniques to create an unforgettable dining experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each dish tells a story of India's rich culinary heritage, 
                carefully prepared with the finest ingredients and aromatic spices.
              </p>
            </div>
            <motion.img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3"
              alt="Restaurant Interior"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50" id="menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Butter Chicken",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3"
              },
              {
                name: "Biryani Royal",
                price: "$22.99",
                image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3"
              },
              {
                name: "Tandoori Platter",
                price: "$28.99",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3"
              }
            ].map((dish, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gold font-semibold">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section className="py-20 bg-white" id="reservations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">Make a Reservation</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input 
                  type="time" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <input 
                type="number" 
                placeholder="Number of Guests"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit"
                className="w-full bg-gold text-white py-3 rounded hover:bg-opacity-90 transition"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <p>123 Restaurant Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@raagaindian.com</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Hours</h3>
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l text-black"
                />
                <button className="bg-gold px-4 py-2 rounded-r hover:bg-opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>&copy; 2024 Raaga Indian Grand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

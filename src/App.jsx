
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif">TSUKI IZAKAYA</h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'menu', 'gallery', 'reservations', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-red-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home"
        className="h-screen bg-[url('https://images.unsplash.com/photo-1601023764067-8d8b7768466c')] bg-cover bg-center"
      >
        <div className="h-full bg-black/50 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif mb-4"
          >
            TSUKI IZAKAYA
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Authentic Izakaya Experience, Crafted with Passion
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => scrollToSection('reservations')}
            className="bg-red-700 px-8 py-3 rounded hover:bg-red-800 transition-colors"
          >
            Reserve Now
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Established in 2015, TSUKI IZAKAYA brings the authentic taste and atmosphere
              of traditional Japanese pub dining to your neighborhood. Our expert chefs
              combine time-honored recipes with modern techniques to create an
              unforgettable dining experience.
            </p>
          </motion.div>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27"
            alt="Restaurant interior"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {['Small Bites', 'Yakitori & Kushiyaki', 'Ramen & Rice', 'Sake & Cocktails'].map((category) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-serif mb-4">{category}</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex justify-between">
                      <span>Signature Dish {item}</span>
                      <span>$12.99</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.img
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                src={`https://source.unsplash.com/random/800x600?japanese-food=${item}`}
                alt={`Gallery image ${item}`}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Make a Reservation</h2>
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-neutral-900 rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full p-3 bg-neutral-900 rounded"
              />
              <input
                type="time"
                className="w-full p-3 bg-neutral-900 rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-neutral-900 rounded"
            />
            <button
              type="submit"
              className="w-full bg-red-700 py-3 rounded hover:bg-red-800 transition-colors"
            >
              Reserve Now
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Location</h3>
              <p className="text-gray-300 mb-4">123 Izakaya Street</p>
              <p className="text-gray-300 mb-4">Tokyo, Japan 100-0001</p>
              <p className="text-gray-300 mb-4">Phone: (123) 456-7890</p>
              <div className="space-x-4">
                <a href="#" className="text-red-500 hover:text-red-400">Instagram</a>
                <a href="#" className="text-red-500 hover:text-red-400">Facebook</a>
                <a href="#" className="text-red-500 hover:text-red-400">Twitter</a>
              </div>
            </div>
            <div className="h-64 bg-neutral-800 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 TSUKI IZAKAYA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

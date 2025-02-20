
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-semibold text-gray-800"
            >
              Lakeview Oaks
            </motion.h1>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#amenities" className="text-gray-600 hover:text-gray-900">Amenities</a>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  // Close Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>Home</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>About</a>
              <a href="#amenities" className="block text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>Amenities</a>
              <a href="#gallery" className="block text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>Gallery</a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Luxury Apartment Complex"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Lakeview Oaks</h1>
            <p className="text-xl md:text-2xl mb-8">Luxury Living in Nature's Embrace</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transition-transform duration-300"
            >
              Schedule a Tour
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              Nestled in the heart of nature, Lakeview Oaks offers an unparalleled living experience.
              Our community combines modern luxury with the tranquility of lakeside living,
              providing residents with a perfect balance of comfort and sophistication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Amenities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Resort-Style Pool", icon: "🏊‍♂️" },
              { title: "24/7 Fitness Center", icon: "💪" },
              { title: "Pet Friendly", icon: "🐾" },
              { title: "Covered Parking", icon: "🚗" },
              { title: "Business Center", icon: "💻" },
              { title: "Community Events", icon: "🎉" }
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
              "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
              "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
              "https://images.unsplash.com/photo-1617806118233-18e1de247200",
              "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="aspect-square overflow-hidden rounded-lg"
                viewport={{ once: true }}
              >
                <img
                  src={`${image}?w=800&h=800&fit=crop`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Contact Us</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lakeview Oaks</h3>
              <p className="text-gray-400">
                123 Lakeview Drive<br />
                Anytown, ST 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white">About</a>
                <a href="#amenities" className="block text-gray-400 hover:text-white">Amenities</a>
                <a href="#gallery" className="block text-gray-400 hover:text-white">Gallery</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Phone: (555) 123-4567</p>
                <p className="text-gray-400">Email: info@lakeviewoaks.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lakeview Oaks Apartments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

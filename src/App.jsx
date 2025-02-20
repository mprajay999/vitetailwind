
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Prajay's Store
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-blue-600 transition">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600 transition">About</a>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-blue-600 transition">Products</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600 transition">Contact</a>
          </div>
          
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white shadow-md"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block hover:text-blue-600 transition">Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block hover:text-blue-600 transition">About</a>
                <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="block hover:text-blue-600 transition">Products</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block hover:text-blue-600 transition">Contact</a>
                <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
        <div className="h-full bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-4">Welcome to Prajay's Store</h2>
              <p className="text-xl text-white mb-8">Discover quality products for your lifestyle</p>
              <button onClick={(e) => handleNavClick(e, 'products')} className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition">
                Explore Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">About Us</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Prajay's Store has been serving customers with premium quality products
                and exceptional service. Our mission is to provide an unparalleled shopping experience
                with carefully curated items that enhance your lifestyle.
              </p>
              <p className="text-gray-600">
                We believe in quality over quantity and strive to offer products that meet the highest standards.
                Our dedicated team works tirelessly to ensure customer satisfaction and to keep up with the latest trends.
              </p>
            </motion.div>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
              alt="Store interior"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Example Products */}
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                viewport={{ once: true }}
              >
                <img
                  src={`https://source.unsplash.com/random/500x500?product-${item}`}
                  className="w-full h-48 object-cover"
                  alt={`Product ${item}`}
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Product Category {item}</h4>
                  <p className="text-gray-600">High-quality products designed for your needs.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Prajay's Store</h4>
              <p className="text-gray-400">Quality products for your lifestyle</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="text-gray-400 hover:text-white transition">Products</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Store Street</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@prajaystore.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); /* Handle subscription */ }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prajay's Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

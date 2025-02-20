
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Menu', 'Gallery', 'Testimonials', 'Contact'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-serif text-orange-500 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Ruchi Indian Kitchen
            </motion.div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-orange-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black bg-opacity-70"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white hover:text-orange-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-7xl font-serif mb-6">
              Authentic Indian Flavors
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Experience the rich traditions of Indian cuisine
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition-colors duration-300"
            >
              View Our Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine
              to food enthusiasts in the heart of the city. Our recipes have been passed
              down through generations, preserving the authentic flavors while incorporating
              modern culinary techniques.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Restaurant Interior"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Chef Preparing Food"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Our Menu</h2>
            <p className="text-lg text-gray-600 mb-12">
              Explore our diverse range of dishes, each crafted with the finest ingredients and authentic spices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Example Menu Item */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1604908177520-7f91bd3d7e61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Butter Chicken"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">Butter Chicken</h3>
                  <p className="text-gray-600 mb-4">A rich and creamy chicken curry cooked with butter and tomatoes.</p>
                  <span className="text-orange-500 font-semibold">$12.99</span>
                </div>
              </motion.div>
              {/* Repeat similar blocks for other menu items */}
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600557914287-99104fd6c6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Paneer Tikka"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">Paneer Tikka</h3>
                  <p className="text-gray-600 mb-4">Grilled paneer cubes marinated in spices and yogurt.</p>
                  <span className="text-orange-500 font-semibold">$10.99</span>
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1589308078055-a47c6f572997?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Biryani"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-serif text-gray-800 mb-2">Biryani</h3>
                  <p className="text-gray-600 mb-4">A flavorful rice dish layered with marinated meat and aromatic spices.</p>
                  <span className="text-orange-500 font-semibold">$14.99</span>
                </div>
              </motion.div>
              {/* Add more menu items as needed */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Gallery</h2>
            <p className="text-lg text-gray-600 mb-12">
              A glimpse into our vibrant and delicious offerings.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Example Gallery Image */}
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1604908177493-5cf74ea55ac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Dishes Display"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              {/* Repeat similar blocks for other gallery images */}
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1617196037191-4af4b7c5a04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Spices and Ingredients"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1598514982734-ce4afd46fa89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                  alt="Chef in Action"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              {/* Add more gallery images as needed */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Testimonials</h2>
            <p className="text-lg text-gray-600 mb-12">
              Hear from our satisfied customers.
            </p>
            <div className="space-y-8">
              {/* Example Testimonial */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">
                  "The best Indian food in town! The flavors are authentic and the service is exceptional."
                </p>
                <h4 className="text-xl font-semibold text-gray-800">- Anjali Sharma</h4>
              </motion.div>
              {/* Repeat similar blocks for other testimonials */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">
                  "A delightful culinary experience. Every dish tastes like it was made with love and tradition."
                </p>
                <h4 className="text-xl font-semibold text-gray-800">- Rohan Mehta</h4>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mb-4">
                  "Their biryani is out of this world! Highly recommend to anyone looking for authentic Indian cuisine."
                </p>
                <h4 className="text-xl font-semibold text-gray-800">- Priya Kapoor</h4>
              </motion.div>
              {/* Add more testimonials as needed */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              We'd love to hear from you! Whether you have a question about our menu, reservations, or anything else, feel free to reach out.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
                alert('Thank you for contacting us!');
              }}
              className="max-w-lg mx-auto"
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="5"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ruchi Indian Kitchen. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="Facebook">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.404 24 22.674V1.326C24 .596 23.404 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="Twitter">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="Instagram">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308a4.813 4.813 0 0 1 1.308 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85a4.813 4.813 0 0 1-1.308 3.608 4.813 4.813 0 0 1-3.608 1.308c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07a4.813 4.813 0 0 1-3.608-1.308 4.813 4.813 0 0 1-1.308-3.608c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85a4.813 4.813 0 0 1 1.308-3.608A4.813 4.813 0 0 1 5.15 2.233c1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.736 0 8.332.013 7.052.072 5.77.13 4.617.362 3.678 1.301a6.36 6.36 0 0 0-1.301 3.678C2.362 5.767 2.13 6.92 2.072 8.202.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.282.29 2.435 1.229 3.374a6.36 6.36 0 0 0 3.374 1.229c1.28.059 1.684.072 4.948.072s3.668-.013 4.948-.072a6.36 6.36 0 0 0 3.374-1.229c.939-.939 1.171-2.092 1.229-3.374.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.282-.29-2.435-1.229-3.374A6.36 6.36 0 0 0 16.948.072C15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="LinkedIn">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.46-2.154 2.964v5.698h-3v-10h2.88v1.367h.041c.401-.76 1.379-1.557 2.838-1.557 3.038 0 3.6 2.001 3.6 4.6v5.577z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

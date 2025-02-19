
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-orange-800">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'menu', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-orange-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            {['home', 'about', 'menu', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full px-4 py-2 text-left capitalize hover:bg-orange-50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3')] bg-cover bg-center"
      >
        <div className="h-full w-full bg-black/50 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            Ruchi Indian Kitchen
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8">Authentic Indian Flavors, Crafted with Passion</p>
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            Explore Our Menu
          </button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-orange-50"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              At Ruchi Indian Kitchen, we bring the authentic flavors of India to your plate. 
              Our chefs use traditional cooking methods and fresh, hand-picked ingredients to 
              create dishes that tell the story of India's rich culinary heritage.
            </p>
            <p className="text-gray-600">
              Every dish is crafted with love and expertise, ensuring that each bite takes you 
              on a journey through the diverse regions of India.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-4.0.3"
            alt="Kitchen"
            className="rounded-lg shadow-xl"
          />
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Starters",
                items: [
                  { name: "Paneer Tikka", price: "12.99", desc: "Grilled cottage cheese with aromatic spices" },
                  { name: "Samosa", price: "8.99", desc: "Crispy pastry filled with spiced potatoes" }
                ]
              },
              {
                category: "Main Course",
                items: [
                  { name: "Butter Chicken", price: "18.99", desc: "Creamy tomato-based curry with tender chicken" },
                  { name: "Dal Makhani", price: "14.99", desc: "Creamy black lentils simmered overnight" }
                ]
              }
            ].map((section) => (
              <div key={section.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">{section.category}</h3>
                {section.items.map((item) => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-orange-600">${item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-orange-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The best Indian food I've had outside of India! Authentic flavors and great service.",
                author: "Sarah M."
              },
              {
                text: "Amazing atmosphere and even better food. The Butter Chicken is a must-try!",
                author: "John D."
              },
              {
                text: "Wonderful experience every time. The staff is friendly and the food is consistently excellent.",
                author: "Mike R."
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="mb-4 text-gray-600">{review.text}</p>
                <p className="font-medium text-orange-600">- {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Visit Us</h3>
              <p className="mb-2">123 Culinary Street</p>
              <p className="mb-2">Foodie City, FC 12345</p>
              <p className="mb-4">Phone: (555) 123-4567</p>
              
              <h3 className="text-xl mb-4">Hours</h3>
              <p className="mb-2">Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p className="mb-2">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Ruchi Indian Kitchen. All Rights Reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Instagram</a>
            <a href="#" className="hover:text-orange-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Chicken Tikka Masala', description: 'Grilled chicken in rich tomato cream sauce', price: '$16.99' },
    { name: 'Butter Naan', description: 'Traditional Indian bread', price: '$3.99' },
    { name: 'Vegetable Biryani', description: 'Aromatic rice with mixed vegetables', price: '$14.99' },
    { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', price: '$15.99' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'Best Indian restaurant in town! Authentic flavors and great service.' },
    { name: 'Michael Chen', text: 'The biryani here is absolutely amazing. Highly recommended!' },
    { name: 'Emma Williams', text: 'Beautiful ambiance and delicious food. A must-visit!' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-orange-600"
            >
              Raaga Indian Grand
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3")', filter: 'brightness(0.4)' }}
        ></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Raaga Indian Grand</h1>
          <p className="text-xl md:text-2xl">Authentic Indian Delights, Crafted to Perfection</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                At Raaga Indian Grand, we bring you the authentic flavors of India through our carefully crafted dishes. 
                Our expert chefs use traditional recipes and the finest ingredients to create an unforgettable dining experience.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Authentic Indian Spices</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Traditional Recipes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Fine Dining Experience</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3" 
                alt="Restaurant Interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-orange-600 font-semibold">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={`https://source.unsplash.com/random/400x300?indian-food&sig=${item}`}
                  alt={`Gallery Image ${item}`}
                  className="w-full h-[200px] md:h-[300px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows="4" 
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <div className="space-y-4 text-gray-600">
                <p>123 Restaurant Street</p>
                <p>New York, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@raagaindiangrand.com</p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <p>Monday - Sunday: 11:30 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Raaga Indian Grand</h3>
              <p className="text-gray-400">Authentic Indian cuisine in the heart of New York.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-gray-400 hover:text-white capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.84.5C10.4.5,9.5,3,9.5,5.32V7.46H6.23v4H9.5V22h5V11.46h3.95l.53-4Z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.5,2.2,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7,0.1,2.7.3.3,2.7.1,7,0,8.3,0,8.7,0,12s0,3.7.1,5c.2,4.3,2.6,6.7,7,6.9,1.3.1,1.7.1,5,.1s3.7,0,5-.1c4.3-.2,6.7-2.6,6.9-7,.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.3-2.6-6.7-7-6.9C15.7,0,15.3,0,12,0Zm0,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Zm7.8-10.4a1.4,1.4,0,1,1-1.4-1.4A1.4,1.4,0,0,1,19.8,5.6Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 Raaga Indian Grand. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

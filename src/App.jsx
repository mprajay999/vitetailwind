
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Specialties', id: 'specialties' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const specialDishes = [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato-butter sauce',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Biryani',
      description: 'Aromatic rice dish with spices and tender meat',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Palak Paneer',
      description: 'Fresh cottage cheese in spinach gravy',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The most authentic Indian cuisine I've had outside of India. Simply amazing!',
    },
    {
      name: 'Michael Chen',
      text: 'Outstanding flavors and excellent service. A must-visit restaurant!',
    },
    {
      name: 'Emma Williams',
      text: 'Their butter chicken is to die for! Great ambiance and friendly staff.',
    },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-orange-600"
            >
              Ruchi Indian Kitchen
            </motion.h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
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
          <div className="md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home"
        className="h-screen bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1')] bg-cover bg-center"
      >
        <div className="h-full w-full bg-black/50 flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Authentic Indian Cuisine Crafted with Tradition and Passion
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              View Our Menu
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Since 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine to food lovers in the heart of the city. Our expert chefs bring decades of experience and traditional recipes passed down through generations, ensuring every dish tells a story of rich Indian heritage and flavor.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1"
                alt="Restaurant Interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Menu categories */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Appetizers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Samosa</h4>
                    <p className="text-gray-600">Crispy pastry filled with spiced potatoes and peas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Paneer Tikka</h4>
                    <p className="text-gray-600">Grilled cottage cheese with aromatic spices</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Main Course</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Butter Chicken</h4>
                    <p className="text-gray-600">Tender chicken in rich tomato-butter sauce</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dal Makhani</h4>
                    <p className="text-gray-600">Creamy black lentils simmered overnight</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Breads</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Naan</h4>
                    <p className="text-gray-600">Traditional Indian bread baked in tandoor</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Roti</h4>
                    <p className="text-gray-600">Whole wheat bread</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Desserts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Gulab Jamun</h4>
                    <p className="text-gray-600">Sweet milk dumplings in rose syrup</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Kheer</h4>
                    <p className="text-gray-600">Traditional rice pudding</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/random/400x400/?indian-food&sig=${item}`}
                  alt="Gallery"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                123 Restaurant Street<br />
                City, State 12345<br />
                Phone: (123) 456-7890<br />
                Email: info@ruchiindiankitchen.com
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-600"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ruchi Indian Kitchen</h3>
              <p className="text-gray-400">
                Authentic Indian cuisine crafted with tradition and passion.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">
                Monday - Sunday<br />
                11:00 AM - 10:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

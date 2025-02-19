
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const menuItems = {
    starters: [
      { name: 'Samosa', price: '$6.99', description: 'Crispy pastry filled with spiced potatoes and peas' },
      { name: 'Paneer Tikka', price: '$12.99', description: 'Grilled cottage cheese with Indian spices' },
    ],
    mains: [
      { name: 'Butter Chicken', price: '$18.99', description: 'Tender chicken in rich tomato gravy' },
      { name: 'Dal Makhani', price: '$14.99', description: 'Creamy black lentils cooked overnight' },
    ],
    breads: [
      { name: 'Naan', price: '$3.99', description: 'Traditional Indian flatbread' },
      { name: 'Roti', price: '$2.99', description: 'Whole wheat flatbread' },
    ]
  };

  const reviews = [
    { name: 'Sarah M.', text: 'Best Indian food in the city! Authentic flavors and great service.', rating: 5 },
    { name: 'James P.', text: 'The butter chicken is to die for. Highly recommended!', rating: 5 },
    { name: 'Lisa K.', text: 'Beautiful ambiance and delicious food. Will definitely return.', rating: 5 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-serif text-red-800">Ruchi Indian Kitchen</a>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'gallery', 'reviews', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item ? 'text-red-800' : 'text-gray-600'
                  } hover:text-red-800 transition-colors capitalize`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
          {...fadeIn}
          className="relative text-center text-white"
        >
          <h1 className="text-6xl font-serif mb-4">Ruchi Indian Kitchen</h1>
          <p className="text-xl">Authentic Indian Flavors, Crafted with Tradition</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl font-serif text-center mb-12 text-red-800">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine
                with recipes passed down through generations. Our chefs bring years of expertise
                from various regions of India, ensuring each dish captures the essence of
                traditional Indian cooking.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
                alt="Restaurant Interior"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <motion.div
          {...fadeIn}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-serif text-center mb-12 text-red-800">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-serif mb-6 capitalize text-red-800">{category}</h3>
                {items.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-red-800">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <motion.div
          {...fadeIn}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-serif text-center mb-12 text-red-800">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
              'https://images.unsplash.com/photo-1601050690597-df0568f70950',
              'https://images.unsplash.com/photo-1602263176419-3d036c7d8f76',
              'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9',
              'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
              'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7'
            ].map((url, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl font-serif text-center mb-12 text-red-800">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <motion.div
          {...fadeIn}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-serif text-center mb-12 text-red-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Location</h3>
                <p className="text-gray-600">123 Main Street, City, State 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 11:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 12:00 PM - 11:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: info@ruchiindiankitchen.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

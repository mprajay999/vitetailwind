
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-600">Ruchi Indian Kitchen</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4">
            {['home', 'about', 'menu', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 capitalize text-gray-700 hover:text-orange-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-[url('https://images.unsplash.com/photo-1505253758473-96b7015fcd40')] bg-cover bg-center">
        <div className="min-h-screen bg-black/50 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Ruchi Indian Kitchen</h1>
            <p className="text-xl md:text-2xl mb-8">Authentic Flavors, Timeless Traditions</p>
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              View Menu
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine made with love and tradition. 
              Our recipes have been passed down through generations, bringing the true taste of India to your plate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe" 
                alt="Food Preparation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Popular Dishes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Butter Chicken",
                  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
                  price: "$16.99"
                },
                {
                  name: "Paneer Tikka",
                  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
                  price: "$14.99"
                },
                {
                  name: "Biryani",
                  image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
                  price: "$18.99"
                }
              ].map((dish, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-orange-600 font-bold">{dish.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  review: "Best Indian food I've had outside of India! The flavors are authentic and service is excellent.",
                  rating: 5
                },
                {
                  name: "Sarah M.",
                  review: "The ambiance is wonderful and the food is absolutely delicious. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Mike R.",
                  review: "Great variety of dishes and excellent value for money. Will definitely be coming back!",
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex text-orange-600">
                        {"★".repeat(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.review}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600 mb-4">123 Main Street<br />New York, NY 10001</p>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-gray-600 mb-4">
                  Monday - Friday: 11:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 12:00 PM - 11:00 PM
                </p>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: info@ruchiindian.com
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg" style={{height: "300px"}}>
                {/* Placeholder for Google Maps */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map View
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ruchi Indian Kitchen</h2>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-orange-600">Facebook</a>
              <a href="#" className="hover:text-orange-600">Instagram</a>
              <a href="#" className="hover:text-orange-600">Twitter</a>
            </div>
            <p className="text-gray-400">© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

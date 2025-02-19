
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Ruchi Indian Kitchen</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-orange-600">About</button>
            <button onClick={() => scrollToSection(menuRef)} className="hover:text-orange-600">Menu</button>
            <button onClick={() => scrollToSection(galleryRef)} className="hover:text-orange-600">Gallery</button>
            <button onClick={() => scrollToSection(reviewsRef)} className="hover:text-orange-600">Reviews</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-orange-600">Contact</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="h-full flex flex-col justify-center items-center text-white">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              {...fadeIn}
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              {...fadeIn}
            >
              Authentic Indian flavors cooked to perfection
            </motion.p>
            <motion.button 
              onClick={() => scrollToSection(menuRef)}
              className="bg-orange-600 px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
              {...fadeIn}
            >
              Explore Our Menu
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        ref={aboutRef}
        className="py-20 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine to food lovers in the heart of the city. Our chefs bring decades of experience in traditional Indian cooking methods, ensuring every dish is prepared with authentic spices and techniques.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a4?ixlib=rb-4.0.3" 
              alt="Chef cooking"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section 
        ref={menuRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu items here - example of one item */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={`https://images.unsplash.com/photo-${1550547660 + item}-d8d8c9a8e694`} 
                  alt="Dish"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Signature Dish {item}</h3>
                  <p className="text-gray-600">Delicious Indian curry made with authentic spices and fresh ingredients.</p>
                  <p className="text-orange-600 font-bold mt-4">$14.99</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section 
        ref={reviewsRef}
        className="py-20 px-6 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <motion.div 
                key={review}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="mb-4">"Amazing authentic Indian food! The flavors are incredible and the service is excellent."</p>
                <p className="font-bold">- Happy Customer {review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        ref={contactRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="mb-4">123 Food Street, Culinary District<br />New York, NY 10001</p>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <p className="mb-4">
                Monday - Friday: 11:00 AM - 10:00 PM<br />
                Saturday - Sunday: 12:00 PM - 11:00 PM
              </p>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="mb-4">
                Phone: (555) 123-4567<br />
                Email: info@ruchiindian.com
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-[400px]">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-orange-600">Facebook</a>
            <a href="#" className="hover:text-orange-600">Instagram</a>
            <a href="#" className="hover:text-orange-600">Twitter</a>
          </div>
          <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

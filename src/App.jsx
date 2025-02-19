
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const menuItems = {
    "Starters": [
      { name: "Samosa", price: "$6.99", description: "Crispy pastry filled with spiced potatoes and peas" },
      { name: "Paneer Tikka", price: "$12.99", description: "Grilled cottage cheese marinated in yogurt and spices" }
    ],
    "Main Course": [
      { name: "Butter Chicken", price: "$18.99", description: "Tender chicken in rich tomato-butter sauce" },
      { name: "Dal Makhani", price: "$14.99", description: "Creamy black lentils simmered overnight" }
    ],
    "Desserts": [
      { name: "Gulab Jamun", price: "$5.99", description: "Sweet milk dumplings in rose syrup" },
      { name: "Rasmalai", price: "$6.99", description: "Soft cottage cheese dumplings in saffron milk" }
    ]
  };

  const testimonials = [
    { name: "Sarah Johnson", rating: 5, text: "Best Indian food I've had outside of India!" },
    { name: "Michael Chen", rating: 5, text: "Authentic flavors and excellent service." },
    { name: "Emma Williams", rating: 5, text: "The butter chicken is to die for!" }
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-serif text-orange-800"
            >
              Ruchi Indian Kitchen
            </motion.h1>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize ${
                    activeSection === section ? 'text-orange-600' : 'text-gray-600'
                  } hover:text-orange-500 transition-colors`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80")'
        }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Ruchi Indian Kitchen</h1>
          <p className="text-xl md:text-2xl mb-8">Authentic Indian Flavors, Perfectly Crafted</p>
          <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors">
            Reserve a Table
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="h-[400px] bg-cover bg-center rounded-lg" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")'
              }}
            ></div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine
                with a modern twist. Our chefs bring decades of experience from various regions
                of India, ensuring every dish tells a story of tradition and innovation.
              </p>
              <p className="text-gray-600">
                We take pride in using fresh, locally sourced ingredients combined with
                authentic Indian spices to create memorable dining experiences for our guests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-serif mb-4">{category}</h3>
                {items.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-orange-600">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
              "https://images.unsplash.com/photo-1541518763669-27fef04b14ea",
              "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
              "https://images.unsplash.com/photo-1542367592-8849eb6d6670",
              "https://images.unsplash.com/photo-1517244683847-7456b63c5969"
            ].map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="h-64 bg-cover bg-center rounded-lg hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${url})` }}
              ></motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{testimonial.text}</p>
                <p className="font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">123 Restaurant Street<br />New York, NY 10001</p>
              <p className="text-gray-600 mb-4">
                <strong>Hours:</strong><br />
                Mon-Thu: 11:30 AM - 10:00 PM<br />
                Fri-Sun: 11:30 AM - 11:00 PM
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Phone:</strong> (555) 123-4567<br />
                <strong>Email:</strong> info@ruchiindian.com
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Ruchi Indian Kitchen</h3>
              <p className="text-gray-400">Authentic Indian cuisine in the heart of New York</p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#menu" className="block text-gray-400 hover:text-white">Menu</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.982c2.937,0,3.285.011,4.445.064a6.087,6.087,0,0,1,2.042.379,3.408,3.408,0,0,1,1.265.823,3.408,3.408,0,0,1,.823,1.265,6.087,6.087,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.087,6.087,0,0,1-.379,2.042,3.643,3.643,0,0,1-2.088,2.088,6.087,6.087,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087,6.087,0,0,1-2.043-.379,3.408,3.408,0,0,1-1.265-.823,3.408,3.408,0,0,1-.823-1.265,6.087,6.087,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087,6.087,0,0,1,.379-2.042,3.408,3.408,0,0,1,.823-1.265,3.408,3.408,0,0,1,1.265-.823,6.087,6.087,0,0,1,2.043-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.074,8.074,0,0,0-2.67.511,5.392,5.392,0,0,0-1.949,1.27,5.392,5.392,0,0,0-1.27,1.949,8.074,8.074,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.074,8.074,0,0,0,.511,2.67,5.392,5.392,0,0,0,1.27,1.949,5.392,5.392,0,0,0,1.949,1.27,8.074,8.074,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.074,8.074,0,0,0,2.67-.511,5.625,5.625,0,0,0,3.219-3.219,8.074,8.074,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.074,8.074,0,0,0-.511-2.67,5.392,5.392,0,0,0-1.27-1.949,5.392,5.392,0,0,0-1.949-1.27,8.074,8.074,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Zm0,5.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Zm5.872-10.859a1.32,1.32,0,1,0,1.32,1.32A1.32,1.32,0,0,0,17.872,4.808Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

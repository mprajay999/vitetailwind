
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Sarah M.", text: "The best Indian cuisine I've ever experienced. The ambiance is absolutely stunning!", rating: 5 },
    { name: "James P.", text: "Exceptional service and authentic flavors. A true fine dining experience.", rating: 5 },
    { name: "Linda K.", text: "The attention to detail in both food and decoration is remarkable.", rating: 5 },
  ];

  const menuItems = {
    starters: [
      { name: "Tandoori Prawns", price: "₹595", description: "Marinated tiger prawns cooked in clay oven" },
      { name: "Gilafi Seekh Kebab", price: "₹495", description: "Minced lamb with bell peppers and spices" },
    ],
    mains: [
      { name: "Butter Chicken", price: "₹695", description: "Classic creamy tomato curry with tender chicken" },
      { name: "Dal Makhani", price: "₹445", description: "Black lentils slow cooked with cream" },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "₹245", description: "Sweet milk dumplings in rose syrup" },
      { name: "Rasmalai", price: "₹295", description: "Cottage cheese dumplings in saffron milk" },
    ],
  };

  return (
    <div className="bg-[#FDF5E6] text-[#242424]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#C6A664] text-2xl font-bold"
            >
              Ruchi Indian Kitchen
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Menu", "Reservations", "Gallery", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-[#C6A664] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
        id="home"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3')" }}
        >
          <div className="absolute inset-0 bg-black/50">
            <div className="h-full flex flex-col justify-center items-center text-white">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-bold text-[#C6A664] mb-6"
              >
                Experience Royal Indian Cuisine
              </motion.h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#800020] text-white px-8 py-3 rounded-full hover:bg-[#C6A664] transition-colors"
              >
                Reserve Table
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4"
        id="about"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#800020] mb-8">Welcome to Ruchi</h2>
          <p className="text-lg leading-relaxed">
            Established in 2010, Ruchi Indian Kitchen brings the authentic flavors of India with a modern twist.
            Our master chefs create culinary masterpieces using traditional recipes and premium ingredients.
          </p>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section className="py-20 bg-white" id="menu">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#800020] mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#FDF5E6] p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#800020] capitalize mb-4">{category}</h3>
                {items.map((item) => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{item.name}</h4>
                      <span className="text-[#C6A664]">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#242424]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#C6A664] mb-12">What Our Guests Say</h2>
          <motion.div 
            key={activeTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white"
          >
            <p className="text-lg mb-4">"{testimonials[activeTestimonial].text}"</p>
            <p className="text-[#C6A664]">- {testimonials[activeTestimonial].name}</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#242424] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#C6A664] font-bold mb-4">Hours</h3>
            <p>Monday - Sunday</p>
            <p>12:00 PM - 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-[#C6A664] font-bold mb-4">Contact</h3>
            <p>123 Cuisine Street</p>
            <p>New Delhi, India</p>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-[#C6A664] font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C6A664]">Instagram</a>
              <a href="#" className="hover:text-[#C6A664]">Facebook</a>
              <a href="#" className="hover:text-[#C6A664]">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

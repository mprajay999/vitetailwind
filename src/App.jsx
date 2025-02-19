
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-2xl font-serif"
            >
              TSUKI IZAKAYA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'reservations', 'testimonials'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-gray-300 cursor-pointer capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580253464709-9f8881251e49?q=80')`
        }}
      >
        <div className="h-full bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-4">TSUKI IZAKAYA</h1>
            <p className="text-xl md:text-2xl">Authentic Japanese Dining Experience</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-neutral-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Established in 2015, Tsuki Izakaya brings the authentic taste of Japan to your table. 
                Our master chefs, trained in the heart of Tokyo, craft each dish with precision and care, 
                using only the freshest ingredients sourced both locally and from Japan.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80"
                alt="Restaurant Interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sushi & Sashimi",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80",
                items: ["Salmon Nigiri", "Tuna Roll", "Assorted Sashimi"]
              },
              {
                title: "Hot Dishes",
                image: "https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80",
                items: ["Miso Ramen", "Yakitori", "Tempura"]
              },
              {
                title: "Drinks",
                image: "https://images.unsplash.com/photo-1620451955631-9a2a69fcfde9?q=80",
                items: ["Premium Sake", "Japanese Beer", "Matcha Tea"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
              >
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reservations Section */}
      <motion.section
        id="reservations"
        className="py-20 bg-neutral-900 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Make a Reservation</h2>
          <div className="max-w-md mx-auto">
            <p className="text-center mb-8">
              For reservations, please call us at (555) 123-4567 or book online below.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-3 rounded-lg font-medium"
              onClick={() => window.open('https://your-booking-system.com', '_blank')}
            >
              Book a Table
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-neutral-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "The most authentic Japanese food I've had outside Japan. Amazing atmosphere!",
                author: "Sarah M."
              },
              {
                text: "Exceptional service and incredible sake selection. A must-visit!",
                author: "John D."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-medium">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>5:00 PM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Contact</h3>
              <p>(555) 123-4567</p>
              <p>info@tsukiizakaya.com</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Location</h3>
              <p>123 Japanese Street</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p>© 2024 Tsuki Izakaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

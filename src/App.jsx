
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { title: 'Emergency Care', icon: '🏥' },
    { title: 'Pediatrics', icon: '👶' },
    { title: 'Surgery', icon: '⚕️' },
    { title: 'Cardiology', icon: '❤️' },
    { title: 'Diagnostics', icon: '🔬' },
    { title: 'Mental Health', icon: '🧠' },
  ];

  const departments = [
    { title: 'Orthopedics', icon: '🦴' },
    { title: 'Neurology', icon: '🧠' },
    { title: 'Oncology', icon: '🎗️' },
    { title: 'Gynecology', icon: '🩺' },
    { title: 'Radiology', icon: '📡' },
    { title: 'Gastroenterology', icon: '🍽️' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Columbus Healthcare</div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition">Home</a>
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#departments" className="hover:text-blue-600 transition">Departments</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="text-2xl text-blue-600 focus:outline-none" 
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? '✖️' : '☰'}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block hover:text-blue-600 transition" onClick={closeMobileMenu}>Home</a>
              <a href="#about" className="block hover:text-blue-600 transition" onClick={closeMobileMenu}>About</a>
              <a href="#services" className="block hover:text-blue-600 transition" onClick={closeMobileMenu}>Services</a>
              <a href="#departments" className="block hover:text-blue-600 transition" onClick={closeMobileMenu}>Departments</a>
              <a href="#contact" className="block hover:text-blue-600 transition" onClick={closeMobileMenu}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Committed to Your Health</h1>
            <p className="text-xl mb-8">Providing exceptional healthcare with compassion and expertise</p>
            <a href="#contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                Book an Appointment
              </button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Medical Team"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <p className="text-lg mb-6">
                  Columbus Healthcare Hospital has been serving our community for over 50 years. We are committed to providing the highest quality healthcare services with compassion and expertise.
                </p>
                <p className="text-lg">
                  Our state-of-the-art facilities and dedicated team of healthcare professionals ensure that every patient receives personalized care and attention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>Comprehensive care and treatment provided by our expert medical staff.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold mb-2">{dept.title}</h3>
                <p>Dedicated professionals providing specialized care in {dept.title.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Patient Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow"
            >
              <p className="italic mb-4">"The care I received at Columbus Healthcare was exceptional. The staff was professional and caring."</p>
              <p className="font-bold">- Sarah Johnson</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow"
            >
              <p className="italic mb-4">"Top-notch facilities and amazing doctors. I couldn't have asked for better care."</p>
              <p className="font-bold">- Michael Smith</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-4">📍 123 Healthcare Avenue, Columbus, OH</p>
              <p className="mb-4">📞 (555) 123-4567</p>
              <p className="mb-4">✉️ info@columbushealthcare.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
              <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded" required></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Columbus Healthcare</h3>
              <p>Providing exceptional healthcare services since 1970.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#departments" className="hover:text-blue-400">Departments</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form className="flex flex-col space-y-2">
                <input type="email" placeholder="Enter your email" className="w-full p-2 rounded text-black" required />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Columbus Healthcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

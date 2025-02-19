
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - 100 && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-['Poppins'] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-[#1a237e]"
            >
              RAGNOVA
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item ? 'text-[#009688]' : 'text-gray-600'
                  } hover:text-[#009688] transition-colors`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button className="bg-[#1a237e] text-white px-4 py-2 rounded-md hover:bg-[#009688] transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#009688]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a237e] to-[#009688] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We craft innovative digital solutions that empower businesses to thrive in the modern world.
          </p>
          <button className="bg-white text-[#1a237e] px-8 py-3 rounded-md hover:bg-[#f5f5f5] transition-colors">
            Start Your Journey
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive digital solutions for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with cutting-edge technologies.',
                icon: '🌐'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                icon: '📱'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and DevOps services.',
                icon: '☁️'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1a237e] mb-6">About Ragnova</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Ragnova has been at the forefront of digital innovation,
                helping businesses transform their digital presence and operations.
                Our team of experts brings together years of experience in technology
                and business solutions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '100+', label: 'Projects' },
                  { number: '50+', label: 'Clients' },
                  { number: '15+', label: 'Experts' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#009688]">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team at work"
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Our Projects</h2>
            <p className="text-gray-600">Showcasing our best work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-scale e-commerce solution with integrated payment systems.',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028'
              },
              {
                title: 'Healthcare App',
                description: 'Mobile application for remote patient monitoring.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
              },
              {
                title: 'Financial Dashboard',
                description: 'Real-time analytics platform for financial institutions.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688]"
                ></textarea>
              </div>
              <button className="bg-[#1a237e] text-white px-6 py-3 rounded-md hover:bg-[#009688] transition-colors">
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                <p className="text-gray-600">123 Tech Street, Innovation City, 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
                <p className="text-gray-600">Email: contact@ragnova.com</p>
                <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">RAGNOVA</h2>
              <p className="text-white/80">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'About Us', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button className="text-white/80 hover:text-white">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <button
                    key={social}
                    className="text-white/80 hover:text-white"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/80">
              © 2024 Ragnova IT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

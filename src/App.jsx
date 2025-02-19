
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "💻"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      icon: "☁️"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting and digital transformation.",
      icon: "🔍"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce solution",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      title: "Healthcare App",
      description: "Developed a telemedicine platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
    },
    {
      title: "Financial Dashboard",
      description: "Created an analytics dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-[#2A3B4C]"
          >
            Cruize IT Solutions
          </motion.h1>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-[#00B4D8] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#00B4D8] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#00B4D8] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#00B4D8] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-[#00B4D8] text-white px-6 py-2 rounded-full"
          >
            Get Started
          </motion.button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-[70px] left-0 w-full bg-white z-40 md:hidden"
        >
          <div className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-[#00B4D8]">Home</a>
            <a href="#services" className="hover:text-[#00B4D8]">Services</a>
            <a href="#about" className="hover:text-[#00B4D8]">About</a>
            <a href="#portfolio" className="hover:text-[#00B4D8]">Portfolio</a>
            <a href="#contact" className="hover:text-[#00B4D8]">Contact</a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home"
        className="pt-20 min-h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <motion.h2
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Transforming Ideas Into Digital Solutions
          </motion.h2>
          <p className="text-xl mb-8">Innovative technology solutions for modern businesses</p>
          <div className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#00B4D8] px-8 py-3 rounded-full"
            >
              Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white px-8 py-3 rounded-full"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="mb-4">
                Cruize IT Solutions is a leading technology partner helping businesses navigate
                the digital landscape. With years of experience and a passionate team of experts,
                we deliver innovative solutions that drive growth and efficiency.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-[#00B4D8]">100+</h4>
                  <p>Clients</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-[#00B4D8]">250+</h4>
                  <p>Projects</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-[#00B4D8]">15+</h4>
                  <p>Years</p>
                </div>
              </div>
            </motion.div>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border rounded-lg"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#00B4D8] text-white px-8 py-3 rounded-full"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937967!2d2.2922926158839744!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647951205455!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A3B4C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cruize IT Solutions</h3>
              <p>Transforming businesses through technology</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded-l-lg text-black"
                />
                <button className="bg-[#00B4D8] px-4 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00B4D8] text-white p-4 rounded-full shadow-lg"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}

export default App;

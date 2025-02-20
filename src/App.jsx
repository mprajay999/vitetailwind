
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    // Cleanup event listeners on unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#1A237E] text-white z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold"
            >
              Cruize IT Solutions
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-[#FF6F00] transition">
                Home
              </a>
              <a href="#about" className="hover:text-[#FF6F00] transition">
                About
              </a>
              <a href="#services" className="hover:text-[#FF6F00] transition">
                Services
              </a>
              <a href="#portfolio" className="hover:text-[#FF6F00] transition">
                Portfolio
              </a>
              <a href="#contact" className="hover:text-[#FF6F00] transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen relative bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[#1A237E] opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Innovate. Transform. Succeed.</h1>
            <p className="text-xl mb-8">Your trusted partner in digital transformation</p>
            <a href="#contact">
              <button className="bg-[#FF6F00] px-8 py-3 rounded-full hover:bg-[#FF8F00] transition">
                Get Started
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#1A237E] mb-6">About Us</h2>
              <p className="text-[#333333] mb-4">
                Cruize IT Solutions is a leading technology company specializing in innovative digital solutions.
                With over a decade of experience, we've helped businesses transform their digital presence and achieve remarkable growth.
              </p>
              <p className="text-[#333333]">
                Our team of experts combines technical excellence with creative problem-solving to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies.",
                icon: "🌐"
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                icon: "📱"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services.",
                icon: "☁️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#757575]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project One",
                description: "A cutting-edge web application for e-commerce solutions.",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Project Two",
                description: "A mobile app designed to streamline business operations.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                title: "Project Three",
                description: "A robust cloud infrastructure setup for scalable applications.",
                image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#757575]">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1A237E] mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#333333] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border focus:border-[#FF6F00] outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border focus:border-[#FF6F00] outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 rounded-lg border focus:border-[#FF6F00] outline-none h-32 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF6F00] text-white px-8 py-3 rounded-full hover:bg-[#FF8F00] transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A237E] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cruize IT Solutions</h3>
              <p className="text-sm">
                Transforming businesses through technology
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-sm">Email: info@cruizeitsolutions.com</p>
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6F00] transition">
                  LinkedIn
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6F00] transition">
                  Twitter
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6F00] transition">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p>&copy; 2024 Cruize IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

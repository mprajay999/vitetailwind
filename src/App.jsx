
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            Ragnova IT
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                activeClass="text-blue-600"
                spy={true}
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Mobile Menu */}
          {/* Future implementation for mobile menu can be added here */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Innovative IT Solutions for Your Business
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Transforming ideas into powerful digital solutions
              </p>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block"
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ragnova IT Solutions is dedicated to delivering top-notch technology services that drive business growth and innovation. Our team of experts leverages the latest technologies to provide customized solutions tailored to meet your unique business needs.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="mt-10 md:mt-0 md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To empower businesses with innovative technology solutions that enhance efficiency, security, and growth.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading IT solutions provider recognized for transforming businesses through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive IT solutions tailored to your needs</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Software Development',
                desc: 'Custom software solutions built with cutting-edge technologies',
                icon: '💻'
              },
              {
                title: 'Cloud Services',
                desc: 'Secure and scalable cloud infrastructure solutions',
                icon: '☁️'
              },
              {
                title: 'Cybersecurity',
                desc: 'Advanced security measures to protect your digital assets',
                icon: '🔒'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Our Work</h2>
            <p className="text-gray-600">A showcase of our latest projects and achievements</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`https://source.unsplash.com/random/800x600?tech,${item}`}
                  alt={`Project ${item}`}
                  className="w-full h-64 object-cover"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold">Project {item}</h3>
                  <p className="text-gray-200">Technology Solution</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold">Get In Touch</h2>
              <p className="text-gray-300">We’d love to hear from you! Whether you have a question or want to work together, send us a message.</p>
            </motion.div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0 cursor-pointer" onClick={() => scroll.scrollToTop()}>
              Ragnova IT
            </div>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 Ragnova IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

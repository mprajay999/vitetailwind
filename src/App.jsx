
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-green-800/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=120"
                alt="USF Logo"
                className="h-10 w-auto rounded"
              />
              <span className="ml-2 text-white font-semibold text-lg">
                University of South Florida
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                'Home',
                'About',
                'Admissions',
                'Academics',
                'Research',
                'Campus Life',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-green-200 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-green-800 p-4"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[
              'Home',
              'About',
              'Admissions',
              'Academics',
              'Research',
              'Campus Life',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white py-2 hover:text-green-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920')",
        }}
        id="home"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to the University of South Florida
            </h1>
            <p className="text-xl text-white mb-8">
              Transforming lives through education, research, and innovation
            </p>
            <a href="#admissions">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        className="py-20 bg-white"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About USF</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800"
                alt="Campus Life"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The University of South Florida is a prestigious institution dedicated to academic excellence, research innovation, and community engagement. Founded in 1956, we have grown to become one of the nation's leading public research universities.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>✓ Ranked among top public universities</li>
                <li>✓ World-class research facilities</li>
                <li>✓ Diverse student community</li>
                <li>✓ Beautiful Tampa Bay campus</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Admissions Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
        id="admissions"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Admissions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800"
                alt="Admissions"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Join the University of South Florida and embark on a journey of academic and personal growth. Our comprehensive admissions process ensures that we select motivated and talented individuals committed to excellence.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>✓ Undergraduate Admissions</li>
                <li>✓ Graduate Admissions</li>
                <li>✓ International Applicants</li>
                <li>✓ Financial Aid and Scholarships</li>
              </ul>
              <a href="#contact">
                <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Academic Programs Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="py-20 bg-white"
        id="academics"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Undergraduate Programs', 'Graduate Studies', 'Research Opportunities'].map((program) => (
              <motion.div
                key={program}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4">{program}</h3>
                <p className="text-gray-600">
                  Discover our comprehensive range of programs designed to prepare you for success in your chosen field.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
        id="research"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Research</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800"
                alt="Research"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                At USF, research is at the core of our mission. Our faculty and students engage in groundbreaking studies that address real-world challenges and drive innovation across various disciplines.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>✓ Cutting-edge laboratories</li>
                <li>✓ Collaborative projects</li>
                <li>✓ Funding and grants</li>
                <li>✓ Publications and conferences</li>
              </ul>
              <a href="#academics">
                <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Explore Research
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Campus Life Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        className="py-20 bg-white"
        id="campus-life"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Campus Life</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800"
                alt="Campus Life"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Experience vibrant campus life at USF, where diversity and community spirit come together. Engage in a multitude of clubs, organizations, and events that cater to varied interests and passions.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>✓ Student Organizations</li>
                <li>✓ Sports and Recreation</li>
                <li>✓ Cultural Events</li>
                <li>✓ Community Service</li>
              </ul>
              <a href="#contact">
                <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Get Involved
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-4">
                Whether you have questions about admissions, programs, or campus life, our team is here to help.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>📍 4202 E Fowler Ave, Tampa, FL 33620</li>
                <li>📞 Phone: (813) 974-2011</li>
                <li>✉️ Email: admissions@usf.edu</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <form
                action="#"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <a href="#home" className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition">
        ↑
      </a>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>4202 E Fowler Ave</p>
              <p>Tampa, FL 33620</p>
              <p>Phone: (813) 974-2011</p>
              <p>Email: info@usf.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-green-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#academics" className="hover:text-green-200">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-green-200">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#research" className="hover:text-green-200">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#campus-life" className="hover:text-green-200">
                    Campus Life
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-200">
                    MyUSF
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-200">
                    Canvas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-200">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-200">
                    Library
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-200" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-green-200" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-green-200" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-green-200" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>© 2024 University of South Florida. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

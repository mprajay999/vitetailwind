
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="University Logo"
              className="h-12"
            />
            <span className="ml-2 text-2xl font-bold text-blue-900">
              Elite University
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">
              Programs
            </a>
            <a href="#faculty" className="text-gray-700 hover:text-blue-600 transition">
              Faculty
            </a>
            <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition">
              Admissions
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a
              href="#programs"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              Programs
            </a>
            <a
              href="#faculty"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              Faculty
            </a>
            <a
              href="#admissions"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              Admissions
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <motion.div
          className="relative h-full flex flex-col justify-center items-center text-white text-center px-4"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Shape Your Future</h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover Excellence in Education at Elite University
          </p>
          <a
            href="#admissions"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Apply Now
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Campus Life"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Legacy of Excellence</h3>
              <p className="text-gray-600 mb-4">
                Founded in 1920, Elite University has been at the forefront of education and research for over a century.
                Our commitment to academic excellence, innovation, and global perspective has shaped generations of leaders.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ World-class faculty and research facilities</li>
                <li>✓ Global network of alumni and partners</li>
                <li>✓ Innovative curriculum and teaching methods</li>
                <li>✓ Strong industry connections</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        id="programs"
        className="py-20 bg-gray-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program Cards */}
            {['Business & Management', 'Engineering & Technology', 'Arts & Sciences'].map((program) => (
              <motion.div
                key={program}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4">{program}</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive courses designed to prepare you for real-world challenges and opportunities.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Faculty Section */}
      <motion.section
        id="faculty"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Faculty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Faculty Cards */}
            {['Dr. Jane Smith', 'Prof. John Doe', 'Dr. Emily Johnson'].map((faculty) => (
              <div key={faculty} className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={`https://via.placeholder.com/150?text=${encodeURIComponent(faculty)}`}
                  alt={faculty}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{faculty}</h3>
                <p className="text-gray-600 text-center">Professor of Excellence</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Admissions Section */}
      <motion.section
        id="admissions"
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Admissions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Join Elite University</h3>
              <p className="text-gray-600 mb-4">
                Embark on a transformative educational journey. Our admissions process is designed to identify passionate and
                driven individuals who aspire to make a difference.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Undergraduate Admissions</li>
                <li>✓ Graduate Admissions</li>
                <li>✓ International Students</li>
                <li>✓ Scholarships and Financial Aid</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Admissions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Whether you have a question about admissions, programs, or anything else, our team is ready to answer all your
                questions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Address:</strong> 123 University Ave, Cityville, ST 12345
                </li>
                <li>
                  <strong>Phone:</strong> (555) 123-4567
                </li>
                <li>
                  <strong>Email:</strong> info@eliteuniversity.edu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elite University</h3>
              <p className="text-gray-400">Shaping tomorrow's leaders today</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition" onClick={handleLinkClick}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition" onClick={handleLinkClick}>
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-white transition" onClick={handleLinkClick}>
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition" onClick={handleLinkClick}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                123 University Ave<br />
                Cityville, ST 12345<br />
                Phone: (555) 123-4567<br />
                Email: <a href="mailto:info@eliteuniversity.edu" className="hover:text-white">info@eliteuniversity.edu</a>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.952 2.215-4.952 4.952 0 .388.044.765.128 1.124-4.116-.207-7.76-2.175-10.204-5.165a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.214 2.191 4.096a4.904 4.904 0 0 1-2.24-.617v.061c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.232.084c.63 1.965 2.445 3.392 4.6 3.432A9.867 9.867 0 0 1 0 19.54a13.934 13.934 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433a2.024 2.024 0 1 1 0-4.048 2.024 2.024 0 0 1 0 4.048zm15.14 13.019h-3.5v-5.569c0-1.328-.026-3.037-1.85-3.037-1.852 0-2.136 1.447-2.136 2.94v5.669h-3.5V9h3.37v1.561h.048c.47-.89 1.616-1.829 3.332-1.829 3.567 0 4.222 2.347 4.222 5.392v6.216z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.517 2.513 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.78.131 4.607.37 3.678 1.299 2.749 2.228 2.51 3.401 2.451 4.673 2.393 5.953 2.379 6.362 2.379 12s.014 6.047.072 7.327c.059 1.272.298 2.445 1.227 3.374.929.929 2.102 1.168 3.374 1.227 1.28.058 1.689.072 7.327.072s6.047-.014 7.327-.072c1.272-.059 2.445-.298 3.374-1.227.929-.929 1.168-2.102 1.227-3.374.058-1.28.072-1.689.072-7.327s-.014-6.047-.072-7.327c-.059-1.272-.298-2.445-1.227-3.374C19.445.37 18.272.131 17 .072 15.72.014 15.311 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                  </svg>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Elite University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

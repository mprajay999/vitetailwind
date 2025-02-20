
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const App = () => {
  useEffect(() => {
    // Chatbot Integration (Tawk.to)
    const Tawk_API = Tawk_API || {};
    const Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/your_tawkto_property_id/default';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-blue-900 text-white z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/1200px-Great_Seal_of_the_United_States_%28obverse%29.svg.png"
              alt="US Embassy Logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-200 transition"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-200 transition"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-200 transition"
            >
              Services
            </Link>
            <Link
              to="news"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-200 transition"
            >
              News
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-200 transition"
            >
              Contact
            </Link>
            <button className="bg-red-700 px-4 py-1 rounded hover:bg-red-800">
              English
            </button>
          </nav>

          {/* Mobile Menu (Optional) */}
          {/* Implement mobile menu here if needed */}
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 relative h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to the U.S. Embassy Hyderabad
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Strengthening ties between the United States and India
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            About Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>
                To advance the interests of the United States and strengthen the
                relationship between the American and Indian people.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>
                To foster diplomatic relations, promote cultural exchange, and
                support American citizens abroad.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p>
                Upholding integrity, transparency, and commitment to excellent
                service in all our endeavors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Visa Services</h3>
              <p>
                Information about visa applications, requirements, and processing
                times.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Passport Services</h3>
              <p>
                Assistance with passport renewals, applications, and emergency
                travel documents.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Consular Assistance</h3>
              <p>
                Support for American citizens abroad, including legal and
                emergency services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Embassy Reopens for Public Services
              </h3>
              <p>
                The U.S. Embassy in Hyderabad has resumed full operations, offering
                a range of consular services to the public. Extended hours and
                online appointment systems are now available.
              </p>
              <p className="text-sm text-gray-500 mt-2">April 20, 2024</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                New Visa Categories Announced
              </h3>
              <p>
                The Department of State has introduced new visa categories to
                facilitate specialized travel and foster greater collaboration in
                specific sectors.
              </p>
              <p className="text-sm text-gray-500 mt-2">March 15, 2024</p>
            </motion.div>
            {/* Add more news cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Embassy Address</h3>
              <p>
                1-8-323, Chiran Fort Lane, Begumpet, Secunderabad 500003
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p>Phone: +91-40-4033-8300</p>
                <p>Email: HyderabadUSC@state.gov</p>
              </div>
            </div>
            <form className="space-y-4">
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
                rows="4"
                className="w-full p-2 border rounded"
                required
              ></textarea>
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="news"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    U.S. Department of State
                  </a>
                </li>
                <li>
                  <a
                    href="https://travel.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    Travel.State.gov
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.usembassy.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    U.S. Embassies Worldwide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect with Us</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://facebook.com/USEmbassyHyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/USEmbassyHyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/us-embassy-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 mb-4 rounded text-black"
                  required
                />
                <button className="bg-red-700 px-4 py-2 rounded hover:bg-red-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 U.S. Embassy Hyderabad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

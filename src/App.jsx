
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-2xl font-semibold cursor-pointer"
              onClick={(e) => handleScroll(e, 'home')}
            >
              IKIGAI
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-white hover:text-red-500 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Book Now
              </button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              {/* Implement mobile menu toggle if needed */}
              {/* Placeholder for mobile menu */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Japanese Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Authentic Japanese Cuisine</h1>
            <p className="text-lg md:text-2xl mb-8">
              Experience the art of traditional Japanese dining
            </p>
            <button
              onClick={(e) => handleScroll(e, 'menu')}
              className="bg-red-600 text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-red-700 transition-colors"
            >
              View Menu
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Ikigai brings the authentic flavors and traditions of Japanese
                cuisine to your table. Our master chefs, trained in Japan, craft each dish with
                precision and care, ensuring an unforgettable dining experience.
              </p>
              <p className="text-gray-600">
                We source the finest ingredients locally and from Japan to create dishes that honor
                traditional recipes while embracing modern culinary innovations.
              </p>
            </div>
            <div className="relative h-80 md:h-[400px]">
              <motion.img
                src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="Chef preparing sushi"
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">Our Menu</h2>
            <p className="text-gray-600 mt-4">
              Explore our diverse range of authentic Japanese dishes crafted with the finest ingredients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sample Menu Items */}
            {[
              {
                name: 'Sushi Platter',
                description: 'Assorted fresh sushi rolls with premium fish.',
                price: '$25',
                image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Ramen Noodle Soup',
                description: 'Traditional Japanese ramen with rich broth and tender noodles.',
                price: '$15',
                image: 'https://images.unsplash.com/photo-1553621042-4b740dfeb227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Tempura Udon',
                description: 'Udon noodles served with crispy tempura vegetables and shrimp.',
                price: '$18',
                image: 'https://images.unsplash.com/photo-1605758456308-3c7f311e24e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-red-600 font-bold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">Gallery</h2>
            <p className="text-gray-600 mt-4">
              A glimpse into our restaurant ambiance and delectable dishes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sample Gallery Images */}
            {[
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1553621042-fff531ba4e6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1541529086526-5b8af0c2e6b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1576791673321-6d221c1f9d70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            ].map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-600 mt-4">
              We'd love to hear from you! Whether you have a question about our menu, reservations, or any other inquiries.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> 123 Sakura Street, Tokyo, Japan
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> contact@ikigaijapan.com
              </p>
              <div className="mt-4 flex space-x-4">
                {/* Social Media Links */}
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.566-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.897 4.897 0 01.96 9.081v.062a4.916 4.916 0 003.946 4.817 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.042.25 2.517.415a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.165.475.357 1.311.415 2.517.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.042-.415 2.517a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.475.165-1.311.357-2.517.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.042-.25-2.517-.415a4.92 4.92 0 01-1.675-1.095 4.92 4.92 0 01-1.095-1.675c-.165-.475-.357-1.311-.415-2.517C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.042.415-2.517a4.902 4.902 0 011.095-1.675 4.902 4.902 0 011.675-1.095c.475-.165 1.311-.357 2.517-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.053.072 5.775.131 4.756.342 4.042.659a6.918 6.918 0 00-2.483 1.604A6.918 6.918 0 00.659 4.042C.342 4.756.131 5.775.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.278.27 2.297.587 3.011a6.918 6.918 0 001.604 2.483 6.918 6.918 0 002.483 1.604c.714.317 1.733.528 3.011.587C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.278-.059 2.297-.27 3.011-.587a6.918 6.918 0 002.483-1.604 6.918 6.918 0 001.604-2.483c.317-.714.528-1.733.587-3.011.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.059-1.278-.27-2.297-.587-3.011a6.918 6.918 0 00-1.604-2.483 6.918 6.918 0 00-2.483-1.604c-.714-.317-1.733-.528-3.011-.587C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.042.25 2.517.415a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.165.475.357 1.311.415 2.517.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.042-.415 2.517a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.475.165-1.311.357-2.517.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.042-.25-2.517-.415a4.92 4.92 0 01-1.675-1.095 4.92 4.92 0 01-1.095-1.675c-.165-.475-.357-1.311-.415-2.517C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.042.415-2.517a4.902 4.902 0 011.095-1.675A4.902 4.902 0 015.083 2.0c.475-.165 1.311-.357 2.517-.415C8.416 1.825 8.796 1.837 12 1.837zm0-1.837C8.741 0 8.332.014 7.053.072 5.775.131 4.756.342 4.042.659a6.918 6.918 0 00-2.483 1.604A6.918 6.918 0 00.659 4.042C.342 4.756.131 5.775.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.278.27 2.297.587 3.011a6.918 6.918 0 001.604 2.483 6.918 6.918 0 002.483 1.604c.714.317 1.733.528 3.011.587C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.278-.059 2.297-.27 3.011-.587a6.918 6.918 0 002.483-1.604 6.918 6.918 0 001.604-2.483c.317-.714.528-1.733.587-3.011.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.059-1.278-.27-2.297-.587-3.011a6.918 6.918 0 00-1.604-2.483 6.918 6.918 0 00-2.483-1.604c-.714-.317-1.733-.528-3.011-.587C15.668.014 15.259 0 12 0z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <div className="md:w-1/2">
              <form className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Ikigai Japanese Restaurant. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* Footer Social Media Links */}
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.566-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.897 4.897 0 01.96 9.081v.062a4.916 4.916 0 003.946 4.817 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.042.25 2.517.415a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.165.475.357 1.311.415 2.517.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.042-.415 2.517a4.902 4.902 0 01-1.095 1.675 4.902 4.902 0 01-1.675 1.095c-.475.165-1.311.357-2.517.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.042-.25-2.517-.415a4.92 4.92 0 01-1.675-1.095 4.92 4.92 0 01-1.095-1.675c-.165-.475-.357-1.311-.415-2.517C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.042.415-2.517a4.92 4.92 0 011.095-1.675A4.92 4.92 0 015.083 2.0c.475-.165 1.311-.357 2.517-.415C8.416 1.825 8.796 1.837 12 1.837zm0-1.837C8.741 0 8.332.014 7.053.072 5.775.131 4.756.342 4.042.659a6.918 6.918 0 00-2.483 1.604A6.918 6.918 0 00.659 4.042C.342 4.756.131 5.775.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.278.27 2.297.587 3.011a6.918 6.918 0 001.604 2.483 6.918 6.918 0 002.483 1.604c.714.317 1.733.528 3.011.587C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.278-.059 2.297-.27 3.011-.587a6.918 6.918 0 002.483-1.604 6.918 6.918 0 001.604-2.483c.317-.714.528-1.733.587-3.011.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.059-1.278-.27-2.297-.587-3.011a6.918 6.918 0 00-1.604-2.483 6.918 6.918 0 00-2.483-1.604c-.714-.317-1.733-.528-3.011-.587C15.668.014 15.259 0 12 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.126 10.126 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.952 13.952 0 011.671 3.149a4.916 4.916 0 001.523 6.573A4.897 4.897 0 01.96 9.081v.062a4.916 4.916 0 003.946 4.816 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.055 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

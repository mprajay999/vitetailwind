
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const chatbotTheme = {
    background: '#f5f8fb',
    fontFamily: 'sans-serif',
    headerBgColor: '#4CAF50',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#4CAF50',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4CAF50',
  };

  const chatbotSteps = [
    {
      id: 'welcome',
      message: 'Hello! How can I assist you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'reserve', label: 'Reserve a Table', trigger: 'reserve' },
        { value: 'menu', label: 'View Menu', trigger: 'menu' },
        { value: 'hours', label: 'Operating Hours', trigger: 'hours' },
        { value: 'contact', label: 'Contact Information', trigger: 'contact' },
      ],
    },
    {
      id: 'reserve',
      message: 'You can reserve a table by clicking the "Reserve a Table" button on our website.',
      trigger: 'options',
    },
    {
      id: 'menu',
      message: 'Check out our delicious menu in the "Our Menu" section.',
      trigger: 'options',
    },
    {
      id: 'hours',
      message: 'We are open Mon-Sun: 11:00 AM - 10:00 PM.',
      trigger: 'options',
    },
    {
      id: 'contact',
      message: 'You can reach us at (555) 123-4567 or info@raagaindiangrand.com.',
      trigger: 'options',
    },
  ];

  return (
    <div className="font-sans">
      {/* Fixed Header */}
      <header className="fixed w-full bg-black/80 text-white z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif cursor-pointer" onClick={() => scroll.scrollToTop()}>
            Raaga Indian Grand
          </h1>
          <nav className="hidden md:flex space-x-8">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              Menu
            </Link>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            alt="Indian Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full flex flex-col justify-center items-center text-white text-center px-4"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Experience the Authentic Flavors of India</h2>
          <p className="text-xl mb-8">A culinary journey through tradition and taste</p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition cursor-pointer"
          >
            Reserve a Table
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-4xl font-serif mb-6">About Us</h3>
              <p className="text-gray-600 mb-6">
                At Raaga Indian Grand, we bring you the finest Indian cuisine crafted with authentic spices and traditional recipes. Our chefs combine centuries-old cooking techniques with modern culinary innovations to create an unforgettable dining experience.
              </p>
              <p className="text-gray-600">
                Each dish tells a story of India's rich culinary heritage, carefully prepared to delight your senses and transport you to the vibrant streets of India.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Our Menu</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Menu categories */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-serif mb-6">Starters</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Samosa</span>
                  <span>$6</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Paneer Tikka</span>
                  <span>$12</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-serif mb-6">Main Course</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Butter Chicken</span>
                  <span>$18</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dal Makhani</span>
                  <span>$14</span>
                </div>
              </div>
            </div>
            {/* Additional Menu Categories */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-serif mb-6">Beverages</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Mango Lassi</span>
                  <span>$5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Masala Chai</span>
                  <span>$3</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-serif mb-6">Desserts</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Gulab Jamun</span>
                  <span>$4</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Ras Malai</span>
                  <span>$5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Gallery</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Sample Gallery Images */}
            <img
              src="https://images.unsplash.com/photo-1555992336-03a23c7d0b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1562967916-eb82221dfb39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 5"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Dish 6"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-serif text-center mb-12">Get in Touch</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-serif mb-4">Location</h4>
                <p className="text-gray-600">123 Culinary Street</p>
                <p className="text-gray-600">Foodie City, FC 12345</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-serif mb-4">Contact</h4>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@raagaindiangrand.com</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-serif mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-serif mb-4">Raaga Indian Grand</h5>
              <p className="text-gray-400">Authentic Indian Cuisine</p>
            </div>
            <div>
              <h5 className="text-xl font-serif mb-4">Hours</h5>
              <p className="text-gray-400">Mon-Sun: 11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h5 className="text-xl font-serif mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Raaga Indian Grand. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Chat with us"
      >
        💬
      </button>

      {/* Chatbot Component */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-lg z-50">
          <button
            onClick={toggleChatbot}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition"
            aria-label="Close chatbot"
          >
            ✖️
          </button>
          <ThemeProvider theme={chatbotTheme}>
            <ChatBot steps={chatbotSteps} />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default App;

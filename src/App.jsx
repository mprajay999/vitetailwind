
// App.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  // Navigation items
  const navItems = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];

  // Services data
  const services = [
    {
      title: 'IT Consulting',
      icon: '💡',
      description: 'Strategic technology guidance to optimize your business operations.',
    },
    {
      title: 'Software Development',
      icon: '💻',
      description: 'Custom software solutions tailored to your specific needs.',
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      description: 'Comprehensive security solutions to protect your digital assets.',
    },
    {
      title: 'Cloud Services',
      icon: '☁️',
      description: 'Scalable cloud solutions for modern business needs.',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      text: 'Ragnova IT Solutions transformed our business operations with their innovative solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateHub',
      text: 'Their cybersecurity services have given us peace of mind in this digital age.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  ];

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  // Function to handle smooth scroll
  const handleNavClick = (e, section) => {
    e.preventDefault();
    const sectionRef = document.getElementById(section.toLowerCase());
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle chatbot message submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Simple bot response (echo)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: "I'm here to help! How else can I assist you?" },
      ]);
    }, 1000);
  };

  // Scroll to bottom when messages update
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={(e) => handleNavClick(e, 'Home')}
            >
              Ragnova IT
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 px-6 md:pt-32 bg-gradient-to-r from-blue-500 to-blue-700"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative IT Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforming businesses through technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick(e, 'Contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Ragnova IT Solutions, we believe in harnessing the power of technology
              to drive business success. With years of experience and a team of dedicated
              professionals, we deliver innovative solutions that help our clients stay
              ahead in the digital age.
            </p>
          </motion.div>

          {/* Additional About Content (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
          >
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide top-notch IT solutions that empower businesses to achieve their
                goals efficiently and effectively.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be a global leader in IT services, recognized for our commitment to
                innovation, quality, and customer satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT services to meet the diverse needs of our clients.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="md:w-1/2 lg:w-1/4 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="md:w-1/2 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                    <p className="text-gray-600">"{testimonial.text}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question or want to start
              a project, feel free to reach out.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-4">
                1234 Tech Avenue<br />
                Silicon Valley, CA 94043
              </p>
              <p className="text-gray-600 mb-4">
                Email: <a href="mailto:info@ragnovait.com" className="text-blue-600">info@ragnovait.com</a><br />
                Phone: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a>
              </p>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Placeholder for form submission logic
                  alert('Thank you for contacting us!');
                  e.target.reset();
                }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Ragnova IT Solutions. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.11 1.04C8.09 8.9 4.6 6.13 2.69 2.73a4.5 4.5 0 00-.61 2.28C2.09 6.7 4.6 9.5 7.5 10c-0.2 0.54-0.3 1.19-0.3 1.89V15c0 4.03 2.94 7.4 6.84 8.14a10.21 10.21 0 003.1.34c7.29 0 11.28-6.04 11.28-11.28 0-0.17-0.003-0.34-0.01-0.51A8.1 8.1 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4">
        {isChatOpen ? (
          <div className="flex flex-col h-80 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
              <span>Chatbot</span>
              <button onClick={() => setIsChatOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                    1.414L11.414 10l4.293 4.293a1 1 0
                    01-1.414 1.414L10 11.414l-4.293
                    4.293a1 1 0 01-1.414-1.414L8.586
                    10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
            <form
              onSubmit={handleSendMessage}
              className="flex border-t border-gray-300"
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 px-4 py-2 focus:outline-none"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
          >
            💬
          </button>
        )}
      </div>
    </div>
  );
};

export default App;

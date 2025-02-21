
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Simple bot response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: getBotResponse(userInput) }
      ]);
    }, 1000);
  };

  const getBotResponse = (input) => {
    const responses = {
      hello: 'Hi there! Need help with booking a car?',
      booking: 'Sure, I can help you with that. What type of car are you interested in?',
      price: 'Our prices start at $200/day for a Luxury Sedan.',
      default: 'I\'m sorry, I didn\'t understand that. Can you please rephrase?'
    };

    const key = input.toLowerCase();
    return responses[key] || responses['default'];
  };

  return (
    <div className="relative min-h-screen font-sans">
      {/* Global Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-3xl font-bold text-blue-600 cursor-pointer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              DriveElite
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Fleet', 'Services', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Luxury car"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div 
            className="max-w-2xl text-white"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-5xl font-bold mb-4">Experience Luxury on Wheels</h1>
            <p className="text-xl mb-8">Premium car rental service for your journey's comfort and style.</p>
            <motion.button 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Fleet
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive solutions for all your driving needs</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Rentals",
                description: "Flexible daily rental options for your convenience",
                icon: "🚗"
              },
              {
                title: "Long-term Leasing",
                description: "Extended rental plans with special rates",
                icon: "📅"
              },
              {
                title: "Premium Insurance",
                description: "Comprehensive coverage for peace of mind",
                icon: "🛡️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Our Fleet</h2>
            <p className="text-gray-600">Choose from our selection of premium vehicles</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Luxury Sedan",
                image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
                price: "$200/day"
              },
              {
                name: "Premium SUV",
                image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
                price: "$250/day"
              },
              {
                name: "Sports Car",
                image: "https://images.unsplash.com/photo-1611921407102-bd9b223ffd4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
                price: "$300/day"
              }
            ].map((car, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-blue-600 font-bold">{car.price}</p>
                  <button 
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">DriveElite is committed to providing the best car rental experience. With a diverse fleet of premium vehicles and exceptional customer service, we ensure your journey is comfortable and stylish.</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            <motion.img 
              src="https://images.unsplash.com/photo-1595433562696-9d7e2ebf676b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Our Team"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div 
              className="mt-8 md:mt-0 md:ml-12 text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At DriveElite, our mission is to provide a seamless and luxurious car rental experience. We strive to exceed customer expectations through our premium fleet, reliable service, and unwavering commitment to excellence.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Customer Satisfaction</li>
                <li>Integrity and Transparency</li>
                <li>Innovation and Excellence</li>
                <li>Continuous Improvement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">We're here to help! Reach out to us with any questions or to book your next ride.</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            {/* Contact Form */}
            <motion.form
              className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </motion.form>
            {/* Contact Info */}
            <motion.div 
              className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-4">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="text-gray-700">
                <p className="mb-2"><strong>Address:</strong> 123 Drive Street, New York, NY 10001</p>
                <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="mb-2"><strong>Email:</strong> info@driveelite.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DriveElite</h3>
              <p className="text-gray-400">Premium car rental services for the discerning driver.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {['Home', 'Fleet', 'Services', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="text-gray-400">
                <p>123 Drive Street</p>
                <p>New York, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@driveelite.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-full w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-600 px-6 rounded-r-full hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 DriveElite. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        {isChatOpen && (
          <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
              <span>Chat with us</span>
              <button onClick={toggleChat} className="text-white font-bold">&times;</button>
            </div>
            <div className="p-4 h-60 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`px-4 py-2 rounded-lg ${msg.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-600 text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex border-t">
              <input 
                type="text" 
                className="flex-1 px-4 py-2 focus:outline-none" 
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              />
              <button 
                className="px-4 bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        )}
        <button 
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={toggleChat}
        >
          {isChatOpen ? 'Close Chat' : 'Chat'}
        </button>
      </div>
    </div>
  );
};

export default App;

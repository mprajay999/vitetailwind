
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = "I'm here to help! Can you please clarify?";
      if (input.toLowerCase().includes('book')) {
        botResponse = 'Sure, I can help you with booking a car. Which vehicle are you interested in?';
      } else if (input.toLowerCase().includes('price')) {
        botResponse = 'Our prices vary depending on the vehicle. Please check the Pricing section for more details.';
      } else if (input.toLowerCase().includes('fleet')) {
        botResponse = 'We offer a wide range of luxury vehicles. You can view our fleet in the Fleet section.';
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
      >
        {isOpen ? '✖' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">Chat with us</div>
          <div className="p-4 h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                <span
                  className={`inline-block px-3 py-1 rounded-full ${
                    msg.sender === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      {/* Sticky Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-blue-600"
          >
            DriveLuxe
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Fleet', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&w=1950&q=80"
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Drive Your Dreams Today</h1>
            <p className="text-xl mb-8">Experience luxury and comfort on your terms</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in luxury car rentals, we pride ourselves on offering
                the finest vehicles coupled with exceptional service. Our fleet includes the latest models
                from prestigious brands, ensuring you get the best driving experience possible.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Premium Fleet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                  </div>
                  <span>Flexible Plans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-6a2 2 0 114 0v6m5-12a2 2 0 100 4h-4a2 2 0 100-4h4z"
                      />
                    </svg>
                  </div>
                  <span>Easy Booking</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Luxury Sedan',
                image: 'https://images.unsplash.com/photo-1606611013016-96e242ec743b?auto=format&fit=crop&w=800&q=80',
                price: '$200/day',
              },
              {
                name: 'Sports Car',
                image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80',
                price: '$350/day',
              },
              {
                name: 'SUV',
                image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
                price: '$250/day',
              },
              {
                name: 'Convertible',
                image: 'https://images.unsplash.com/photo-1602526217038-2b2a4fedab96?auto=format&fit=crop&w=800&q=80',
                price: '$300/day',
              },
              {
                name: 'Electric Car',
                image: 'https://images.unsplash.com/photo-1584007101276-c9983a6dee37?auto=format&fit=crop&w=800&q=80',
                price: '$220/day',
              },
              {
                name: 'Van',
                image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
                price: '$180/day',
              },
            ].map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Basic',
                price: '$150/day',
                features: ['Access to standard vehicles', 'Unlimited Mileage', '24/7 Support'],
              },
              {
                tier: 'Premium',
                price: '$250/day',
                features: ['Access to premium vehicles', 'Unlimited Mileage', 'Priority Support', 'Free Pickup'],
              },
              {
                tier: 'Elite',
                price: '$400/day',
                features: ['Access to luxury vehicles', 'Unlimited Mileage', 'Dedicated Support', 'Free Pickup & Drop', 'Personal Concierge'],
              },
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">{plan.tier}</h3>
                <p className="text-4xl font-bold text-center mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                feedback:
                  'DriveLuxe provided me with an exceptional experience. The vehicle was spotless and the service was impeccable.',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                name: 'Jane Smith',
                feedback:
                  'I loved the premium fleet selection. Booking was easy, and the support team was always available to help.',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              {
                name: 'Mike Johnson',
                feedback:
                  'From start to finish, DriveLuxe exceeded my expectations. Highly recommend for luxury car rentals!',
                avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border rounded px-3 py-2 focus:outline-none"
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
                    className="w-full border rounded px-3 py-2 focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border rounded px-3 py-2 focus:outline-none"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Whether you have a question about our services, pricing, or anything else, our team is ready
                to answer all your questions.
              </p>
              <ul className="text-gray-600">
                <li className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h2l.4 2M7 5h10l4 8-4 8H7l-4-8z"
                    />
                  </svg>
                  123 Luxury Drive, Beverly Hills, CA 90210
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@driveluxe.com
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a2 2 0 011.648.884l1.656 2.634a2 2 0 001.292.916h5.808a2 2 0 011.292-.916l1.656-2.634A2 2 0 0118.72 3H22a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DriveLuxe</h3>
              <p className="text-gray-400">
                Luxury car rentals for every occasion. Experience the best in class service and fleet.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Fleet', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>123 Luxury Drive</li>
                <li>Beverly Hills, CA 90210</li>
                <li>+1 (555) 123-4567</li>
                <li>info@driveluxe.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DriveLuxe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Integration */}
      <Chatbot />
    </div>
  );
};

export default App;

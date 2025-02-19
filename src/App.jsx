
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 text-white z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fitness Pro Gym</h1>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#membership" className="hover:text-gray-300">Membership</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              <a href="#services" className="hover:text-gray-300">Services</a>
              <a href="#membership" className="hover:text-gray-300">Membership</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="relative h-full flex flex-col justify-center items-center text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Fitness Pro Gym</h1>
          <p className="text-xl md:text-2xl mb-8">Transform Your Body, Transform Your Life</p>
          <a 
            href="#membership"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
          >
            Join Now
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Gym Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Fitness Pro Gym, we're dedicated to helping you achieve your fitness goals through state-of-the-art facilities, expert trainers, and a supportive community. With over 10 years of experience, we've helped thousands of members transform their lives.
              </p>
              <p className="text-gray-600">
                Our certified trainers work with you to create personalized fitness plans that align with your goals, whether you're just starting your fitness journey or you're an experienced athlete.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                description: "One-on-one sessions with certified trainers",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              },
              {
                title: "Group Classes",
                description: "High-energy group workouts for all fitness levels",
                image: "https://images.unsplash.com/photo-1571903687670-81a37c3146f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              },
              {
                title: "Nutrition Guidance",
                description: "Expert advice for optimal results",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gray-100">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "$29",
                features: ["Access to gym equipment", "Basic classes", "Locker room access"]
              },
              {
                title: "Premium",
                price: "$49",
                features: ["All Basic features", "Unlimited classes", "Personal trainer consultation"]
              },
              {
                title: "Elite",
                price: "$79",
                features: ["All Premium features", "Nutrition planning", "24/7 gym access"]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold text-red-600 mb-6">{plan.price}<span className="text-sm text-gray-600">/month</span></p>
                <ul className="mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <motion.div 
          className="container mx-auto px-4"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-3 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-3 border rounded h-32"></textarea>
                </div>
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600">123 Fitness Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@fitnessprogym.com</p>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Google Maps
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fitness Pro Gym</h3>
              <p className="text-gray-400">Transform Your Body, Transform Your Life</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
                <a href="#membership" className="block text-gray-400 hover:text-white">Membership</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">&copy; 2024 Fitness Pro Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

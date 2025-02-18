
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure for business growth",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      desc: "Advanced protection for your digital assets",
      icon: "🛡️"
    },
    {
      title: "AI Integration",
      desc: "Smart automation and machine learning solutions",
      icon: "🤖"
    },
    {
      title: "IT Consulting",
      desc: "Strategic technology planning and implementation",
      icon: "💼"
    }
  ];

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            Ragnova IT Solutions
            <span className="block text-sm font-normal text-teal-400">Innovate. Implement. Inspire.</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-teal-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 p-4 space-y-4">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-white hover:text-teal-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Innovation Through Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Custom IT Solutions for Modern Businesses
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our team" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ragnova IT Solutions, we bridge the gap between technology and business needs. 
                Our mission is to deliver innovative, scalable solutions that drive digital transformation 
                while maintaining the highest security standards.
              </p>
              <ul className="space-y-3">
                {['Client-Centric Approach', 'Agile Methodologies', '24/7 Support', 'Cutting-Edge Technology'].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="text-teal-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition-colors duration-300">
                  Send Message
                </button>
              </form>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Info</h3>
                  <p className="text-gray-600">📍 123 Tech Valley, Silicon City, CA</p>
                  <p className="text-gray-600 mt-2">📞 +1 (555) 123-4567</p>
                  <p className="text-gray-600 mt-2">✉️ contact@ragnova.it</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'Twitter', 'Facebook', 'GitHub'].map((social) => (
                      <a 
                        key={social}
                        href="#" 
                        className="text-gray-600 hover:text-teal-500 transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ragnova IT Solutions</h3>
              <p className="text-sm">Innovating tomorrow's solutions today</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="block hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Facebook', 'GitHub'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="hover:text-teal-400 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2024 Ragnova IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';

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
    <div className="font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-900">Cruize IT Solutions</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Innovative IT Solutions for Your Business
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Our Services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies.",
                icon: "🌐"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services.",
                icon: "☁️"
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your business.",
                icon: "🔒"
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications.",
                icon: "📱"
              },
              {
                title: "AI & Machine Learning",
                description: "Intelligent solutions for business automation.",
                icon: "🤖"
              },
              {
                title: "IT Consulting",
                description: "Strategic technology consulting and planning.",
                icon: "💡"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8 text-blue-900">About Us</h2>
              <p className="text-gray-600 mb-6">
                Since 2010, Cruize IT Solutions has been at the forefront of digital transformation, 
                helping businesses leverage technology to achieve their goals. Our team of experts 
                brings together decades of experience in delivering innovative IT solutions.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in building long-term partnerships with our clients, understanding their 
                unique challenges, and delivering solutions that drive real business value.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Built a scalable e-commerce solution for a retail giant",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              },
              {
                title: "Healthcare App",
                description: "Developed a telemedicine platform for healthcare providers",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              },
              {
                title: "FinTech Solution",
                description: "Created a secure banking application with AI integration",
                image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Cruize IT Solutions</h3>
              <p className="mb-4">Transforming businesses through technology</p>
              <div className="space-x-4">
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
                <a href="#" className="hover:text-blue-300">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <p>123 Business Street</p>
              <p>New York, NY 10001</p>
              <p>contact@cruizeit.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-300">Careers</a></li>
                <li><a href="#" className="hover:text-blue-300">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center border-t border-blue-800 pt-8">
            <p>© 2024 Cruize IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

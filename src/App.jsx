
import React, { useState } from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-ivory shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-gray-800">Ruchi Indian Kitchen</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-saffron transition">Home</a>
            <a href="#menu" className="text-gray-800 hover:text-saffron transition">Menu</a>
            <a href="#about" className="text-gray-800 hover:text-saffron transition">About</a>
            <a href="#contact" className="text-gray-800 hover:text-saffron transition">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-ivory px-6 py-4 space-y-4">
            <a href="#home" className="block text-gray-800">Home</a>
            <a href="#menu" className="block text-gray-800">Menu</a>
            <a href="#about" className="block text-gray-800">About</a>
            <a href="#contact" className="block text-gray-800">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Authentic Flavors, Crafted with Love
          </h1>
          <button className="bg-saffron text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Founded in 2010 by the Sharma family, Ruchi Indian Kitchen brings generations 
            of culinary tradition to your plate. Using time-honored recipes and locally 
            sourced ingredients, we craft dishes that transport you straight to the heart 
            of India.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[1,2,3].map((item) => (
              <img 
                key={item}
                src={`https://source.unsplash.com/random/400x400/?indian-food,spices,${item}`}
                alt="Our kitchen"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Appetizers', 'Mains', 'Desserts'].map((category) => (
              <div 
                key={category}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >
                <img 
                  src={`https://source.unsplash.com/random/800x600/?indian-${category}`}
                  alt={category}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                  <h3 className="text-xl font-serif">{category}</h3>
                  <button className="mt-2 text-saffron hover:text-opacity-80">
                    Explore {category} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-12">Visit Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4">📍 123 Spice Lane, Culinary City, CC 45678</p>
                <p className="mb-4">📞 (555) 123-4567</p>
                <p className="mb-4">📧 hello@ruchiindiankitchen.com</p>
                
                <div className="flex space-x-4 mt-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener">
                    <FiInstagram className="text-2xl text-gray-600 hover:text-saffron transition" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener">
                    <FiFacebook className="text-2xl text-gray-600 hover:text-saffron transition" />
                  </a>
                </div>
              </div>

              <div className="h-64 rounded-lg overflow-hidden">
                <iframe 
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38177626209219574!3d51.52873519656658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1629990000000!5m2!1sen!2sus"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 Ruchi Indian Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

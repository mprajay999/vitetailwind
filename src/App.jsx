import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="font-serif">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://svgur.com/i/16eQ.svg" 
              alt="Ruchi Logo" 
              className="h-12 w-12"
            />
            <span className="ml-2 text-2xl font-bold text-gray-800 font-sans">RUCHI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6">
            <a href="#home" className="block py-2 text-gray-700">Home</a>
            <a href="#menu" className="block py-2 text-gray-700">Menu</a>
            <a href="#about" className="block py-2 text-gray-700">About</a>
            <a href="#contact" className="block py-2 text-gray-700">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2130&q=80"
            alt="Indian spices background" 
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
            Authentic Indian Flavors Crafted with Love
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience Traditional Recipes in Every Bite
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-sans">Our Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Paneer Tikka Masala",
                desc: "Cottage cheese in rich tomato cream sauce",
                img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
              },
              {
                name: "Lamb Biryani",
                desc: "Fragrant basmati rice with tender lamb",
                img: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              },
              {
                name: "Butter Chicken",
                desc: "Classic creamy tomato curry",
                img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <img src={dish.img} alt={dish.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-sans">{dish.name}</h3>
                  <p className="text-gray-600">{dish.desc}</p>
                </div>
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
              <h2 className="text-4xl font-bold mb-6 font-sans">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2005 by Chef Rajesh Mehta, Ruchi Indian Kitchen brings generations of family recipes 
                to modern palates. Our dishes are crafted using traditional cooking methods and the finest spices 
                sourced directly from India. Every meal is a celebration of authentic flavors and culinary heritage.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="Chef Rajesh" 
                className="rounded-full w-96 h-96 object-cover shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-sans">Contact Us</h2>
              <div className="space-y-4">
                <p className="text-lg">📍 123 Spice Street, New Delhi, India</p>
                <p className="text-lg">📞 +91 98765 43210</p>
                <p className="text-lg">✉️ hello@ruchiindiankitchen.com</p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <textarea 
                  rows="4"
                  placeholder="Message" 
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="https://svgur.com/i/16eQ.svg" 
                alt="Ruchi Logo" 
                className="h-12 w-12"
              />
              <span className="ml-2 text-2xl font-bold font-sans">RUCHI</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2023 Ruchi Indian Kitchen</p>
              <p>Open daily: 11 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


import React, { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                className="h-12"
                src="https://cdn-icons-png.flaticon.com/512/1960/1960923.png"
                alt="Logo"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-amber-800 px-3 py-2 text-lg font-roboto font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Hyderabadi Cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6">
            Hyderabadi Nawabi House
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 font-roboto">
            Preserving the Legacy of Hyderabadi Cuisine Since 1985
          </p>
          <div className="space-x-4">
            <a
              href="#menu"
              className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors font-roboto"
            >
              Explore Menu
            </a>
            <a
              href="https://opentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-roboto"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Authentic Recipes Since 1985",
                icon: "🥘",
                description: "Preserving traditional cooking methods passed down through generations"
              },
              {
                title: "Signature Dum Pukht Biryani",
                icon: "🍛",
                description: "Slow-cooked in sealed handis with premium ingredients"
              },
              {
                title: "Royal Dining Experience",
                icon: "👑",
                description: "Elegant ambiance reflecting Nizami grandeur"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-playfair text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 font-roboto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair text-center mb-12 text-gray-800">Our Signature Dishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Hyderabadi Dum Biryani", price: "₹599", desc: "Layered basmati rice with tender mutton, saffron, and spices" },
              { name: "Haleem", price: "₹299", desc: "Slow-cooked wheat and meat porridge, garnished with fried onions" },
              { name: "Khubani Ka Meetha", price: "₹199", desc: "Apricot dessert with custard and dry fruits" },
              { name: "Mirchi Ka Salan", price: "₹249", desc: "Spicy chili curry with peanut-coconut gravy" },
              { name: "Double Ka Meetha", price: "₹179", desc: "Bread pudding in reduced milk and dry fruits" },
              { name: "Irani Chai", price: "₹99", desc: "Authentic Hyderabadi tea with Osmania biscuits" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-playfair text-amber-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 font-roboto mb-3">{item.desc}</p>
                <p className="text-2xl font-bold text-gray-800">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-playfair text-xl mb-4">Contact Us</h4>
              <p className="font-roboto">Plot No. 45, Basheer Bagh Road<br/>Hyderabad, Telangana 500029</p>
              <p className="mt-2">📞 +91 40 1234 5678</p>
            </div>
            
            <div>
              <h4 className="font-playfair text-xl mb-4">Opening Hours</h4>
              <p className="font-roboto">
                Mon-Sun: 11 AM - 11 PM<br/>
                Friday Lunch: 12 PM - 3 PM
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair text-xl mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter'].map((platform) => (
                  <a key={platform} href="#" className="hover:text-amber-400 transition-colors">
                    <img 
                      src={`https://cdn-icons-png.flaticon.com/512/2111/2111463.png`} 
                      alt={platform}
                      className="h-8 w-8"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-roboto">&copy; 2023 Hyderabadi Nawabi House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

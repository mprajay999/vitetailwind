import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Butter Chicken", price: "$18.99", desc: "Tender chicken in creamy tomato sauce", diet: "non-veg", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db" },
    { name: "Palak Paneer", price: "$15.99", desc: "Spinach and cottage cheese curry", diet: "veg", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733" },
    { name: "Garlic Naan", price: "$4.99", desc: "Traditional clay oven bread", diet: "veg", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950" }
  ];

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8B5A2B]">Ruchi Indian Kitchen</h1>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#8B5A2B]">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-[#8B5A2B]">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-[#8B5A2B]">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#8B5A2B]">Contact</a>
            <button className="bg-[#8B5A2B] text-white px-4 py-2 rounded-full hover:bg-[#6B4420]">
              Order Online
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 space-y-4">
            <a href="#home" className="block text-gray-700">Home</a>
            <a href="#menu" className="block text-gray-700">Menu</a>
            <a href="#about" className="block text-gray-700">About</a>
            <a href="#contact" className="block text-gray-700">Contact</a>
            <button className="bg-[#8B5A2B] text-white px-4 py-2 rounded-full w-full">
              Order Online
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2836&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Indian spices background"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Ruchi Indian Kitchen</h1>
          <p className="text-xl md:text-2xl mb-8">Authentic Flavors, Crafted with Tradition</p>
          <a href="#menu" className="bg-[#8B5A2B] text-white px-8 py-3 rounded-full text-lg hover:bg-[#6B4420]">
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#F8F5F2]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6B4420]">Our Menu</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <span className="bg-[#8B5A2B] text-white text-sm px-2 py-1 rounded-full">
                      {item.diet}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <p className="text-right text-[#8B5A2B] font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8 text-[#6B4420]">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                At Ruchi Indian Kitchen, we honor generations of recipes, blending aromatic spices 
                and fresh ingredients to bring you the true taste of India. Our chefs craft each dish 
                with passion, preserving traditional cooking methods while adding a modern touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F8F5F2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#6B4420]">Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                  ></textarea>
                </div>
                <button className="bg-[#8B5A2B] text-white px-8 py-3 rounded-full hover:bg-[#6B4420]">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-74.0059708235385!3d40.71277503702702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23f7683e7d%3A0x3b3ca3df51adf7e2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1716857130314!5m2!1sen!2sus" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="mt-8 space-y-2">
                <p className="text-lg">📍 123 Spice Street, New York, NY</p>
                <p className="text-lg">📞 (555) 123-4567</p>
                <p className="text-lg">📧 info@ruchikitchen.com</p>
                
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-[#6B4420] hover:text-[#8B5A2B]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="text-[#6B4420] hover:text-[#8B5A2B]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#6B4420] text-white py-8 text-center">
        <p>© 2024 Ruchi Indian Kitchen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

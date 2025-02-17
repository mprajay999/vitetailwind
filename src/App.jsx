import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Modern Navigation */}
      <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-amber-600">रुचि</span>
              <span className="text-xl font-light text-gray-700 tracking-wide">INDIAN KITCHEN</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-600 hover:text-amber-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Minimalist Hero Section */}
      <div className="pt-32 pb-24 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
              Modern Indian <span className="font-medium">Culinary</span> Experience
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Where traditional flavors meet contemporary presentation
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#menu" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-all">
                Explore Menu
              </a>
              <a href="#contact" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition-all">
                Reservations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Grid */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Fine dining"
                className="rounded-lg shadow-xl transform group-hover:scale-101 transition-transform"
              />
              <div className="absolute inset-0 border-2 border-amber-100 rounded-lg mt-6 ml-6 -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                Crafting Authentic Flavors with <span className="font-medium">Modern Sensibility</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Ruchi, we reimagine classic Indian cuisine through meticulous attention to detail 
                and presentation. Our chefs combine generations-old recipes with contemporary techniques 
                to create a dining experience that honors tradition while embracing innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Menu Section */}
      <section id="menu" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Signature Offerings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A carefully curated selection showcasing regional diversity and seasonal ingredients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Tandoori Salmon', price: '$28', desc: 'Norwegian salmon marinated in ginger, garlic, and Kashmiri chili', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398'},
              {name: 'Lamb Shank Rogan Josh', price: '$34', desc: 'Slow-cooked Australian lamb in aromatic Kashmiri spices', img: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833'},
              {name: 'Saffron Risotto', price: '$26', desc: 'Carnaroli rice with saffron, smoked paneer, and microgreens', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'},
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`${item.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <span className="text-amber-600 font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg group">
                <img 
                  src={`https://source.unsplash.com/random/800x800/?fine-dining,indian-cuisine,spices,${item}`}
                  alt="Gallery"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800">Experience Ruchi</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">ADDRESS</p>
                  <p className="text-gray-700">45 Spice Lane<br/>Culinary District, CC 90210</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">HOURS</p>
                  <p className="text-gray-700">Tuesday - Sunday: 5PM - 11PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">CONTACT</p>
                  <p className="text-gray-700">(415) 555-0192<br/>reservations@ruchi.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="Location"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.693257987843!2d-122.4194155846823!3d37.75761797975993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3d13f5d7c1%3A0x66664016b28983e6!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1629990000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-amber-600">रुचि</span>
                <span className="text-sm text-gray-400">INDIAN KITCHEN</span>
              </div>
              <p className="text-sm text-gray-400">© 2023 Ruchi. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

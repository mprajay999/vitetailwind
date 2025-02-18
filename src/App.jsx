
import React from 'react';

const App = () => {
  return (
    <div className="font-poppins">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-charcoal/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-playfair text-off-white font-bold">Raaga Indian Grand</h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-off-white hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/40 to-transparent" />
        </div>
        <div className="relative text-center z-10">
          <h2 className="font-playfair text-6xl md:text-8xl text-off-white mb-6">
            Experience the Essence of India
          </h2>
          <p className="text-xl md:text-2xl text-off-white/90 mb-8">
            Authentic Flavors, Timeless Traditions
          </p>
          <button className="bg-gold hover:bg-gold-dark text-dark-charcoal px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Book a Table
          </button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-8 h-8 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <h3 className="font-playfair text-4xl text-center mb-12">Signature Dishes</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {name: 'Butter Chicken', price: '$18', desc: 'Tender chicken in creamy tomato gravy', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'},
              {name: 'Lamb Rogan Josh', price: '$22', desc: 'Aromatic Kashmiri lamb curry', img: 'https://images.unsplash.com/photo-1603360946369-dc9bbf814549?ixlib=rb-1.2.1&auto=format&fit=crop&w=1982&q=80'},
              {name: 'Paneer Tikka', price: '$14', desc: 'Marinated cottage cheese grilled to perfection', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'},
              {name: 'Dal Makhani', price: '$12', desc: 'Creamy black lentils simmered overnight', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'},
            ].map((dish) => (
              <div key={dish.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src={dish.img} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-playfair text-xl mb-2">{dish.name}</h4>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <p className="text-gold font-semibold">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-gold text-gold hover:bg-gold hover:text-dark-charcoal px-8 py-3 rounded-full transition-colors">
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-charcoal text-off-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1589302168065-89a14b9e6a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80" 
                 alt="Our Chef" 
                 className="rounded-lg shadow-xl" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="font-playfair text-4xl mb-8">Our Story</h3>
            <p className="mb-6">Founded in 1990 by Chef Rajesh Kapoor, Raaga Indian Grand brings three generations of culinary expertise to your table. Our recipes are carefully preserved family secrets, passed down through decades of passionate cooking.</p>
            <p className="mb-8">We source only the finest spices directly from Indian markets and combine them with locally-sourced, fresh ingredients to create dishes that dance on your palate.</p>
            <ul className="space-y-4">
              {['Family recipes since 1990', 'Award-winning spice blends', '100% organic ingredients', 'Sustainable farming partners'].map((item) => (
                <li key={item} className="flex items-center before:content-['✓'] before:text-gold before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="font-playfair text-4xl">Contact Us</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
                <textarea rows="5" placeholder="Message" className="w-full p-3 border rounded-lg"></textarea>
                <button className="bg-gold text-dark-charcoal px-8 py-3 rounded-full hover:bg-gold-dark transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-playfair text-2xl">Visit Us</h4>
                <p className="text-gray-600">123 Spice Lane<br />New Delhi, India 110001</p>
                <p className="text-gray-600">Phone: +91 11 2345 6789</p>
                <p className="text-gray-600">Email: hello@raagagrand.com</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.3.739-2.692 3.039-2.692h1.961v3z"/></svg>
                </a>
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe 
                  title="Location"
                  width="100%" 
                  height="100%" 
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.110035599129!2d77.2279064150827!3d28.628408582419307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5a8f32f50d%3A0x168426d7a631ccc!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1623930407751!5m2!1sen!2sin" 
                  className="border-0">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-off-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-playfair text-2xl mb-6">Raaga Indian Grand</h4>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {['Privacy Policy', 'Terms of Service', 'Careers'].map((item) => (
              <a key={item} href="#" className="hover:text-gold transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-gray-400">&copy; 2024 Raaga Indian Grand – Crafted with Spice & Soul</p>
        </div>
      </footer>
    </div>
  );
};

export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

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
    <Router>
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-amber-600' : 'text-white'}`}>Ruchi Indian Kitchen</Link>
          <div className="space-x-8">
            <Link to="/" className={`hover:text-amber-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</Link>
            <Link to="/menu" className={`hover:text-amber-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Menu</Link>
            <Link to="/about" className={`hover:text-amber-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</Link>
            <Link to="/contact" className={`hover:text-amber-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

const Home = () => (
  <>
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Ruchi Indian Kitchen</h1>
        <p className="text-2xl mb-8">Authentic Flavors, Crafted with Tradition</p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-colors">
          Explore the Menu
        </button>
      </div>
    </section>

    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Specialties</h2>
        <div className="grid grid-cols-3 gap-8">
          {['Biryani', 'Tandoori', 'Dosa'].map((dish, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={`https://source.unsplash.com/random/800x600?indian-${dish}`} 
                alt={dish}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{dish}</h3>
                <p className="text-gray-600">Traditional recipe with authentic spices and cooking methods</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const Menu = () => {
  const menuItems = {
    appetizers: [
      { name: 'Samosa', desc: 'Crispy pastry filled with spiced potatoes', veg: true },
      { name: 'Paneer Tikka', desc: 'Grilled cottage cheese with mint chutney', veg: true },
    ],
    mainCourse: [
      { name: 'Butter Chicken', desc: 'Tender chicken in creamy tomato gravy', spice: 2 },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils with butter', veg: true },
    ],
    desserts: [
      { name: 'Gulab Jamun', desc: 'Fried milk balls in rose syrup', veg: true },
      { name: 'Kheer', desc: 'Traditional rice pudding with nuts', veg: true },
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 capitalize text-amber-600">{category}</h3>
            <div className="grid gap-6">
              {items.map((item, i) => (
                <div key={i} className="p-6 bg-cream-50 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    {item.veg && <span className="text-green-600">🌱 Vegetarian</span>}
                    {item.spice && Array.from({ length: item.spice }).map((_, i) => (
                      <span key={i} className="text-red-500">🌶️</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-20 bg-cream-50">
    <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800" 
          alt="Kitchen Team" 
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-8">Our Story</h2>
        <p className="text-lg mb-6">
          Founded in 2010 by Chef Rajesh Mehta, Ruchi Indian Kitchen brings generations of family recipes
          to the modern table. What started as a small family eatery in Mumbai has now become a celebrated
          destination for authentic Indian flavors.
        </p>
        <blockquote className="text-2xl italic border-l-4 border-amber-600 pl-4 mb-6">
          "True taste lies in respecting tradition while embracing quality"
        </blockquote>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FiMapPin className="text-2xl text-amber-600" />
            <p>123 Spice Street, Culinary City, CC 45678</p>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone className="text-2xl text-amber-600" />
            <p>(555) 123-4567</p>
          </div>
          <div className="flex items-center gap-4">
            <FiMail className="text-2xl text-amber-600" />
            <p>contact@ruchiindiankitchen.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FiClock className="text-2xl text-amber-600" />
            <div>
              <p>Tuesday - Sunday: 11 AM - 10 PM</p>
              <p>Closed on Mondays</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-amber-600 rounded-full text-white hover:bg-amber-700">
              <FiInstagram size={24} />
            </a>
            <a href="#" className="p-2 bg-amber-600 rounded-full text-white hover:bg-amber-700">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe 
          title="Location"
          className="w-full h-96"
          src="https://maps.google.com/maps?q=restaurant&z=15&output=embed"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Ruchi Indian Kitchen</h3>
        <p className="text-gray-400">Experience authentic Indian cuisine crafted with care</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg flex-grow text-gray-800"
          />
          <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-r-lg transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <div className="flex flex-col space-y-2">
          <Link to="/menu" className="hover:text-amber-600">Menu</Link>
          <Link to="/about" className="hover:text-amber-600">About Us</Link>
          <Link to="/contact" className="hover:text-amber-600">Contact</Link>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>© 2023 Ruchi Indian Kitchen. All rights reserved.</p>
    </div>
  </footer>
);

export default App;

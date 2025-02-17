import React from 'react';

// Constants for reusable data
const NAV_LINKS = [
  { href: '#menu', text: 'Menu' },
  { href: '#about', text: 'About' },
  { href: '#gallery', text: 'Gallery' },
  { href: '#contact', text: 'Contact' },
];

const MENU_ITEMS = [
  {
    name: 'Tandoori Salmon',
    price: '$28',
    desc: 'Norwegian salmon marinated in ginger, garlic, and Kashmiri chili',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
  },
  {
    name: 'Lamb Shank Rogan Josh',
    price: '$34',
    desc: 'Slow-cooked Australian lamb in aromatic Kashmiri spices',
    img: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833',
  },
  {
    name: 'Saffron Risotto',
    price: '$26',
    desc: 'Carnaroli rice with saffron, smoked paneer, and microgreens',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205...',
  },
  {
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007...',
  },
];

// Reusable Components
const Button = ({ children, variant = 'primary', ...props }) => (
  <a
    className={`px-8 py-3 rounded-full transition-all ${
      variant === 'primary'
        ? 'bg-amber-600 text-white hover:bg-amber-700'
        : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
    }`}
    {...props}
  >
    {children}
  </a>
);

const SocialIcon = ({ name, path }) => (
  <a
    href="#"
    className="text-gray-400 hover:text-amber-500 transition-colors"
    aria-label={name}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

// Main Sections
const Navigation = () => (
  <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-amber-600" aria-label="Ruchi">रुचि</span>
          <span className="text-xl font-light text-gray-700 tracking-wide">INDIAN KITCHEN</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="pt-32 pb-24 bg-gradient-to-r from-amber-50 to-amber-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
          Modern Indian <span className="font-medium">Culinary</span> Experience
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Where traditional flavors meet contemporary presentation
        </p>
        <div className="flex justify-center space-x-4">
          <Button href="#menu" variant="primary">
            Explore Menu
          </Button>
          <Button href="#contact">
            Reservations
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const MenuSection = () => (
  <section id="menu" className="py-24 bg-amber-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light text-gray-800 mb-4">Signature Offerings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A carefully curated selection showcasing regional diversity and seasonal ingredients
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {MENU_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={`${item.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
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
);

// Main Component
export default function IndianKitchen() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <HeroSection />
      <MenuSection />
      
      {/* Add other sections (About, Gallery, Contact, Footer) using similar component patterns */}
      
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
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

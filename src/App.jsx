import { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [season, setSeason] = useState('spring');

  const heroImages = [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398'
  ];

  const menuItems = [
    { name: 'Sakura Gyoza', category: 'small-plates', vegetarian: true, price: 12 },
    { name: 'Unagi Nigiri', category: 'sushi', glutenFree: true, price: 18 },
    { name: 'Yakitori Moriawase', category: 'yakitori', price: 22 },
    { name: 'Matcha Tiramisu', category: 'dessert', vegetarian: true, price: 10 }
  ];

  useEffect(() => {
    const month = new Date().getMonth();
    setSeason(
      month < 2 ? 'winter' : 
      month < 5 ? 'spring' :
      month < 8 ? 'summer' : 'autumn'
    );
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-primary font-opensans ${season}-bg`}>
      {/* Navigation */}
      <nav className="sticky top-0 bg-primary/90 backdrop-blur-md z-50 shadow-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.svg" 
              alt="Tsuki Izakaya" 
              className="h-12 w-12"
            />
            <span className="font-playfair text-2xl text-secondary">Tsuki Izakaya</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Menu as="div" className="relative">
              <Menu.Button className="font-montserrat text-secondary hover:text-accent transition">
                Menu
              </Menu.Button>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute mt-2 w-48 bg-secondary rounded-lg shadow-lg">
                  {['Small Plates', 'Yakitori', 'Sushi', 'Drinks'].map((item) => (
                    <Menu.Item key={item}>
                      <a href={`#${item.toLowerCase()}`} className="block px-4 py-3 text-primary hover:bg-accent/20">
                        {item}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            
            {['About', 'Reservations', 'Location', 'Events'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-montserrat text-secondary hover:text-accent transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={heroImages[currentSlide]} 
          alt="Restaurant ambiance" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          loading="lazy"
        />
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-playfair text-secondary mb-8">
            Experience Modern Izakaya
          </h1>
          <button className="bg-accent text-primary px-8 py-3 rounded-full hover:bg-accent/90 transition">
            Book a Table
          </button>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section id="menu" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-montserrat text-secondary mb-12 text-center">Our Menu</h2>
        <div className="flex gap-4 justify-center mb-8">
          {['all', 'vegetarian', 'gluten-free'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${
                activeFilter === filter 
                  ? 'bg-accent text-primary' 
                  : 'bg-secondary/20 text-secondary'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter(item => activeFilter === 'all' || item[activeFilter])
            .map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/10 rounded-lg p-6"
              >
                <div className="h-48 bg-primary/20 rounded-lg mb-4" />
                <h3 className="text-xl font-montserrat text-secondary">{item.name}</h3>
                <p className="text-accent font-playfair text-2xl my-2">${item.price}</p>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-montserrat text-secondary mb-12 text-center">Reservations</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-secondary mb-2">Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full bg-primary/20 text-secondary rounded-lg px-4 py-3"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-secondary mb-2">Time</label>
                <select className="w-full bg-primary/20 text-secondary rounded-lg px-4 py-3">
                  {['18:00', '19:00', '20:00', '21:00'].map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-secondary mb-2">Party Size</label>
                <input 
                  type="number" 
                  min="1" 
                  max="8" 
                  className="w-full bg-primary/20 text-secondary rounded-lg px-4 py-3"
                />
              </div>
            </div>

            <button className="w-full bg-accent text-primary py-4 rounded-lg hover:bg-accent/90 transition">
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/90 backdrop-blur-md mt-20 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl text-secondary mb-4">Tsuki Izakaya</h3>
            <p className="text-secondary/80">Serving modern Japanese cuisine since 2015</p>
          </div>
          
          <div>
            <h4 className="font-montserrat text-secondary mb-4">Contact</h4>
            <p className="text-secondary/80">123 Sakura Street</p>
            <p className="text-secondary/80">Tokyo, Japan</p>
            <p className="text-secondary/80">info@tsuki-izakaya.com</p>
          </div>
          
          <div>
            <h4 className="font-montserrat text-secondary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-secondary hover:text-accent transition"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

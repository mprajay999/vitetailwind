
import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    { name: "Sarah Johnson", text: "The best Indian cuisine I've ever had! The butter chicken is outstanding." },
    { name: "Michael Chen", text: "Authentic flavors and excellent service. A must-visit restaurant!" },
    { name: "Emma Williams", text: "Their biryani is absolutely incredible. Great atmosphere too!" }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white/90 shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-[#8B0000] text-2xl font-serif">Ruchi Indian Kitchen</h1>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-[#8B0000]">Home</a>
            <a href="#menu" className="hover:text-[#8B0000]">Menu</a>
            <a href="#about" className="hover:text-[#8B0000]">About</a>
            <a href="#reservations" className="hover:text-[#8B0000]">Reservations</a>
            <a href="#contact" className="hover:text-[#8B0000]">Contact</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <span className="block w-6 h-0.5 bg-[#8B0000] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#8B0000] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#8B0000]"></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden z-40">
          <div className="flex flex-col p-4 space-y-3">
            <a href="#home" className="hover:text-[#8B0000]">Home</a>
            <a href="#menu" className="hover:text-[#8B0000]">Menu</a>
            <a href="#about" className="hover:text-[#8B0000]">About</a>
            <a href="#reservations" className="hover:text-[#8B0000]">Reservations</a>
            <a href="#contact" className="hover:text-[#8B0000]">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="h-screen bg-cover bg-center relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3")'}}> 
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Ruchi Indian Kitchen</h1>
          <p className="text-xl md:text-2xl mb-8">Experience Authentic Indian Flavors</p>
          <a href="#reservations" className="bg-[#8B0000] hover:bg-[#DAA520] px-8 py-3 rounded">Reserve Table</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Restaurant Interior" className="rounded-lg shadow-lg"/>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg mb-6">
                Founded in 2010, Ruchi Indian Kitchen has been serving authentic Indian cuisine to food lovers in the heart of the city. Our expert chefs bring decades of experience and traditional recipes passed down through generations.
              </p>
              <p className="text-lg">
                We take pride in using the finest ingredients and traditional spices to create an unforgettable dining experience for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Butter Chicken", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398", price: "$18.99"},
              {name: "Biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", price: "$16.99"},
              {name: "Palak Paneer", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950", price: "$15.99"}
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={dish.img} alt={dish.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p className="text-[#8B0000]">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#8B0000] text-white px-8 py-3 rounded hover:bg-[#DAA520]">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">What Our Guests Say</h2>
          <div className="max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <p className="text-lg text-center italic mb-4">"{testimonial.text}"</p>
                <p className="text-center font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Make a Reservation</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
            </div>
            <div className="mb-4">
              <input type="date" className="w-full p-2 border rounded"/>
            </div>
            <div className="mb-4">
              <select className="w-full p-2 border rounded">
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            <button className="w-full bg-[#8B0000] text-white py-3 rounded hover:bg-[#DAA520]">
              Reserve Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4">Contact Us</h3>
              <p>123 Restaurant Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ruchiindian.com</p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Hours</h3>
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#DAA520]">Facebook</a>
                <a href="#" className="hover:text-[#DAA520]">Instagram</a>
                <a href="#" className="hover:text-[#DAA520]">Twitter</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>&copy; 2024 Ruchi Indian Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

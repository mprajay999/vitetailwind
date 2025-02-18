import { useState, useEffect } from 'react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [navIsSticky, setNavIsSticky] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)

  const menuItems = [
    { name: 'Sakura Gyoza', price: 14, category: 'small-plates', vegetarian: true },
    { name: 'Unagi Nigiri', price: 18, category: 'sushi', glutenFree: true },
    { name: 'Yakitori Moriawase', price: 22, category: 'yakitori' },
    { name: 'Matcha Tiramisu', price: 10, category: 'dessert', vegetarian: true }
  ]

  useEffect(() => {
    const handleScroll = () => setNavIsSticky(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    
    const heroInterval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % 3)
    }, 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(heroInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#333333]">
      {/* Navigation */}
      <nav className={`fixed w-full transition-all duration-300 ${navIsSticky ? 'bg-[#333333]/90 backdrop-blur-md py-4 shadow-xl' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#A68DAD] rounded-full"></div>
            <span className="font-serif text-2xl text-[#E4D6B3]">Tsuki Izakaya</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="font-sans text-[#E4D6B3] hover:text-[#A68DAD] transition-colors"
              >
                Menu
              </button>
              {isMenuOpen && (
                <div className="absolute mt-2 w-48 bg-[#E4D6B3] rounded-md shadow-lg">
                  {['Small Plates', 'Yakitori', 'Sushi', 'Drinks'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-3 text-[#333333] hover:bg-[#A68DAD]/20"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {['About', 'Reservations', 'Location', 'Events'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-[#E4D6B3] hover:text-[#A68DAD] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000">
          <img 
            src={`https://source.unsplash.com/random/1920x1080/?japanese-restaurant,${heroSlide}`} 
            alt="Restaurant ambiance" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-[#E4D6B3] mb-8">
            Modern Izakaya Experience
          </h1>
          <button className="bg-[#A68DAD] text-[#333333] px-8 py-3 rounded-full hover:bg-[#A68DAD]/90 transition-colors">
            Book a Table
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-sans text-[#E4D6B3] mb-12 text-center">Our Menu</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {['all', 'vegetarian', 'gluten-free'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter 
                  ? 'bg-[#A68DAD] text-[#333333]' 
                  : 'bg-[#E4D6B3]/20 text-[#E4D6B3]'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {menuItems
            .filter(item => activeFilter === 'all' || item[activeFilter])
            .map((item, index) => (
              <div 
                key={index}
                className="bg-[#E4D6B3]/10 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="h-48 bg-[#333333]/20 rounded-lg mb-4" />
                <h3 className="text-xl font-sans text-[#E4D6B3]">{item.name}</h3>
                <p className="text-[#A68DAD] font-serif text-2xl mt-2">${item.price}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Reservations Section */}
      <section className="py-20 bg-[#E4D6B3]/10">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-sans text-[#E4D6B3] mb-12 text-center">Reservations</h2>
          <div className="space-y-6 bg-[#333333]/50 p-8 rounded-xl">
            <div>
              <label className="block text-[#E4D6B3] mb-2">Date</label>
              <input 
                type="date" 
                className="w-full bg-[#E4D6B3]/20 text-[#E4D6B3] rounded-lg px-4 py-3"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#E4D6B3] mb-2">Time</label>
                <select className="w-full bg-[#E4D6B3]/20 text-[#E4D6B3] rounded-lg px-4 py-3">
                  {['18:00', '19:00', '20:00', '21:00'].map((time) => (
                    <option key={time} className="text-[#333333]">{time}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#E4D6B3] mb-2">Party Size</label>
                <input 
                  type="number" 
                  min="1" 
                  max="8"
                  className="w-full bg-[#E4D6B3]/20 text-[#E4D6B3] rounded-lg px-4 py-3"
                />
              </div>
            </div>

            <button className="w-full bg-[#A68DAD] text-[#333333] py-3 rounded-lg hover:bg-[#A68DAD]/90 transition-colors">
              Confirm Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333]/90 backdrop-blur-md mt-20 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-[#E4D6B3]">
          <div>
            <h3 className="font-serif text-2xl mb-4">Tsuki Izakaya</h3>
            <p className="opacity-80">Serving modern Japanese cuisine since 2015</p>
          </div>
          
          <div>
            <h4 className="font-sans mb-4">Contact</h4>
            <p className="opacity-80">123 Sakura Street</p>
            <p className="opacity-80">Tokyo, Japan</p>
            <p className="opacity-80">info@tsuki-izakaya.com</p>
          </div>
          
          <div>
            <h4 className="font-sans mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="opacity-80 hover:opacity-100 hover:text-[#A68DAD] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import react, import { useState, useEffect } from 'react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-colors ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Ragnova IT</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-300 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900">
            {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="block px-6 py-2 text-gray-300 hover:bg-gray-800">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Tech background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/80" />
        </div>
        
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative IT Solutions for Tomorrow’s Challenges
          </h1>
          <p className="text-xl text-gray-300 mb-8">Strategic Technology Consulting & Development Services</p>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
            Explore Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: '🌐', title: 'Cloud Solutions', desc: 'Secure and scalable cloud infrastructure implementation'},
              {icon: '🛡️', title: 'Cybersecurity', desc: 'Comprehensive digital protection strategies'},
              {icon: '🤖', title: 'AI Integration', desc: 'Smart automation and machine learning solutions'},
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Driving Digital Transformation</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Ragnova IT, we combine technical excellence with strategic vision to deliver 
              transformative solutions that propel businesses forward in the digital age.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80" 
              alt="Digital transformation" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <textarea 
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Send Message
            </button>
          </form>
          
          <div className="mt-12 text-center space-y-2">
            <p className="text-gray-600">Email: contact@ragnova-it.com</p>
            <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">Ragnova IT</h3>
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                <a key={platform} href="#" className="hover:text-cyan-500 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

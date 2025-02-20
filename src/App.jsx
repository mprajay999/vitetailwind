
// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatBot from './components/layout/ChatBot';
import {
  Hero,
  About,
  Menu,
  Gallery,
  Reservations,
  Contact
} from './components/sections';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Reservations />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}

export default App;

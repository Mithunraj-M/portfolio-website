import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css'; // Global styles

const App = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;

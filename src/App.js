import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ReactGA from 'react-ga';
import Footer from './components/Footer';

// Inicjalizacja Google Analytics z Twoim ID śledzenia
ReactGA.initialize('G-2GRZY4Q1FJ'); // Zamień na swoje ID śledzenia

// Śledzenie każdej wizyty na stronie głównej
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <div>
    <Header />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
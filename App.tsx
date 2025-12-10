import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DesignConsultant } from './components/DesignConsultant';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* Integrated AI Consultant Feature - The "World-class" addition */}
        <DesignConsultant /> 
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programmes from './pages/Programmes';
import TrainingPartners from './pages/TrainingPartners';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import InquiryModal from './components/InquiryModal';

function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onInquiryClick={() => setIsInquiryModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onInquiryClick={() => setIsInquiryModalOpen(true)} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/training-partners" element={<TrainingPartners />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
        <InquiryModal 
          isOpen={isInquiryModalOpen} 
          onClose={() => setIsInquiryModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
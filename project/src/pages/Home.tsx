import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Courses from '../components/Courses';
import Facilities from '../components/Facilities';
import CampusLife from '../components/CampusLife';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import News from '../components/News';
import Contact from '../components/Contact';

interface HomeProps {
  onInquiryClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onInquiryClick }) => {
  return (
    <div>
      <Hero onInquiryClick={onInquiryClick} />
      <About />
      <WhyChooseUs />
      <Courses />
      <Facilities />
      <CampusLife />
      <Gallery />
      <Testimonials />
      <Stats />
      <News />
      <Contact />
    </div>
  );
};

export default Home;
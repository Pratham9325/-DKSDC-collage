import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onInquiryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInquiryClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-blue-400">DKSDC Department</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Empowering Students with Skill-Based Education for a Brighter Future
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onInquiryClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore Courses</span>
            <ArrowRight size={20} />
          </button>
          
          <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 transition-all duration-300">
            <Play size={20} />
            <span>Campus Tour</span>
          </button>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400">5000+</div>
            <div className="text-sm text-gray-200">Students</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-gray-200">Courses</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400">25+</div>
            <div className="text-sm text-gray-200">Years</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400">95%</div>
            <div className="text-sm text-gray-200">Placement</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
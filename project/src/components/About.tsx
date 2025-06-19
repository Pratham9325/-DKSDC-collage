import React from 'react';
import { Award, Target, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About DKSDC Department</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in skill-based education with a commitment to excellence, innovation, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              DKSDC Department has been at the forefront of technical education for over two decades. 
              We are committed to providing industry-relevant education that prepares students for the 
              challenges of tomorrow's workforce.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our institution is affiliated with leading educational boards and maintains strong 
              partnerships with industry leaders to ensure our curriculum remains current and practical.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                AICTE Approved
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ISO Certified
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                NAAC Accredited
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Campus Building"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="text-blue-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class technical education that empowers students with practical skills, 
              critical thinking abilities, and ethical values necessary for successful careers and 
              meaningful contributions to society.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="text-green-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a premier institution for technical education, fostering innovation, 
              research excellence, and producing globally competent professionals who drive technological 
              advancement and social progress.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h4>
            <p className="text-gray-600">
              Highly qualified and experienced faculty members dedicated to student success.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Industry Curriculum</h4>
            <p className="text-gray-600">
              Curriculum designed in collaboration with industry experts for real-world readiness.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence Awards</h4>
            <p className="text-gray-600">
              Recognized for outstanding contributions to technical education and student development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
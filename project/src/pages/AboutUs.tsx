import React from 'react';
import { Award, Target, Users, BookOpen, Star, Building, Globe, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  const mentors = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chairman, KCE Society',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visionary leader with 30+ years in education and industry.'
    },
    {
      name: 'Prof. Sunita Sharma',
      position: 'Director, Academic Affairs',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in curriculum development and educational innovation.'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Head of Research',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Leading researcher in emerging technologies and AI.'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Singh',
      position: 'Principal',
      department: 'Administration',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Prof. Rahul Desai',
      position: 'HOD Computer Science',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Kavya Reddy',
      position: 'HOD Mechanical',
      department: 'Mechanical Engineering',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Prof. Arjun Mehta',
      position: 'HOD Electronics',
      department: 'Electronics & Communication',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const affiliations = [
    {
      name: 'AICTE',
      description: 'All India Council for Technical Education',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'NAAC',
      description: 'National Assessment and Accreditation Council',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'University of Pune',
      description: 'Affiliated to University of Pune',
      logo: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About DKSDC</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our journey, leadership, and commitment to excellence in technical education.
          </p>
        </div>
      </section>

      {/* About KCE Society */}
      <section id="kce-society" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About KCE Society</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Knowledge and Career Enhancement Society has been a pioneer in technical education for over two decades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Foundation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 1999, the KCE Society was founded with a vision to bridge the gap between 
                academic learning and industry requirements. Our society has consistently worked towards 
                providing quality education that empowers students with practical skills and knowledge.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in holistic development and have created an ecosystem that nurtures innovation, 
                creativity, and entrepreneurship among our students. Our commitment to excellence has made 
                us a trusted name in technical education.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Building className="text-blue-600 mb-2" size={32} />
                  <h4 className="font-bold text-gray-900">Multiple Campuses</h4>
                  <p className="text-sm text-gray-600">State-of-the-art facilities</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Globe className="text-green-600 mb-2" size={32} />
                  <h4 className="font-bold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-600">International partnerships</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="KCE Society Campus"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders who guide our institution towards excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{mentor.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Institute */}
      <section id="institute" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Institute</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DKSDC Department stands as a beacon of excellence in technical education.
            </p>
          </div>

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
                <Heart className="text-purple-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Student Care</h4>
              <p className="text-gray-600">
                Comprehensive support system for academic and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our academic departments and administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">{member.position}</p>
                  <p className="text-gray-500 text-xs">{member.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section id="affiliations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Affiliations & Accreditations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our institute is recognized and accredited by leading educational bodies and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="w-16 h-16 object-cover rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{affiliation.name}</h3>
                <p className="text-gray-600 text-sm">{affiliation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
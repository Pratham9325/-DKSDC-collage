import React, { useState } from 'react';
import { Cpu, BookOpen, Trophy, Home, Wifi, Car, Coffee, Users, ChevronRight, Star } from 'lucide-react';

const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('laboratories');

  const laboratories = [
    {
      name: 'Computer Science Laboratory',
      description: 'State-of-the-art computer lab with latest hardware and software for programming and development.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['50+ High-end PCs', 'Latest Software', 'High-speed Internet', '24/7 Access'],
      capacity: '50 students'
    },
    {
      name: 'Electronics Laboratory',
      description: 'Advanced electronics lab equipped with modern instruments for circuit design and testing.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Digital Oscilloscopes', 'Function Generators', 'Power Supplies', 'PCB Design Tools'],
      capacity: '40 students'
    },
    {
      name: 'Mechanical Workshop',
      description: 'Comprehensive mechanical workshop with CNC machines and modern manufacturing equipment.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['CNC Machines', 'Lathe Machines', '3D Printers', 'CAD/CAM Software'],
      capacity: '30 students'
    },
    {
      name: 'Physics Laboratory',
      description: 'Well-equipped physics lab for conducting experiments in mechanics, optics, and electronics.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Optical Instruments', 'Measurement Tools', 'Experimental Setups', 'Safety Equipment'],
      capacity: '35 students'
    },
    {
      name: 'Chemistry Laboratory',
      description: 'Modern chemistry lab with fume hoods and safety equipment for chemical experiments.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Fume Hoods', 'Chemical Storage', 'Analytical Instruments', 'Safety Showers'],
      capacity: '40 students'
    },
    {
      name: 'Language Laboratory',
      description: 'Digital language lab for improving communication skills and language proficiency.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Audio-Visual Systems', 'Individual Booths', 'Recording Equipment', 'Language Software'],
      capacity: '45 students'
    }
  ];

  const libraryFeatures = [
    {
      title: 'Digital Library',
      description: 'Access to thousands of e-books, journals, and research papers online.',
      icon: Cpu,
      stats: '10,000+ E-books'
    },
    {
      title: 'Reading Halls',
      description: 'Quiet study spaces with comfortable seating and proper lighting.',
      icon: BookOpen,
      stats: '200 Seats'
    },
    {
      title: 'Reference Section',
      description: 'Comprehensive collection of reference books and academic materials.',
      icon: Users,
      stats: '5,000+ Books'
    },
    {
      title: 'Research Journals',
      description: 'Access to national and international research journals and publications.',
      icon: Star,
      stats: '500+ Journals'
    }
  ];

  const sportsFeatures = [
    {
      name: 'Indoor Sports Complex',
      description: 'Multi-purpose indoor facility for badminton, table tennis, and other indoor games.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      facilities: ['Badminton Courts', 'Table Tennis', 'Chess Room', 'Gymnasium']
    },
    {
      name: 'Outdoor Sports Ground',
      description: 'Large playground for cricket, football, volleyball, and athletics.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      facilities: ['Cricket Ground', 'Football Field', 'Volleyball Court', 'Athletics Track']
    },
    {
      name: 'Swimming Pool',
      description: 'Olympic-size swimming pool with modern filtration and safety systems.',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600',
      facilities: ['Olympic Size Pool', 'Changing Rooms', 'Safety Equipment', 'Professional Coaching']
    }
  ];

  const hostelFeatures = [
    {
      title: 'Boys Hostel',
      description: 'Comfortable accommodation for male students with modern amenities.',
      capacity: '500 students',
      amenities: ['AC Rooms', 'Wi-Fi', 'Mess Facility', '24/7 Security', 'Recreation Room', 'Laundry']
    },
    {
      title: 'Girls Hostel',
      description: 'Safe and secure accommodation for female students with all facilities.',
      capacity: '400 students',
      amenities: ['AC Rooms', 'Wi-Fi', 'Mess Facility', '24/7 Security', 'Common Room', 'Laundry']
    }
  ];

  const tabs = [
    { id: 'laboratories', label: 'Laboratories' },
    { id: 'library', label: 'Library' },
    { id: 'sports', label: 'Sports Facility' },
    { id: 'hostel', label: 'Hostel' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">World-Class Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our campus is equipped with state-of-the-art facilities designed to provide the best learning environment for our students.
          </p>
        </div>
      </section>

      {/* Facility Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Laboratories Tab */}
          {activeTab === 'laboratories' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Laboratories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our laboratories are equipped with the latest technology and equipment to provide hands-on learning experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {laboratories.map((lab, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <img
                      src={lab.image}
                      alt={lab.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{lab.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{lab.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Features:</p>
                        <div className="space-y-1">
                          {lab.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-600">
                              <ChevronRight size={12} className="text-blue-500 mr-1" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-medium text-blue-600">Capacity: {lab.capacity}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Library Tab */}
          {activeTab === 'library' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Library</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our library is a hub of knowledge with extensive collections and modern facilities for research and study.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Library"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Knowledge Center</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our library houses over 50,000 books, journals, and digital resources. With comfortable reading spaces, 
                    group study rooms, and 24/7 access to digital resources, it serves as the perfect environment for learning and research.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-sm text-gray-600">Books & Journals</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">200</div>
                      <div className="text-sm text-gray-600">Reading Seats</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {libraryFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-blue-600" size={32} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                      <div className="text-blue-600 font-semibold text-sm">{feature.stats}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sports Tab */}
          {activeTab === 'sports' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports & Recreation</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive sports facilities to promote physical fitness and recreational activities among students.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sportsFeatures.map((sport, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{sport.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{sport.description}</p>
                      
                      <div className="space-y-2">
                        {sport.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Trophy size={14} className="text-green-500 mr-2" />
                            {facility}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hostel Tab */}
          {activeTab === 'hostel' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hostel Accommodation</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Safe and comfortable accommodation facilities for outstation students with all modern amenities.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img
                    src="https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hostel"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Home Away From Home</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our hostel facilities provide a safe, comfortable, and conducive environment for students. 
                    With modern amenities, nutritious food, and 24/7 security, we ensure that students feel at home 
                    while focusing on their studies.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">900</div>
                      <div className="text-sm text-gray-600">Total Capacity</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Security</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hostelFeatures.map((hostel, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{hostel.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{hostel.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-lg font-semibold text-blue-600 mb-2">Capacity: {hostel.capacity}</div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hostel.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Home size={14} className="text-blue-500 mr-2" />
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Facility Overview</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive facilities support every aspect of student life and learning.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Laboratories</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600">Library Books</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">900+</div>
                <div className="text-gray-600">Hostel Capacity</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">WiFi Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
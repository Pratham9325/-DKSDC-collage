import React from 'react';
import { Cpu, BookOpen, Trophy, Home, Wifi, Car, Coffee, Users } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: Cpu,
      title: 'Advanced Laboratories',
      description: 'State-of-the-art computer labs, electronics labs, and mechanical workshops with the latest equipment.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Computer Labs', 'Electronics Lab', 'Mechanical Workshop', 'Research Facilities']
    },
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Comprehensive library with over 50,000 books, digital resources, and quiet study spaces.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['50,000+ Books', 'Digital Library', 'Study Halls', 'Research Journals']
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'Complete sports facilities including indoor and outdoor games, gymnasium, and fitness center.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Indoor Games', 'Outdoor Sports', 'Gymnasium', 'Swimming Pool']
    },
    {
      icon: Home,
      title: 'Hostel Facilities',
      description: 'Comfortable accommodation for outstation students with mess facilities and 24/7 security.',
      image: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Boys Hostel', 'Girls Hostel', 'Mess Facility', '24/7 Security']
    },
    {
      icon: Wifi,
      title: 'Campus-wide WiFi',
      description: 'High-speed internet connectivity across the entire campus for seamless digital learning.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['High-speed Internet', 'Campus-wide Coverage', 'Digital Classrooms', 'Online Resources']
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Bus services connecting major areas of the city with safe and comfortable transportation.',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Bus Service', 'Multiple Routes', 'Safe Transport', 'Affordable Rates']
    },
    {
      icon: Coffee,
      title: 'Cafeteria & Food Court',
      description: 'Multiple dining options with healthy and hygienic food at affordable prices.',
      image: 'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Multi-cuisine', 'Hygienic Food', 'Affordable Prices', 'Comfortable Seating']
    },
    {
      icon: Users,
      title: 'Auditorium & Seminar Halls',
      description: 'Modern auditorium and seminar halls equipped with audio-visual systems for events and lectures.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['500-seat Auditorium', 'Seminar Halls', 'A/V Equipment', 'Conference Rooms']
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is equipped with modern facilities designed to provide the best learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facility Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
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
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1000+</div>
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
  );
};

export default Facilities;
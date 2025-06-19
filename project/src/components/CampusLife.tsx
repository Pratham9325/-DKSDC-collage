import React from 'react';
import { Play, Calendar, Users, Music, Palette, Trophy } from 'lucide-react';

const CampusLife: React.FC = () => {
  const activities = [
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Annual cultural festivals, music competitions, and talent shows.'
    },
    {
      icon: Trophy,
      title: 'Sports Tournaments',
      description: 'Inter-college competitions and recreational sports activities.'
    },
    {
      icon: Users,
      title: 'Student Clubs',
      description: 'Technical clubs, hobby groups, and professional societies.'
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Art exhibitions, creative workshops, and design competitions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life & Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life with diverse activities, events, and opportunities for personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Campus Life"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                <Play className="text-blue-600 ml-1" size={32} />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Campus Tour Video</h4>
              <p className="text-sm opacity-90">Explore our beautiful campus</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Life at DKSDC</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our campus is a hub of activity where students engage in various cultural, sports, and academic 
              activities. From technical symposiums to cultural festivals, there's always something happening 
              to enrich your college experience.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in holistic development, which is why we encourage students to participate in 
              extracurricular activities alongside their academic pursuits. This helps in building leadership 
              skills, teamwork, and confidence.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">View All Events</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-600 mr-2" size={20} />
                <span className="text-sm text-gray-500">March 15, 2024</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tech Symposium 2024</h4>
              <p className="text-gray-600 text-sm">Annual technical symposium featuring workshops, competitions, and industry speakers.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="text-green-600 mr-2" size={20} />
                <span className="text-sm text-gray-500">March 22, 2024</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Cultural Festival</h4>
              <p className="text-gray-600 text-sm">Three-day cultural extravaganza with music, dance, drama, and art competitions.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="text-purple-600 mr-2" size={20} />
                <span className="text-sm text-gray-500">April 5, 2024</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Industry Connect</h4>
              <p className="text-gray-600 text-sm">Career fair and networking event with leading companies and industry professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
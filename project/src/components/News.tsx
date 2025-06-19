import React from 'react';
import { Calendar, ArrowRight, Bell, Users, Award, BookOpen } from 'lucide-react';

const News: React.FC = () => {
  const news = [
    {
      id: 1,
      type: 'announcement',
      title: 'Admissions Open for Academic Year 2024-25',
      description: 'Applications are now being accepted for all undergraduate and diploma programs. Early bird discount available until March 31st.',
      date: '2024-03-01',
      priority: 'high',
      icon: Bell
    },
    {
      id: 2,
      type: 'achievement',
      title: 'DKSDC Students Win National Tech Competition',
      description: 'Our Computer Science students secured first place in the National Coding Championship, competing against 500+ teams.',
      date: '2024-02-28',
      priority: 'medium',
      icon: Award
    },
    {
      id: 3,
      type: 'event',
      title: 'Industry Expert Lecture Series Begins',
      description: 'Weekly lectures by industry professionals starting March 15th. Sessions will cover emerging technologies and career guidance.',
      date: '2024-02-25',
      priority: 'medium',
      icon: Users
    },
    {
      id: 4,
      type: 'facility',
      title: 'New AI & Machine Learning Lab Inaugurated',
      description: 'State-of-the-art AI lab with latest hardware and software to support advanced research and practical learning.',
      date: '2024-02-20',
      priority: 'low',
      icon: BookOpen
    }
  ];

  const upcomingEvents = [
    {
      date: '15',
      month: 'MAR',
      title: 'Tech Symposium 2024',
      time: '9:00 AM',
      location: 'Main Auditorium'
    },
    {
      date: '22',
      month: 'MAR',
      title: 'Cultural Festival',
      time: '10:00 AM',
      location: 'Campus Grounds'
    },
    {
      date: '05',
      month: 'APR',
      title: 'Industry Connect Day',
      time: '11:00 AM',
      location: 'Convention Hall'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from DKSDC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Feed */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {news.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`bg-white border-l-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${getPriorityColor(item.priority)}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Icon className="text-blue-600" size={20} />
                          </div>
                          <div>
                            <span className="text-xs uppercase font-semibold text-gray-500 tracking-wide">
                              {item.type}
                            </span>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Calendar size={14} className="mr-1" />
                              {formatDate(item.date)}
                            </div>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors">
                <span>View All News</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="bg-blue-600 text-white text-center rounded-lg p-2 min-w-[60px]">
                      <div className="text-lg font-bold">{event.date}</div>
                      <div className="text-xs">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-500">{event.time} • {event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                View All Events →
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Academic Calendar
                </a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Exam Schedule
                </a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Library Resources
                </a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Placement Cell
                </a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Student Portal
                </a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  • Alumni Network
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Subscribe to our newsletter for the latest updates and announcements.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
import React from 'react';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

const Courses: React.FC = () => {
  const featuredCourses = [
    {
      title: 'Computer Science & Engineering',
      duration: '4 Years',
      students: '120 seats',
      type: 'Degree',
      description: 'Comprehensive program covering programming, algorithms, software engineering, and emerging technologies.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['AI & Machine Learning', 'Full Stack Development', 'Cloud Computing', 'Cybersecurity']
    },
    {
      title: 'Mechanical Engineering',
      duration: '4 Years',
      students: '100 seats',
      type: 'Degree',
      description: 'Traditional engineering discipline focused on design, manufacturing, and mechanical systems.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing']
    },
    {
      title: 'Electronics & Communication',
      duration: '4 Years',
      students: '80 seats',
      type: 'Degree',
      description: 'Electronics, communication systems, and digital signal processing technologies.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['VLSI Design', 'Embedded Systems', '5G Technology', 'IoT Applications']
    },
    {
      title: 'Information Technology',
      duration: '3 Years',
      students: '60 seats',
      type: 'Diploma',
      description: 'Practical IT skills including software development, database management, and networking.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Web Development', 'Database Management', 'Network Security', 'Mobile Apps']
    },
    {
      title: 'Digital Marketing',
      duration: '6 Months',
      students: '40 seats',
      type: 'Short Term',
      description: 'Complete digital marketing certification including SEO, social media, and analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics']
    },
    {
      title: 'Data Science & Analytics',
      duration: '1 Year',
      students: '30 seats',
      type: 'Certificate',
      description: 'MKCL iLike certification in data science, machine learning, and business analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Python/R Programming', 'Machine Learning', 'Data Visualization', 'Big Data']
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Degree': 'bg-blue-100 text-blue-800',
      'Diploma': 'bg-green-100 text-green-800',
      'Short Term': 'bg-orange-100 text-orange-800',
      'Certificate': 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Courses Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of industry-relevant courses designed to prepare you for tomorrow's challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(course.type)}`}>
                    {course.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105">
            <span>View All Courses</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
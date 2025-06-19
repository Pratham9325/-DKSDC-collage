import React, { useState } from 'react';
import { Clock, Users, Award, ArrowRight, BookOpen, Star, CheckCircle } from 'lucide-react';

const Programmes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('degree');

  const degreePrograms = [
    {
      title: 'Computer Science & Engineering',
      duration: '4 Years',
      seats: '120',
      eligibility: '12th Science with PCM',
      description: 'Comprehensive program covering programming, algorithms, software engineering, and emerging technologies.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['AI & Machine Learning', 'Full Stack Development', 'Cloud Computing', 'Cybersecurity'],
      career: ['Software Engineer', 'Data Scientist', 'System Architect', 'Tech Lead']
    },
    {
      title: 'Mechanical Engineering',
      duration: '4 Years',
      seats: '100',
      eligibility: '12th Science with PCM',
      description: 'Traditional engineering discipline focused on design, manufacturing, and mechanical systems.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing'],
      career: ['Design Engineer', 'Production Manager', 'Quality Engineer', 'R&D Specialist']
    },
    {
      title: 'Electronics & Communication',
      duration: '4 Years',
      seats: '80',
      eligibility: '12th Science with PCM',
      description: 'Electronics, communication systems, and digital signal processing technologies.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['VLSI Design', 'Embedded Systems', '5G Technology', 'IoT Applications'],
      career: ['Electronics Engineer', 'Network Engineer', 'Hardware Designer', 'Telecom Specialist']
    }
  ];

  const diplomaPrograms = [
    {
      title: 'Information Technology',
      duration: '3 Years',
      seats: '60',
      eligibility: '10th Pass',
      description: 'Practical IT skills including software development, database management, and networking.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Web Development', 'Database Management', 'Network Security', 'Mobile Apps'],
      career: ['IT Support', 'Web Developer', 'Database Admin', 'Network Technician']
    },
    {
      title: 'Mechanical Engineering',
      duration: '3 Years',
      seats: '50',
      eligibility: '10th Pass',
      description: 'Hands-on training in mechanical systems, manufacturing, and industrial processes.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Workshop Practice', 'Machine Design', 'Production Technology', 'Quality Control'],
      career: ['Technician', 'Supervisor', 'Quality Inspector', 'Maintenance Engineer']
    },
    {
      title: 'Electronics & Telecommunication',
      duration: '3 Years',
      seats: '40',
      eligibility: '10th Pass',
      description: 'Practical training in electronics circuits, communication systems, and digital technology.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Circuit Design', 'Communication Systems', 'Digital Electronics', 'Microprocessors'],
      career: ['Electronics Technician', 'Service Engineer', 'Field Engineer', 'Technical Support']
    }
  ];

  const shortTermPrograms = [
    {
      title: 'Digital Marketing',
      duration: '6 Months',
      seats: '40',
      eligibility: 'Graduate/12th Pass',
      description: 'Complete digital marketing certification including SEO, social media, and analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
      career: ['Digital Marketer', 'SEO Specialist', 'Social Media Manager', 'Content Creator']
    },
    {
      title: 'Web Development',
      duration: '4 Months',
      seats: '30',
      eligibility: '12th Pass',
      description: 'Full-stack web development with modern frameworks and technologies.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['HTML/CSS/JS', 'React/Node.js', 'Database Design', 'Deployment'],
      career: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer']
    },
    {
      title: 'Mobile App Development',
      duration: '5 Months',
      seats: '25',
      eligibility: '12th Pass',
      description: 'Native and cross-platform mobile application development.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Android/iOS', 'React Native', 'Flutter', 'App Store Deployment'],
      career: ['Mobile Developer', 'App Developer', 'UI/UX Designer', 'Freelancer']
    }
  ];

  const mkclPrograms = [
    {
      title: 'Data Science & Analytics',
      duration: '1 Year',
      seats: '30',
      eligibility: 'Graduate',
      description: 'MKCL iLike certification in data science, machine learning, and business analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Python/R Programming', 'Machine Learning', 'Data Visualization', 'Big Data'],
      career: ['Data Analyst', 'Data Scientist', 'Business Analyst', 'ML Engineer']
    },
    {
      title: 'Artificial Intelligence',
      duration: '8 Months',
      seats: '25',
      eligibility: 'Graduate with Math/CS',
      description: 'Advanced AI certification covering machine learning, deep learning, and neural networks.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
      career: ['AI Engineer', 'ML Specialist', 'Research Scientist', 'AI Consultant']
    },
    {
      title: 'Cloud Computing',
      duration: '6 Months',
      seats: '35',
      eligibility: 'Graduate/Diploma',
      description: 'Cloud platforms, services, and deployment strategies with industry certifications.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Microservices'],
      career: ['Cloud Engineer', 'DevOps Engineer', 'Solutions Architect', 'Cloud Consultant']
    }
  ];

  const tabs = [
    { id: 'degree', label: 'Degree Programs', programs: degreePrograms },
    { id: 'diploma', label: 'Diploma Programs', programs: diplomaPrograms },
    { id: 'short-term', label: 'Short Term Training', programs: shortTermPrograms },
    { id: 'mkcl', label: 'MKCL iLike Certificates', programs: mkclPrograms }
  ];

  const activePrograms = tabs.find(tab => tab.id === activeTab)?.programs || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programmes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our comprehensive range of programs designed to prepare you for successful careers in technology and engineering.
          </p>
        </div>
      </section>

      {/* Program Tabs */}
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

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock size={16} className="mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Users size={16} className="mr-1" />
                      {program.seats} seats
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Eligibility:</p>
                    <p className="text-sm text-gray-600">{program.eligibility}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {program.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Career Opportunities:</p>
                    <div className="space-y-1">
                      {program.career.map((career, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle size={12} className="text-green-500 mr-1" />
                          {career}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process to help you start your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600 text-sm">Submit online application with required documents</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entrance Test</h3>
              <p className="text-gray-600 text-sm">Appear for entrance examination or interview</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Merit List</h3>
              <p className="text-gray-600 text-sm">Check merit list and counseling schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Admission</h3>
              <p className="text-gray-600 text-sm">Complete admission formalities and fee payment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;
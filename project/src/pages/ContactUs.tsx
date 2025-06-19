import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91-020-12345678', '+91-020-87654321'],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@dksdc.ac.in', 'admissions@dksdc.ac.in'],
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Campus Address',
      details: ['DKSDC Campus, Education City', 'Pune, Maharashtra 411001'],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'orange'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'text-blue-600', name: 'Facebook' },
    { icon: Twitter, href: '#', color: 'text-sky-500', name: 'Twitter' },
    { icon: Instagram, href: '#', color: 'text-pink-600', name: 'Instagram' },
    { icon: Linkedin, href: '#', color: 'text-blue-700', name: 'LinkedIn' }
  ];

  const departments = [
    { name: 'Admissions Office', phone: '+91-020-12345678', email: 'admissions@dksdc.ac.in' },
    { name: 'Academic Office', phone: '+91-020-12345679', email: 'academic@dksdc.ac.in' },
    { name: 'Placement Cell', phone: '+91-020-12345680', email: 'placements@dksdc.ac.in' },
    { name: 'Student Affairs', phone: '+91-020-12345681', email: 'students@dksdc.ac.in' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any information you need. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for different types of inquiries and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${getColorClasses(info.color)}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-2">{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Department Contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Department Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-3">{dept.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Phone size={14} className="mr-2" />
                      {dept.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail size={14} className="mr-2" />
                      {dept.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="course">Course Information</option>
                        <option value="campus">Campus Visit</option>
                        <option value="placement">Placement Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p className="font-semibold">Interactive Campus Map</p>
                    <p className="text-sm">Google Maps integration would be embedded here</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Campus Location</h4>
                  <p className="text-blue-800 mb-2">
                    <strong>Address:</strong> DKSDC Campus, Education City, Pune, Maharashtra 411001
                  </p>
                  <p className="text-blue-800 mb-2">
                    <strong>Nearest Metro:</strong> Education City Metro Station (500m)
                  </p>
                  <p className="text-blue-800">
                    <strong>Landmarks:</strong> Near Tech Park and City Mall
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                      >
                        <Icon size={24} className="mr-3" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">DKSDC</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Empowering students with quality technical education and practical skills for successful careers. 
                Join us in building a brighter future through innovation and excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors text-gray-300 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Programmes</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Admissions</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Facilities</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Placements</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 +91-020-12345678</p>
                <p>✉️ info@dksdc.ac.in</p>
                <p>📍 Pune, Maharashtra</p>
                <p>🕒 Mon-Fri: 9AM-5PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 DKSDC Department. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
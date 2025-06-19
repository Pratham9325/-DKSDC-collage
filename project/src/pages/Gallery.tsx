import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar, Users } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    {
      src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'campus',
      year: '2024',
      title: 'Main Campus Building',
      event: 'Campus Infrastructure'
    },
    {
      src: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2024',
      title: 'Annual Convocation',
      event: 'Graduation Ceremony'
    },
    {
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'campus',
      year: '2023',
      title: 'Campus Grounds',
      event: 'Campus Life'
    },
    {
      src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facilities',
      year: '2024',
      title: 'Modern Library',
      event: 'Library Inauguration'
    },
    {
      src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2024',
      title: 'Cultural Festival',
      event: 'Annual Cultural Fest'
    },
    {
      src: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facilities',
      year: '2023',
      title: 'Computer Laboratory',
      event: 'Lab Facilities'
    },
    {
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2024',
      title: 'Sports Day',
      event: 'Annual Sports Meet'
    },
    {
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2023',
      title: 'Tech Symposium',
      event: 'Technical Event'
    },
    {
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facilities',
      year: '2024',
      title: 'Engineering Workshop',
      event: 'Workshop Facilities'
    },
    {
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2024',
      title: 'Hackathon 2024',
      event: 'Coding Competition'
    },
    {
      src: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facilities',
      year: '2023',
      title: 'IT Infrastructure',
      event: 'Technology Setup'
    },
    {
      src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      year: '2024',
      title: 'Industry Connect',
      event: 'Corporate Event'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'yearwise', label: 'Year Wise' },
    { id: 'eventwise', label: 'Event Wise' }
  ];

  const years = ['2024', '2023', '2022', '2021'];
  const events = [
    'Campus Infrastructure',
    'Graduation Ceremony',
    'Annual Cultural Fest',
    'Annual Sports Meet',
    'Technical Event',
    'Coding Competition',
    'Corporate Event'
  ];

  const getFilteredImages = () => {
    if (activeTab === 'all') {
      return images;
    }
    return images;
  };

  const filteredImages = getFilteredImages();

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our beautiful campus, modern facilities, and vibrant student life through our comprehensive photo gallery.
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
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

          {/* All Photos View */}
          {activeTab === 'all' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Photos</h2>
                <p className="text-lg text-gray-600">
                  Browse through our complete collection of campus and event photos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Year Wise View */}
          {activeTab === 'yearwise' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Year Wise Gallery</h2>
                <p className="text-lg text-gray-600">
                  Browse photos organized by academic years.
                </p>
              </div>

              {years.map((year) => {
                const yearImages = images.filter(img => img.year === year);
                if (yearImages.length === 0) return null;

                return (
                  <div key={year} className="mb-16">
                    <div className="flex items-center mb-8">
                      <Calendar className="text-blue-600 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-gray-900">Academic Year {year}</h3>
                      <span className="ml-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {yearImages.length} photos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {yearImages.map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                          onClick={() => openLightbox(images.indexOf(image))}
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white w-full">
                              <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                              <p className="text-sm opacity-90">{image.event}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Event Wise View */}
          {activeTab === 'eventwise' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Wise Gallery</h2>
                <p className="text-lg text-gray-600">
                  Browse photos organized by events and activities.
                </p>
              </div>

              {events.map((event) => {
                const eventImages = images.filter(img => img.event === event);
                if (eventImages.length === 0) return null;

                return (
                  <div key={event} className="mb-16">
                    <div className="flex items-center mb-8">
                      <Users className="text-green-600 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-gray-900">{event}</h3>
                      <span className="ml-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        {eventImages.length} photos
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {eventImages.map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                          onClick={() => openLightbox(images.indexOf(image))}
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white w-full">
                              <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                              <p className="text-sm opacity-90">{image.year}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={32} />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <h3 className="text-lg font-semibold">{filteredImages[selectedImage].title}</h3>
                  <p className="text-sm opacity-75">{filteredImages[selectedImage].event} • {filteredImages[selectedImage].year}</p>
                  <p className="text-sm opacity-75 mt-1">
                    {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
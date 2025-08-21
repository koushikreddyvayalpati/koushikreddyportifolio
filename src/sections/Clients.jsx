import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clientReviews } from '../constants/Index.js';

const Clients = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveReview((prev) => 
        prev === clientReviews.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleReviewChange = (index) => {
    setActiveReview(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const StarRating = ({ rating = 5 }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  StarRating.propTypes = {
    rating: PropTypes.number,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" id="testimonials">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What industry professionals and collaborators say about working with me
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5.0</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12" data-aos="fade-up" data-aos-delay="400">
          <div className="max-w-4xl mx-auto">
            
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="professional-card text-center">
              <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{clientReviews[activeReview].review}&rdquo;
              </blockquote>
              
              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="relative">
                  <img 
                    src={clientReviews[activeReview].img} 
                    alt={clientReviews[activeReview].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-500/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {clientReviews[activeReview].name}
                  </h4>
                  <p className="text-blue-400 font-medium mb-3">
                    {clientReviews[activeReview].position}
                  </p>
                  <StarRating rating={5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {clientReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleReviewChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeReview 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="600">
          {clientReviews.map((review, index) => (
            <div 
              key={review.id}
              className={`professional-card cursor-pointer transition-all duration-300 ${
                index === activeReview 
                  ? 'ring-2 ring-blue-500 bg-blue-500/5' 
                  : 'hover:scale-105 hover:ring-2 hover:ring-gray-600'
              }`}
              onClick={() => handleReviewChange(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={review.img} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-white truncate">{review.name}</h5>
                  <p className="text-gray-400 text-sm truncate">{review.position}</p>
                  <StarRating rating={5} />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                &ldquo;{review.review}&rdquo;
              </p>
              
              {/* Company Badge */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Verified Client
              </div>
            </div>
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center mt-8 gap-3">
          <div className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`}></div>
          <span className="text-gray-400 text-sm">
            {isAutoPlaying ? 'Auto-rotating testimonials' : 'Paused'}
          </span>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-white text-sm underline transition-colors"
          >
            {isAutoPlaying ? 'Pause' : 'Resume'}
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join these satisfied clients and let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="#about" className="btn-secondary">
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

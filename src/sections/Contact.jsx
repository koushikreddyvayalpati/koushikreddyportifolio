import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (name, value) => {
    const errors = { ...fieldErrors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else {
          delete errors.name;
        }
        break;
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          delete errors.email;
        }
        break;
      }
      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else {
          delete errors.message;
        }
        break;
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', form.name);
    const isEmailValid = validateField('email', form.email);
    const isMessageValid = validateField('message', form.message);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showAlert({
        show: true,
        text: 'Please fix the errors above',
        type: 'danger',
      });
      return;
    }
    
    setLoading(true);
    
    setTimeout(() => {
      emailjs
        .send(
          'service_k28wzwt',
          'template_t9vzd4s',
          {
            from_name: form.name,
            to_name: 'Koushik reddy',
            from_email: form.email,
            to_email: 'koushikreddyvayalpati@gmail.com',
            message: form.message,
          },
          'Z1IiKqd9FNW9gq0SQ',
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: 'Thank you! Your message has been sent successfully.',
              type: 'success',
            });

            setTimeout(() => {
              hideAlert(false);
              setForm({
                name: '',
                email: '',
                message: '',
              });
              setFieldErrors({});
            }, 3000);
          },
          (error) => {
            setLoading(false);
            console.error(error);

            showAlert({
              show: true,
              text: 'Sorry, there was an error sending your message. Please try again.',
              type: 'danger',
            });
          },
        );
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'koushikreddyvayalpati@gmail.com',
      href: 'mailto:koushikreddyvayalpati@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Buffalo, NY, USA',
      href: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      label: 'Availability',
      value: 'Open to opportunities',
      href: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="contact">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {alert.show && <Alert {...alert} />}
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info & 3D Model */}
          <div className="space-y-8" data-aos="fade-right">
            
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="professional-card group cursor-pointer">
                  {info.href ? (
                    <a href={info.href} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="professional-card">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/koushikreddyvayalpati" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.62-4.04-1.62-.54-1.36-1.33-1.72-1.33-1.72-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.12 0 0 1-.32 3.3 1.23a11.44 11.44 0 013-.4c1.02 0 2.04.14 3 .4 2.31-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.84 1.24 1.91 1.24 3.22 0 4.59-2.8 5.61-5.48 5.91.44.38.82 1.14.82 2.29v3.39c0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/vayalpatikoushikreddy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.3 20.4h-3.5v-10.4h3.5v10.4zM6.5 8.6c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1zM20.4 20.4h-3.5v-5.6c0-1.3-.5-2.2-1.8-2.2-.9 0-1.5.6-1.7 1.1-.1.3-.1.8-.1 1.2v5.5h-3.5s.1-9 0-10.4h3.5v1.5c.5-.8 1.3-2 3.2-2 2.3 0 4 1.5 4 4.7v6.2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Professional Quote */}
            <div className="professional-card hidden lg:block">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-5-5 1.414-1.414L11 14.172l7.586-7.586L20 8l-9 9z"/>
                  </svg>
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-6">
                  &ldquo;Great things are built by teams, but started by individuals with vision.&rdquo;
                </blockquote>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Currently Available</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Response time: Within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div data-aos="fade-left">
            <div className="professional-card">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind? I&apos;d love to hear about it. Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                      fieldErrors.name 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-700 focus:ring-blue-500/50 focus:border-blue-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                      fieldErrors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-700 focus:ring-blue-500/50 focus:border-blue-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-none ${
                      fieldErrors.message 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : 'border-gray-700 focus:ring-blue-500/50 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading || Object.keys(fieldErrors).length > 0}
                  onFocus={handleFocus} 
                  onBlur={handleBlur}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  * Required fields. Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-800" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefer a different way to connect?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:koushikreddyvayalpati@gmail.com" className="btn-secondary">
              Email Directly
            </a>
            <a href="https://www.linkedin.com/in/vayalpatikoushikreddy/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

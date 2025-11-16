import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Contact = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 pb-2 leading-[1.4]">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words max-w-3xl mx-auto">
            Looking for an internship in robotics, product design, or manufacturing? Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Contact Information</h2>
            
            <div className="space-y-6 pb-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1 break-words">Email</p>
                  <a 
                    href="mailto:JustisFindley@gmail.com"
                    className="text-gray-900 hover:text-primary transition-colors font-semibold break-words"
                  >
                    JustisFindley@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1 break-words">Phone</p>
                  <a 
                    href="tel:+13619206492"
                    className="text-gray-900 hover:text-secondary transition-colors font-semibold break-words"
                  >
                    (361) 920-6492
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1 break-words">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/Justis-Findley" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-accent transition-colors font-semibold break-words"
                  >
                    linkedin.com/in/Justis-Findley
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowContactModal(true)}
              className="mt-8 w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Send Message</span>
            </button>
          </div>

          {/* Skills & Interests */}
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Areas of Interest</h2>
            
            <div className="space-y-6 pb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 break-words">Seeking Opportunities In</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="break-words">Robotics Engineering & Design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="break-words">Product Design & Development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="break-words">Manufacturing & Process Engineering</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="break-words">CAD Design & 3D Modeling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="break-words">Engineering Analysis & Testing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 break-words">Key Skills</h3>
                <div className="flex flex-wrap gap-2 pb-2">
                  {['CAD Design', '3D Modeling', 'Manufacturing', 'Fabrication', 'Welding', 'SolidWorks', 'Fusion 360', 'Engineering Analysis'].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-3 py-1.5 rounded-full break-words">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 break-words">Response Time</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="break-words">Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="break-words">Phone: Same day response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="break-words">Available for internships starting Summer 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 break-words">Ready to Connect?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed break-words">
            I'm actively seeking internship opportunities in robotics, product design, or manufacturing. 
            I'm eager to learn from experienced engineers and contribute to building useful, reliable products. 
            Let's discuss how I can add value to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactModal(true)}
              className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              Send Message
            </button>
            <a
              href="/JustisFindley_Resume-2025.pdf"
              target="_blank"
              rel="noreferrer"
              className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-primary px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  );
};

export default Contact;
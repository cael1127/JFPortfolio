import React, { useState } from 'react';

const MEPortfolio = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-center md:text-left">
            Mechanical Engineering Portfolio
          </h1>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/Justis-Findley-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-primary px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/Justis-Findley"
              target="_blank"
              rel="noreferrer"
              className="group bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Objective & Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Objective</h2>
            <p className="text-gray-700 leading-relaxed">
              Mechanical engineering student looking for an internship in robotics, product design, or manufacturing.
              I want to learn from a hands-on team and help build useful, reliable products.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Education</h2>
            <div className="text-gray-900 font-semibold text-lg mb-2">Texas A&M University–Corpus Christi</div>
            <div className="text-gray-700 mb-2">Bachelor of Science in Mechanical Engineering</div>
            <div className="text-gray-600 text-sm">Expected May 2027</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'certs', label: 'Licenses and Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                activeSection === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-primary/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[ 
              {
                icon: '🚗',
                title: '1968 Chevy Chevelle Restoration',
                tech: 'Fabrication, Welding, Custom Parts',
                desc: 'Designed and restored vehicle systems; manufactured custom parts while balancing workload with school and sports.',
                route: 'proj-chevelle'
              },
              {
                icon: '🛥️',
                title: '30 ft Boat Restoration',
                tech: 'Fabrication, Bracket Design, Cost Reduction',
                desc: 'Restored vessel to working condition and fabricated custom brackets to reduce cost.',
                route: 'proj-boat'
              },
              {
                icon: '🎰',
                title: 'Slot Machine Restoration',
                tech: 'Arduino, Embedded, Reverse Engineering',
                desc: 'Reprogrammed the system using an Arduino to replace the outdated onboard computer.',
                route: 'proj-slot'
              },
              {
                icon: '📏',
                title: 'Torque Plate Project',
                tech: 'Team Manufacturing, Report Writing',
                desc: 'Worked with a team to manufacture a torque plate and authored documentation on the full process.',
                route: 'proj-torque'
              },
              {
                icon: '🚿',
                title: 'Bathroom Rack Design',
                tech: 'CAD Design, 3D Modeling, Product Design',
                desc: 'A functional and elegant bathroom rack design featuring modern aesthetics and practical storage solutions. Includes interactive 3D model with implode animation.',
                route: 'proj-bathroom-rack'
              },
              {
                icon: '⚙️',
                title: 'Pulley Manufacturing Project',
                tech: 'Manufacturing, Machining, Quality Control',
                desc: 'Comprehensive manufacturing project focused on pulley design and production. Includes complete documentation of manufacturing processes and technical analysis.',
                route: 'proj-pulley'
              },
              {
                icon: '🚗',
                title: 'Mustang Jeep Visor Support',
                tech: 'Fabrication, Custom Parts, Automotive',
                desc: 'Designed and fabricated a custom visor support system integrating Jeep visor components into a Mustang, demonstrating custom automotive fabrication skills.',
                route: 'proj-mustang-visor'
              },
              {
                icon: '🤖',
                title: 'FIRST Robotics Competition',
                tech: 'Robotics, Team Collaboration, CAD Design',
                desc: 'Active member of FIRST Robotics Team 7788, participating in robot design, build, programming, and competition strategy.',
                route: 'proj-first-robotics'
              }
            ].map((p, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(p.route)}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-left"
              >
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tech.split(', ').map((t, i) => (
                        <span key={i} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View details
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-6">
            {[ 
              {
                role: 'Head Porter',
                org: 'Port Lavaca Auto Group',
                period: 'May 2024 — August 2024',
                bullets: [
                  'Coordinated team members and inventory to improve workflow and quality.',
                  'Delivered vehicles and kept multiple departments organized.'
                ]
              },
              {
                role: 'Delivery Driver',
                org: "Domino's",
                period: 'June 2025 — Present',
                bullets: [
                  'Delivered orders on time with friendly, professional service.',
                  'Managed busy periods with strong time management and attention to detail.'
                ]
              }
            ].map((exp, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{exp.role} <span className="text-primary">•</span> {exp.org}</h3>
                  <span className="text-gray-600 font-medium">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'certs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧰', name: 'Apprentice Electrician License', meta: 'Expires May 10, 2026' },
              { icon: '🏗️', name: 'NCCER Electrical Levels 1 and 2', meta: 'Construction training program' },
              { icon: '🍽️', name: 'ServSafe', meta: 'Food Protection Manager Certification' },
              { icon: '📘', name: 'Relevant Courses', meta: 'Engineering Graphics, Circuit Analysis, Fluid Mechanics, Manufacturing Processes, and Introductory Programming' },
              { icon: '🤝', name: 'Clubs and Teams', meta: 'American Society of Mechanical Engineers (member), Formula SAE team, ASME project group, and FIRST Robotics (Team 7788)' },
              { icon: '💻', name: 'Software', meta: 'MATLAB, AutoCAD, Creo, Inventor, Ansys, MSC Adams, and Fusion 360' },
            ].map((c, k) => (
              <div key={k} className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{c.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MEPortfolio;



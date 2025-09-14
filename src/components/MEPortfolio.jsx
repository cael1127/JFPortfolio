import React, { useState } from 'react';

const MEPortfolio = ({ setCurrentPage }) => {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold gradient-text text-center md:text-left w-full md:w-auto">Mechanical Engineering Portfolio</h1>
          <div className="flex gap-2 flex-wrap justify-center md:justify-end w-full md:w-auto mt-3 md:mt-0">
            <a
              href="/Justis-Findley-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-ghost border border-gray-700 px-3 sm:px-4 py-2 rounded-lg transition-colors"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/Justis-Findley"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-secondary text-white font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={() => setCurrentPage('models')}
              className="bg-primary/80 hover:bg-secondary text-white font-medium px-3 sm:px-4 py-2 rounded-lg transition-colors"
            >
              Interactive 3D Models
            </button>
          </div>
        </div>

        {/* Objective & Education */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-ghost p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">Objective</h2>
            <p className="text-gray-700 text-sm">
              Mechanical engineering student looking for an internship in robotics, product design, or manufacturing.
              I want to learn from a hands-on team and help build useful, reliable products.
            </p>
          </div>
          <div className="bg-ghost p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <div className="text-gray-900">Texas A&M University–Corpus Christi</div>
            <div className="text-gray-600 text-sm mb-1">Bachelor of Science in Mechanical Engineering</div>
            <div className="text-gray-500 text-sm">Expected May 2027</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'certs', label: 'Licenses and Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={'px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-colors ' + (
                activeSection === tab.id ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {
                icon: '🚗',
                title: '1968 Chevy Chevelle Restoration',
                tech: 'Fabrication, Welding, Custom Parts',
                desc: 'Designed and restored vehicle systems; manufactured custom parts while balancing workload with school and sports.'
              },
              {
                icon: '🛥️',
                title: '30 ft Boat Restoration',
                tech: 'Fabrication, Bracket Design, Cost Reduction',
                desc: 'Restored vessel to working condition and fabricated custom brackets to reduce cost.'
              },
              {
                icon: '🎰',
                title: 'Slot Machine Restoration',
                tech: 'Arduino, Embedded, Reverse Engineering',
                desc: 'Reprogrammed the system using an Arduino to replace the outdated onboard computer.'
              },
              {
                icon: '📏',
                title: 'Torque Plate Project',
                tech: 'Team Manufacturing, Report Writing',
                desc: 'Worked with a team to manufacture a torque plate and authored documentation on the full process.'
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-ghost p-6 rounded-xl border border-primary/20 hover:border-primary transition-colors">
                <div className="flex items-center mb-3">
                  <div className="text-3xl mr-3">{p.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{p.desc}</p>
                {p.title.includes('Chevelle') && (
                  <button onClick={() => setCurrentPage('proj-chevelle')} className="text-accent hover:underline text-sm">View details →</button>
                )}
                {p.title.includes('Boat') && (
                  <button onClick={() => setCurrentPage('proj-boat')} className="text-accent hover:underline text-sm">View details →</button>
                )}
                {p.title.includes('Slot') && (
                  <button onClick={() => setCurrentPage('proj-slot')} className="text-accent hover:underline text-sm">View details →</button>
                )}
                {p.title.includes('Torque Plate') && (
                  <button onClick={() => setCurrentPage('proj-torque')} className="text-accent hover:underline text-sm">View details →</button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-5">
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
                org: 'Domino’s',
                period: 'June 2025 — Present',
                bullets: [
                  'Delivered orders on time with friendly, professional service.',
                  'Managed busy periods with strong time management and attention to detail.'
                ]
              }
            ].map((exp, i) => (
              <div key={i} className="bg-ghost p-6 rounded-xl border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.role} • {exp.org}</h3>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'certs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧰', name: 'Apprentice Electrician License', meta: 'Expires May 10, 2026' },
              { icon: '🏗️', name: 'National Center for Construction Education and Research — Electrical Levels 1 and 2', meta: 'Construction training program' },
              { icon: '🍽️', name: 'ServSafe', meta: 'Food Protection Manager Certification' },
              { icon: '📘', name: 'Relevant Courses', meta: 'Engineering Graphics, Circuit Analysis, Fluid Mechanics, Manufacturing Processes, and Introductory Programming' },
              { icon: '🤝', name: 'Clubs and Teams', meta: 'American Society of Mechanical Engineers (member), Formula SAE team, ASME project group, and FIRST Robotics (Team 7788)' },
              { icon: '💻', name: 'Software', meta: 'MATLAB, AutoCAD, Creo, Inventor, Ansys, MSC Adams, and Fusion 360' },
            ].map((c, k) => (
              <div key={k} className="bg-ghost p-6 rounded-xl border border-primary/20">
                <div className="flex items-center mb-2">
                  <div className="text-2xl mr-3">{c.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{c.name}</h4>
                    <p className="text-gray-600 text-sm">{c.meta}</p>
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



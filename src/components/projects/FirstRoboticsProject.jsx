import React from 'react';

const FirstRoboticsProject = () => {
  const videos = [
    '/ROB1.MOV',
    '/ROB2.MOV'
  ];

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Button */}
        <button
          onClick={() => window.location.hash = '#/portfolio'}
          className="mb-6 group inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 pb-2 break-words leading-[1.4]">
            FIRST Robotics Competition
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Team 7788</p>
        </div>

        {/* Overview and Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 break-words">
              Active member of FIRST Robotics Competition Team 7788, participating in the design, build, and programming 
              of competitive robots. FIRST Robotics combines engineering, teamwork, and problem-solving in an exciting 
              competition environment.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed text-lg pl-2">
              <li className="break-words">Collaborative robot design and development</li>
              <li className="break-words">Mechanical systems design and fabrication</li>
              <li className="break-words">Programming and control systems</li>
              <li className="break-words">Competition strategy and teamwork</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {['Robotics', 'Team Collaboration', 'CAD Design', 'Programming', 'Mechanical Design', 'Competition'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Competition Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
              {videos.map((video, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl">
                  <video 
                    src={video} 
                    controls
                    preload="metadata"
                    className="w-full h-80 object-contain rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg break-words">
                    Competition Video {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About FIRST Robotics */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">About FIRST Robotics</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg pb-2">
            <p className="break-words">
              FIRST (For Inspiration and Recognition of Science and Technology) Robotics Competition is an international 
              high school robotics competition where teams of students work with professional mentors to design, build, and 
              program robots to compete in challenging, alliance-based games.
            </p>
            <p className="break-words">
              Each season, teams are given a new game challenge and have six weeks to design and build a robot that can 
              complete various tasks. The competition emphasizes not just technical skills, but also teamwork, gracious 
              professionalism, and innovation.
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Team Contributions</h2>
          <div className="grid md:grid-cols-2 gap-6 pb-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Design & Engineering</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Mechanical system design and optimization</li>
                <li className="break-words">CAD modeling and prototyping</li>
                <li className="break-words">Material selection and fabrication</li>
                <li className="break-words">Assembly and integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Competition & Strategy</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Game strategy development</li>
                <li className="break-words">Alliance coordination</li>
                <li className="break-words">On-field robot operation</li>
                <li className="break-words">Technical troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRoboticsProject;

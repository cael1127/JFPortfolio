import React, { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import DemoOrganizer from './components/DemoOrganizer';
import Freelancing from './components/Freelancing';
import MEPortfolio from './components/MEPortfolio';
import Models from './components/Models';
import ResumePage from './components/ResumePage';
import Contact from './components/Contact';
import ChevelleProject from './components/projects/ChevelleProject';
import BoatProject from './components/projects/BoatProject';
import SlotMachineProject from './components/projects/SlotMachineProject';
import TorquePlateProject from './components/projects/TorquePlateProject';
import BathroomRackProject from './components/projects/BathroomRackProject';
import PulleyProject from './components/projects/PulleyProject';
import MustangJeepVisorProject from './components/projects/MustangJeepVisorProject';
import FirstRoboticsProject from './components/projects/FirstRoboticsProject';
import AIInterviewSimulator from './components/AIInterviewSimulator';
import RealTimeCollaboration from './components/RealTimeCollaboration';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import BlockchainAdvanced from './components/BlockchainAdvanced';
import EdgeComputing from './components/EdgeComputing';
import QuantumComputingDemo from './components/QuantumComputingDemo';
import EngineeringBackground from './components/EngineeringBackground';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import PerformanceMonitor from './components/PerformanceMonitor';

// Import all demo pages
import BlockchainDemoPage from './pages/BlockchainDemoPage';
import AquacultureDemoPage from './pages/AquacultureDemoPage';
import FinancialDemoPage from './pages/FinancialDemoPage';
import HealthcareDemoPage from './pages/HealthcareDemoPage';
import LogisticsDemoPage from './pages/LogisticsDemoPage';
import PortfolioBuilderDemoPage from './pages/PortfolioBuilderDemoPage';
import RestaurantAppDemoPage from './pages/RestaurantAppDemoPage';
import ResumeAnalyzerDemoPage from './pages/ResumeAnalyzerDemoPage';
import SmartCityDemoPage from './pages/SmartCityDemoPage';
import WhiteboardDemoPage from './pages/WhiteboardDemoPage';
import GamePlatformDemoPage from './pages/GamePlatformDemoPage';
import AIAssistantDemoPage from './pages/AIAssistantDemoPage';
import SnakeAIDemoPage from './pages/SnakeAIDemoPage';
import AIAgentsDemoPage from './pages/AIAgentsDemoPage';
import SentimentAnalysisDemoPage from './pages/SentimentAnalysisDemoPage';

import RAGChatbotDemoPage from './pages/RAGChatbotDemoPage';
import BookstoreAPIDemoPage from './pages/BookstoreAPIDemoPage';
import MERNExpenseTrackerDemoPage from './pages/MERNExpenseTrackerDemoPage';
import SocialNetworkDemoPage from './pages/SocialNetworkDemoPage';
import InteractiveResumeDemoPage from './pages/InteractiveResumeDemoPage';
import FraudDetectionDemoPage from './pages/FraudDetectionDemoPage';
import DeepfakeDetectionDemoPage from './pages/DeepfakeDetectionDemoPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Hash-based routing: sync URL -> state and state -> URL
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      return hash || 'home';
    };

    // Set initial page from hash
    setCurrentPage(parseHash());

    const onHashChange = () => {
      setCurrentPage(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = useCallback((pageId) => {
    if (!pageId) return;
    if (window.location.hash !== `#/${pageId}`) {
      window.location.hash = `#/${pageId}`;
    } else {
      // Force state update if same hash clicked again
      setCurrentPage(pageId);
    }
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={navigateTo} />;
      case 'portfolio':
        return <MEPortfolio setCurrentPage={navigateTo} />;
      case 'models':
        return <Models setCurrentPage={navigateTo} />;
      case 'demo-organizer':
        return <DemoOrganizer setCurrentPage={navigateTo} />;
      case 'freelancing':
        return <Freelancing setCurrentPage={navigateTo} />;
      case 'resume':
        return <ResumePage />;
      case 'contact':
        return <Contact />;
      case 'proj-chevelle':
        return <ChevelleProject />;
      case 'proj-boat':
        return <BoatProject />;
      case 'proj-slot':
        return <SlotMachineProject />;
      case 'proj-torque':
        return <TorquePlateProject />;
      case 'proj-bathroom-rack':
        return <BathroomRackProject />;
      case 'proj-pulley':
        return <PulleyProject />;
      case 'proj-mustang-visor':
        return <MustangJeepVisorProject />;
      case 'proj-first-robotics':
        return <FirstRoboticsProject />;
      case 'ai-interview-simulator':
        return <AIInterviewSimulator setCurrentPage={navigateTo} />;
      case 'real-time-collaboration':
        return <RealTimeCollaboration setCurrentPage={navigateTo} />;
      case 'advanced-analytics':
        return <AdvancedAnalytics setCurrentPage={navigateTo} />;
      case 'blockchain-advanced':
        return <BlockchainAdvanced setCurrentPage={navigateTo} />;
      case 'edge-computing':
        return <EdgeComputing setCurrentPage={navigateTo} />;
      case 'quantum-computing':
        return <QuantumComputingDemo setCurrentPage={navigateTo} />;
      
      // Demo pages
      case 'blockchain-demo':
        return <BlockchainDemoPage setCurrentPage={navigateTo} />;
      case 'aquaculture-demo':
        return <AquacultureDemoPage setCurrentPage={navigateTo} />;
      case 'financial-demo':
        return <FinancialDemoPage setCurrentPage={navigateTo} />;
      case 'healthcare-demo':
        return <HealthcareDemoPage setCurrentPage={navigateTo} />;
      case 'logistics-demo':
        return <LogisticsDemoPage setCurrentPage={navigateTo} />;
      case 'portfolio-builder-demo':
        return <PortfolioBuilderDemoPage setCurrentPage={navigateTo} />;
      case 'restaurant-app-demo':
        return <RestaurantAppDemoPage setCurrentPage={navigateTo} />;
      case 'resume-analyzer-demo':
        return <ResumeAnalyzerDemoPage setCurrentPage={navigateTo} />;
      case 'smart-city-demo':
        return <SmartCityDemoPage setCurrentPage={navigateTo} />;
      case 'whiteboard-demo':
        return <WhiteboardDemoPage setCurrentPage={navigateTo} />;
      case 'game-platform-demo':
        return <GamePlatformDemoPage setCurrentPage={navigateTo} />;
      case 'ai-assistant-demo':
        return <AIAssistantDemoPage setCurrentPage={navigateTo} />;
      case 'snake-ai-demo':
        return <SnakeAIDemoPage setCurrentPage={navigateTo} />;
      case 'ai-agents-demo':
        return <AIAgentsDemoPage setCurrentPage={navigateTo} />;
      case 'sentiment-analysis-demo':
        return <SentimentAnalysisDemoPage setCurrentPage={navigateTo} />;

      case 'rag-chatbot-demo':
        return <RAGChatbotDemoPage setCurrentPage={navigateTo} />;
      case 'bookstore-api-demo':
        return <BookstoreAPIDemoPage setCurrentPage={navigateTo} />;
      case 'mern-expense-tracker-demo':
        return <MERNExpenseTrackerDemoPage setCurrentPage={navigateTo} />;
      case 'social-network-demo':
        return <SocialNetworkDemoPage setCurrentPage={navigateTo} />;
      case 'interactive-resume-demo':
        return <InteractiveResumeDemoPage setCurrentPage={navigateTo} />;
      case 'fraud-detection-demo':
        return <FraudDetectionDemoPage setCurrentPage={navigateTo} />;
      case 'deepfake-detection-demo':
        return <DeepfakeDetectionDemoPage setCurrentPage={navigateTo} />;
      case 'resumeanalyzer-demo':
        return <ResumeAnalyzerDemoPage setCurrentPage={setCurrentPage} />;
      case 'aiassistant-demo':
        return <AIAssistantDemoPage setCurrentPage={setCurrentPage} />;
      case 'smartcity-demo':
        return <SmartCityDemoPage setCurrentPage={setCurrentPage} />;
      case 'logistics-demo':
        return <LogisticsDemoPage setCurrentPage={setCurrentPage} />;
      case 'healthcare-demo':
        return <HealthcareDemoPage setCurrentPage={setCurrentPage} />;
      case 'financial-demo':
        return <FinancialDemoPage setCurrentPage={setCurrentPage} />;
      case 'restaurantapp-demo':
        return <RestaurantAppDemoPage setCurrentPage={setCurrentPage} />;
      case 'whiteboard-demo':
        return <WhiteboardDemoPage setCurrentPage={setCurrentPage} />;
      case 'portfoliobuilder-demo':
        return <PortfolioBuilderDemoPage setCurrentPage={setCurrentPage} />;
      case 'gameplatform-demo':
        return <GamePlatformDemoPage setCurrentPage={setCurrentPage} />;
      
      default:
        return <Home setCurrentPage={navigateTo} />;
    }
  };

  // Navigation component
  const Navigation = () => {
    const navItems = [
      { id: 'home', label: 'Home', icon: '' },
      { id: 'portfolio', label: 'Portfolio', icon: '' },
      { id: 'models', label: '3D Models', icon: '' },
      { id: 'resume', label: 'Resume', icon: '' },
    ];

    return (
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 text-white font-bold text-lg hover:text-teal-400 transition-colors"
              >
                <span className="text-2xl">JF</span>
                <span>Justis Findley</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                      currentPage === item.id
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/30'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {currentPage === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 animate-pulse"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                ))}
                
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  mobileMenu.classList.toggle('hidden');
                }}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div id="mobile-menu" className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="App min-h-screen relative overflow-x-hidden overscroll-behavior scroll-smooth" style={{background: 'linear-gradient(180deg,#fbfbff,#a1f6ff)'}}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white text-gray-900 px-3 py-2 rounded shadow">Skip to content</a>
      <ScrollProgress />
      <EngineeringBackground />
      <nav className="bg-white/95 border-b border-gray-200/50 sticky top-0 z-40 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button onClick={() => navigateTo('home')} className="flex items-center space-x-3 text-gray-900 font-bold hover:text-primary transition-colors group">
            <div className="bg-gradient-to-br from-primary to-secondary text-white w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
              JF
            </div>
            <span className="text-xl font-bold hidden sm:block">Justis Findley</span>
          </button>
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'resume', label: 'Resume' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => navigateTo(item.id)} 
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'text-white bg-primary shadow-lg shadow-primary/30' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main id="main" className="relative z-10 overflow-x-hidden snap-container">
        <div key={currentPage} className="page-enter page-enter-active">
          {renderContent()}
        </div>
      </main>
      <ScrollToTop />
      <PerformanceMonitor />
    </div>
  );
}

export default App;
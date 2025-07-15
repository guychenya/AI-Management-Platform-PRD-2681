import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AIPersonas from './pages/AIPersonas';
import ConversationHistory from './pages/ConversationHistory';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Billing from './pages/Billing';
import HelpSupport from './pages/HelpSupport';
import Notifications from './pages/Notifications';
import Onboarding from './pages/Onboarding';
import { motion } from 'framer-motion';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {showOnboarding && (
          <Onboarding onComplete={() => setShowOnboarding(false)} />
        )}
        
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-6 py-8"
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/personas" element={<AIPersonas />} />
                <Route path="/conversations" element={<ConversationHistory />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/help" element={<HelpSupport />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
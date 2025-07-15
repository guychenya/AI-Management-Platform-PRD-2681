import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiHome, 
  FiUsers, 
  FiMessageCircle, 
  FiSettings, 
  FiUser, 
  FiCreditCard, 
  FiHelpCircle, 
  FiBell,
  FiMenu,
  FiX
} = FiIcons;

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: FiHome, label: 'Dashboard' },
    { path: '/personas', icon: FiUsers, label: 'AI Personas' },
    { path: '/conversations', icon: FiMessageCircle, label: 'Conversations' },
    { path: '/settings', icon: FiSettings, label: 'Settings' },
    { path: '/profile', icon: FiUser, label: 'Profile' },
    { path: '/billing', icon: FiCreditCard, label: 'Billing' },
    { path: '/help', icon: FiHelpCircle, label: 'Help & Support' },
    { path: '/notifications', icon: FiBell, label: 'Notifications' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 lg:relative lg:translate-x-0"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">AI Platform</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <SafeIcon icon={FiX} className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                location.pathname === item.path ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600' : ''
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
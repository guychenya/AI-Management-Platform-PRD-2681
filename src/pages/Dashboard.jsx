import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiUsers, FiClock, FiTrendingUp, FiActivity } = FiIcons;

const Dashboard = () => {
  const stats = [
    { label: 'Total Conversations', value: '1,234', icon: FiMessageCircle, color: 'bg-blue-500' },
    { label: 'Active Personas', value: '12', icon: FiUsers, color: 'bg-green-500' },
    { label: 'Avg Response Time', value: '0.8s', icon: FiClock, color: 'bg-yellow-500' },
    { label: 'Monthly Growth', value: '+23%', icon: FiTrendingUp, color: 'bg-purple-500' },
  ];

  const recentConversations = [
    { persona: 'GPT-4', topic: 'Code Review', time: '2 hours ago', status: 'completed' },
    { persona: 'Claude', topic: 'Content Writing', time: '4 hours ago', status: 'active' },
    { persona: 'Gemini', topic: 'Data Analysis', time: '1 day ago', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            New Conversation
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Conversations</h2>
          <div className="space-y-4">
            {recentConversations.map((conv, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMessageCircle} className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{conv.persona}</p>
                    <p className="text-sm text-gray-600">{conv.topic}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{conv.time}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    conv.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {conv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Analytics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Daily Active Users</span>
              <span className="font-semibold">2,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Peak Usage Time</span>
              <span className="font-semibold">2:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Most Used Persona</span>
              <span className="font-semibold">GPT-4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-semibold text-green-600">98.5%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
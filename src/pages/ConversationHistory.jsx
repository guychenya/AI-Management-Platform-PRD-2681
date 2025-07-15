import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMessageCircle, FiClock, FiStar, FiThumbsUp, FiThumbsDown, FiRefreshCw } = FiIcons;

const ConversationHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(null);

  const conversations = [
    {
      id: 1,
      persona: 'GPT-4',
      title: 'Code Review Session',
      date: '2024-01-15',
      time: '2:30 PM',
      duration: '45 min',
      status: 'completed',
      rating: 4,
      messages: [
        { sender: 'user', content: 'Can you review this React component for me?', timestamp: '2:30 PM' },
        { sender: 'ai', content: 'I\'d be happy to help! Please share the component code.', timestamp: '2:31 PM' },
        { sender: 'user', content: 'Here\'s the code: [component code]', timestamp: '2:32 PM' },
        { sender: 'ai', content: 'Great! I can see several areas for improvement...', timestamp: '2:33 PM' }
      ]
    },
    {
      id: 2,
      persona: 'Claude',
      title: 'Content Writing Help',
      date: '2024-01-14',
      time: '10:15 AM',
      duration: '30 min',
      status: 'completed',
      rating: 5,
      messages: [
        { sender: 'user', content: 'I need help writing a blog post about AI', timestamp: '10:15 AM' },
        { sender: 'ai', content: 'I\'d be happy to help! What specific aspect of AI would you like to focus on?', timestamp: '10:16 AM' }
      ]
    },
    {
      id: 3,
      persona: 'Gemini Pro',
      title: 'Data Analysis Project',
      date: '2024-01-13',
      time: '4:00 PM',
      duration: '1h 20min',
      status: 'completed',
      rating: 4,
      messages: [
        { sender: 'user', content: 'Help me analyze this dataset', timestamp: '4:00 PM' },
        { sender: 'ai', content: 'I\'ll help you analyze the data. Can you share the dataset?', timestamp: '4:01 PM' }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.persona.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const FeedbackModal = ({ conversation, onClose, onSubmit }) => {
    const [rating, setRating] = useState(conversation.rating || 0);
    const [feedback, setFeedback] = useState('');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4">Rate this conversation</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`w-8 h-8 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  <SafeIcon icon={FiStar} className="w-full h-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows="3"
              placeholder="Share your thoughts about this conversation..."
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(rating, feedback)}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Conversation History</h1>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversations List */}
        <div className="space-y-4">
          {filteredConversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-xl shadow-sm border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedConversation?.id === conversation.id ? 'border-primary-200' : 'border-gray-200'
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMessageCircle} className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{conversation.title}</h3>
                    <p className="text-sm text-gray-600">{conversation.persona}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{conversation.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{conversation.date}</span>
                  <span>{conversation.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{conversation.duration}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  conversation.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {conversation.status}
                </span>
                
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFeedbackModal(conversation);
                    }}
                    className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiStar} className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversation Detail */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {selectedConversation ? (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedConversation.title}</h2>
                  <p className="text-gray-600">{selectedConversation.persona} • {selectedConversation.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">{selectedConversation.rating}</span>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {selectedConversation.messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <SafeIcon icon={FiThumbsUp} className="w-4 h-4" />
                  <span>Helpful</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <SafeIcon icon={FiThumbsDown} className="w-4 h-4" />
                  <span>Not Helpful</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <SafeIcon icon={FiMessageCircle} className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a conversation to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Feedback Modal */}
      {feedbackModal && (
        <FeedbackModal
          conversation={feedbackModal}
          onClose={() => setFeedbackModal(null)}
          onSubmit={(rating, feedback) => {
            console.log('Feedback submitted:', { rating, feedback });
            setFeedbackModal(null);
          }}
        />
      )}
    </div>
  );
};

export default ConversationHistory;
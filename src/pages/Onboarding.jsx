import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiArrowLeft, FiCheck, FiX, FiUsers, FiMessageCircle, FiSettings, FiPlay } = FiIcons;

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to AI Management Platform',
      subtitle: 'Your gateway to specialized AI assistants',
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiUsers} className="w-12 h-12 text-primary-600" />
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Discover and interact with AI personas from top providers like OpenAI, Anthropic, Google, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">Multiple AI Providers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">Seamless Conversations</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiSettings} className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">Customizable Experience</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'personas',
      title: 'Explore AI Personas',
      subtitle: 'Find the perfect AI assistant for your needs',
      content: (
        <div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Available Personas:</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">🤖</div>
                <div>
                  <p className="font-medium">GPT-4 - General AI</p>
                  <p className="text-sm text-gray-600">Advanced language model for general tasks</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">📝</div>
                <div>
                  <p className="font-medium">Claude - Content Writing</p>
                  <p className="text-sm text-gray-600">Constitutional AI for helpful responses</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">📊</div>
                <div>
                  <p className="font-medium">Gemini - Data Analysis</p>
                  <p className="text-sm text-gray-600">Multimodal AI for complex reasoning</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Use the search and filter options to quickly find personas that match your specific needs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conversations',
      title: 'Start Conversations',
      subtitle: 'Learn how to interact with AI personas',
      content: (
        <div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Getting Started:</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <p className="font-medium">Select a Persona</p>
                  <p className="text-sm text-gray-600">Choose from available AI assistants</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <p className="font-medium">Start Chatting</p>
                  <p className="text-sm text-gray-600">Type your message and get instant responses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <p className="font-medium">Customize Settings</p>
                  <p className="text-sm text-gray-600">Adjust response style and preferences</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>Pro Tip:</strong> All conversations are automatically saved to your history for easy reference.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features',
      subtitle: 'Make the most of your AI platform',
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-primary-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Conversation History</h4>
              <p className="text-sm text-gray-600">Access and search through all your past conversations</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiSettings} className="w-8 h-8 text-primary-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Persona Settings</h4>
              <p className="text-sm text-gray-600">Customize AI behavior for each persona</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-primary-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Multiple Providers</h4>
              <p className="text-sm text-gray-600">Access AI from OpenAI, Anthropic, Google, and more</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <SafeIcon icon={FiCheck} className="w-8 h-8 text-primary-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Feedback System</h4>
              <p className="text-sm text-gray-600">Rate responses and provide feedback</p>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-800 text-sm">
              <strong>Remember:</strong> You can always access help and support from the sidebar menu.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'complete',
      title: 'You\'re All Set!',
      subtitle: 'Ready to start your AI journey',
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <SafeIcon icon={FiCheck} className="w-12 h-12 text-green-600" />
          </div>
          <p className="text-gray-600 text-lg mb-6">
            You now have everything you need to start using the AI Management Platform effectively.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Quick Start:</h4>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiPlay} className="w-4 h-4" />
                <span>Start First Conversation</span>
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{steps[currentStep].title}</h2>
              <p className="text-gray-600">{steps[currentStep].subtitle}</p>
            </div>
            <button
              onClick={skipTutorial}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiX} className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-3">
              <button
                onClick={skipTutorial}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Skip Tutorial
              </button>
              <button
                onClick={nextStep}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
                <SafeIcon icon={currentStep === steps.length - 1 ? FiCheck : FiArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
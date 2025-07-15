import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiPlay, FiSettings, FiStar } = FiIcons;

const AIPersonas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const personas = [
    {
      id: 1,
      name: 'GPT-4',
      provider: 'OpenAI',
      specialization: 'General AI',
      description: 'Advanced language model for general-purpose tasks',
      rating: 4.8,
      active: true,
      icon: '🤖',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Claude',
      provider: 'Anthropic',
      specialization: 'Content Writing',
      description: 'Constitutional AI focused on helpful, harmless, and honest responses',
      rating: 4.7,
      active: true,
      icon: '📝',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Gemini Pro',
      provider: 'Google',
      specialization: 'Data Analysis',
      description: 'Multimodal AI model for complex reasoning tasks',
      rating: 4.6,
      active: false,
      icon: '📊',
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Llama 2',
      provider: 'Ollama',
      specialization: 'Code Generation',
      description: 'Open-source language model for coding tasks',
      rating: 4.5,
      active: true,
      icon: '💻',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      name: 'Mixtral',
      provider: 'Ollama',
      specialization: 'Research',
      description: 'Mixture of experts model for research and analysis',
      rating: 4.4,
      active: false,
      icon: '🔬',
      color: 'bg-red-500'
    },
    {
      id: 6,
      name: 'DALL-E 3',
      provider: 'OpenAI',
      specialization: 'Image Generation',
      description: 'Advanced text-to-image generation model',
      rating: 4.9,
      active: true,
      icon: '🎨',
      color: 'bg-pink-500'
    }
  ];

  const providers = ['all', 'OpenAI', 'Anthropic', 'Google', 'Ollama'];
  const specializations = ['all', 'General AI', 'Content Writing', 'Data Analysis', 'Code Generation', 'Research', 'Image Generation'];

  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvider = selectedProvider === 'all' || persona.provider === selectedProvider;
    const matchesSpecialization = selectedSpecialization === 'all' || persona.specialization === selectedSpecialization;
    
    return matchesSearch && matchesProvider && matchesSpecialization;
  });

  const groupedPersonas = providers.reduce((acc, provider) => {
    if (provider === 'all') return acc;
    acc[provider] = filteredPersonas.filter(persona => persona.provider === provider);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">AI Personas</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Add Custom Persona
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search personas by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Providers</option>
              {providers.slice(1).map(provider => (
                <option key={provider} value={provider}>{provider}</option>
              ))}
            </select>
            
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Specializations</option>
              {specializations.slice(1).map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Personas Grid */}
      <div className="space-y-8">
        {Object.entries(groupedPersonas).map(([provider, personas]) => (
          personas.length > 0 && (
            <div key={provider}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{provider}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personas.map((persona, index) => (
                  <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white p-6 rounded-xl shadow-sm border-2 transition-all hover:shadow-md ${
                      persona.active ? 'border-primary-200' : 'border-gray-200 opacity-75'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${persona.color}`}>
                          {persona.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{persona.name}</h3>
                          <p className="text-sm text-gray-600">{persona.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">{persona.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{persona.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        persona.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {persona.active ? 'Active' : 'Inactive'}
                      </span>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          <SafeIcon icon={FiSettings} className="w-4 h-4" />
                        </button>
                        <button 
                          disabled={!persona.active}
                          className={`p-2 rounded-lg transition-colors ${
                            persona.active 
                              ? 'text-primary-600 hover:text-primary-700 hover:bg-primary-50' 
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <SafeIcon icon={FiPlay} className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {filteredPersonas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No personas found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AIPersonas;
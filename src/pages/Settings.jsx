import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSettings, FiBell, FiEye, FiShield, FiGlobe, FiDownload } = FiIcons;

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      updates: true,
      marketing: false
    },
    display: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC-5'
    },
    privacy: {
      analytics: true,
      cookies: true,
      dataSharing: false
    },
    ai: {
      responseStyle: 'balanced',
      verbosity: 'medium',
      autoSave: true
    }
  });

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const SettingSection = ({ title, icon, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <SafeIcon icon={icon} className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.div>
  );

  const ToggleSwitch = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-primary-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <SettingSection title="Notifications" icon={FiBell}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <ToggleSwitch
                enabled={settings.notifications.email}
                onChange={(value) => handleSettingChange('notifications', 'email', value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Push Notifications</p>
                <p className="text-sm text-gray-600">Get instant alerts</p>
              </div>
              <ToggleSwitch
                enabled={settings.notifications.push}
                onChange={(value) => handleSettingChange('notifications', 'push', value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Product Updates</p>
                <p className="text-sm text-gray-600">New features and improvements</p>
              </div>
              <ToggleSwitch
                enabled={settings.notifications.updates}
                onChange={(value) => handleSettingChange('notifications', 'updates', value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Marketing</p>
                <p className="text-sm text-gray-600">Promotional content</p>
              </div>
              <ToggleSwitch
                enabled={settings.notifications.marketing}
                onChange={(value) => handleSettingChange('notifications', 'marketing', value)}
              />
            </div>
          </div>
        </SettingSection>

        {/* Display */}
        <SettingSection title="Display" icon={FiEye}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={settings.display.theme}
                onChange={(e) => handleSettingChange('display', 'theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={settings.display.language}
                onChange={(e) => handleSettingChange('display', 'language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select
                value={settings.display.timezone}
                onChange={(e) => handleSettingChange('display', 'timezone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="UTC-5">UTC-5 (EST)</option>
                <option value="UTC-8">UTC-8 (PST)</option>
                <option value="UTC+0">UTC+0 (GMT)</option>
                <option value="UTC+1">UTC+1 (CET)</option>
              </select>
            </div>
          </div>
        </SettingSection>

        {/* Privacy */}
        <SettingSection title="Privacy & Security" icon={FiShield}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Analytics</p>
                <p className="text-sm text-gray-600">Help improve our service</p>
              </div>
              <ToggleSwitch
                enabled={settings.privacy.analytics}
                onChange={(value) => handleSettingChange('privacy', 'analytics', value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Cookies</p>
                <p className="text-sm text-gray-600">Essential for functionality</p>
              </div>
              <ToggleSwitch
                enabled={settings.privacy.cookies}
                onChange={(value) => handleSettingChange('privacy', 'cookies', value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Data Sharing</p>
                <p className="text-sm text-gray-600">Share with partners</p>
              </div>
              <ToggleSwitch
                enabled={settings.privacy.dataSharing}
                onChange={(value) => handleSettingChange('privacy', 'dataSharing', value)}
              />
            </div>
          </div>
        </SettingSection>

        {/* AI Preferences */}
        <SettingSection title="AI Preferences" icon={FiSettings}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Response Style</label>
              <select
                value={settings.ai.responseStyle}
                onChange={(e) => handleSettingChange('ai', 'responseStyle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="formal">Formal</option>
                <option value="balanced">Balanced</option>
                <option value="casual">Casual</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Verbosity</label>
              <select
                value={settings.ai.verbosity}
                onChange={(e) => handleSettingChange('ai', 'verbosity', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="concise">Concise</option>
                <option value="medium">Medium</option>
                <option value="detailed">Detailed</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-save Conversations</p>
                <p className="text-sm text-gray-600">Automatically save your chats</p>
              </div>
              <ToggleSwitch
                enabled={settings.ai.autoSave}
                onChange={(value) => handleSettingChange('ai', 'autoSave', value)}
              />
            </div>
          </div>
        </SettingSection>
      </div>

      {/* Data Export */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiDownload} className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Export Data</h3>
              <p className="text-sm text-gray-600">Download your conversation history and settings</p>
            </div>
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Export
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
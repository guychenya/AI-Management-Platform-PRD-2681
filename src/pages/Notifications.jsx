import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBell, FiCheck, FiTrash2, FiSettings, FiInfo, FiAlertCircle, FiCheckCircle } = FiIcons;

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: 'New AI Persona Available',
      message: 'GPT-4 Turbo is now available for all Pro subscribers',
      time: '2 hours ago',
      read: false,
      category: 'product'
    },
    {
      id: 2,
      type: 'success',
      title: 'Payment Successful',
      message: 'Your Pro subscription has been renewed for another month',
      time: '1 day ago',
      read: false,
      category: 'billing'
    },
    {
      id: 3,
      type: 'warning',
      title: 'Usage Limit Warning',
      message: 'You have used 80% of your monthly conversation limit',
      time: '2 days ago',
      read: true,
      category: 'usage'
    },
    {
      id: 4,
      type: 'info',
      title: 'Platform Update',
      message: 'New features added: Custom personas and improved search',
      time: '3 days ago',
      read: true,
      category: 'product'
    },
    {
      id: 5,
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated',
      time: '1 week ago',
      read: true,
      category: 'account'
    },
    {
      id: 6,
      type: 'warning',
      title: 'Maintenance Scheduled',
      message: 'Platform maintenance scheduled for tonight 2-4 AM EST',
      time: '1 week ago',
      read: true,
      category: 'system'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: notifications.length },
    { id: 'product', name: 'Product Updates', count: notifications.filter(n => n.category === 'product').length },
    { id: 'billing', name: 'Billing', count: notifications.filter(n => n.category === 'billing').length },
    { id: 'usage', name: 'Usage', count: notifications.filter(n => n.category === 'usage').length },
    { id: 'account', name: 'Account', count: notifications.filter(n => n.category === 'account').length },
    { id: 'system', name: 'System', count: notifications.filter(n => n.category === 'system').length }
  ];

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.category === filter);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return FiCheckCircle;
      case 'warning':
        return FiAlertCircle;
      case 'info':
      default:
        return FiInfo;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full">
              {unreadCount} unread
            </span>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className={`px-4 py-2 rounded-lg transition-colors ${
              unreadCount > 0 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Mark All Read
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <SafeIcon icon={FiSettings} className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Category Filter */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    filter === category.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Notifications List */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl shadow-sm border-2 p-6 transition-all ${
                  notification.read 
                    ? 'border-gray-200 opacity-75' 
                    : 'border-primary-200 bg-primary-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    getNotificationColor(notification.type)
                  }`}>
                    <SafeIcon 
                      icon={getNotificationIcon(notification.type)} 
                      className="w-5 h-5" 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-gray-700 mt-1">{notification.message}</p>
                        <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <SafeIcon icon={FiCheck} className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete notification"
                        >
                          <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <SafeIcon icon={FiBell} className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No notifications found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
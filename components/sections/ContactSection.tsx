'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Contact section with gradient background - matches the screenshot design
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container with Border and Background */}
        <div className="relative rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden">
          {/* Animated Wave Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Base layer - adapts to theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 dark:from-purple-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tl from-red-200/30 dark:from-red-900/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 dark:from-pink-900/20 via-transparent to-purple-200/20 dark:to-purple-900/20" />

            {/* Wave pattern lines - Dark mode */}
            <svg className="absolute inset-0 w-full h-full opacity-30 dark:block hidden" preserveAspectRatio="none">
              <defs>
                <pattern id="wave-pattern-dark" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path
                    d="M0 50 Q 25 30, 50 50 T 100 50"
                    stroke="url(#gradient1-dark)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.3"
                  />
                  <path
                    d="M0 60 Q 25 40, 50 60 T 100 60"
                    stroke="url(#gradient1-dark)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.2"
                  />
                  <path
                    d="M0 40 Q 25 20, 50 40 T 100 40"
                    stroke="url(#gradient2-dark)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.2"
                  />
                </pattern>
                <linearGradient id="gradient1-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient2-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern-dark)" />
            </svg>

            {/* Wave pattern lines - Light mode */}
            <svg className="absolute inset-0 w-full h-full opacity-20 block dark:hidden" preserveAspectRatio="none">
              <defs>
                <pattern id="wave-pattern-light" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path
                    d="M0 50 Q 25 30, 50 50 T 100 50"
                    stroke="url(#gradient1-light)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.4"
                  />
                  <path
                    d="M0 60 Q 25 40, 50 60 T 100 60"
                    stroke="url(#gradient1-light)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.3"
                  />
                  <path
                    d="M0 40 Q 25 20, 50 40 T 100 40"
                    stroke="url(#gradient2-light)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.3"
                  />
                </pattern>
                <linearGradient id="gradient1-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#db2777" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="gradient2-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#db2777" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern-light)" />
            </svg>

            {/* Additional flowing wave lines - Dark mode */}
            <div className="absolute inset-0 dark:block hidden" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 100px,
                  rgba(139, 92, 246, 0.03) 100px,
                  rgba(139, 92, 246, 0.03) 101px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 100px,
                  rgba(236, 72, 153, 0.03) 100px,
                  rgba(236, 72, 153, 0.03) 101px
                )
              `
            }} />

            {/* Additional flowing wave lines - Light mode */}
            <div className="absolute inset-0 block dark:hidden" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 100px,
                  rgba(139, 92, 246, 0.06) 100px,
                  rgba(139, 92, 246, 0.06) 101px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 100px,
                  rgba(236, 72, 153, 0.06) 100px,
                  rgba(236, 72, 153, 0.06) 101px
                )
              `
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Bringing your ideas to life.
                <br />
                <span className="gradient-text">Let&apos;s turn your vision into reality</span>
              </h2>
              <p className="text-gray-800 dark:text-gray-400 text-lg">
                Have a project in mind or just want to chat? Let&apos;s connect!
              </p>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500/50 transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@example.com"
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500/50 transition-all"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500/50 transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors [html.light_&]:!bg-gray-900 [html.light_&]:!text-white [html.light_&:hover]:!bg-gray-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

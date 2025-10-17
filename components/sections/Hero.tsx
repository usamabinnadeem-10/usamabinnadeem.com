'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl opacity-50" />

              {/* Avatar circle with border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/20 bg-transparent">
                <Image
                  src="/avatar.png"
                  alt="Usama"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hey, I&apos;m{' '}
              <span className="gradient-text">
                Usama
              </span>
              <span className="text-4xl md:text-5xl">✨</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              A <span className="gradient-text">Software Developer</span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              A <span className="text-white font-medium">fullstack developer</span> with solid foundations in{' '}
              <span className="text-white font-medium">design</span>. Passionate about crafting{' '}
              <span className="text-white font-medium">seamless user experiences</span>. I thrive at the intersection of creativity and functionality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">📧</span>
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 border border-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">👁️</span>
                View Projects
              </motion.a>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-600 mx-auto md:mx-0 mb-6" />

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: Github, href: 'https://github.com/usamabinnadeem-10', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/usama-bin-nadeem/', label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

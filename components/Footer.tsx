'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Name and Location */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Usama Bin Nadeem</h3>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              <span>🇵🇰</span> Based in Pakistan
            </p>
          </div>

          {/* Right Side - Credits and Social */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-3">
              Website Designed in Figma. Built with Next.js, TypeScript and Tailwind CSS.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-end">
              {[
                { icon: Github, href: 'https://github.com/usamabinnadeem-10', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/usama-bin-nadeem/', label: 'LinkedIn' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Usama. All rights are reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

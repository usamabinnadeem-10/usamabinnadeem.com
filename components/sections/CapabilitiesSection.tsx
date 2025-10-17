'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, Palette } from 'lucide-react';

/**
 * Capabilities section showing services - matches the screenshot design
 */
export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building Digital Experiences
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                // duration: 0.6,
              },
            },
          }}
        >
          {/* What I Can Do Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            // transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
            // style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">What I can do</h3>
            <p className="text-gray-400 mb-6">
              I can help develop solutions that will help you grow your business and reach new customers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Fullstack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Mobile App Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Database Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">API Integration</span>
              </li>
            </ul>
          </motion.div>

          {/* Tools I Use Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            // transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
            // style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Tools I Use</h3>
            <p className="text-gray-400 mb-6">
              I use the latest tools and technologies to build functional and scalable products.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">Frontend:</p>
                <p className="text-gray-400">Tailwind CSS, React, TypeScript</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">Backend:</p>
                <p className="text-gray-400">Node.js, Fastify, MongoDB, PostgreSQL</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">Design:</p>
                <p className="text-gray-400">Figma, Framer, Photoshop</p>
              </div>
            </div>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
          >
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-400 mb-6">
              I am a designer first, developer second. I can help design clean and modern interfaces.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">User-Centered Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Modern & Clean UI</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Responsive Layouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">Wireframes & Prototypes</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* View My Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 border border-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <span className="mr-2">🖼️</span>
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

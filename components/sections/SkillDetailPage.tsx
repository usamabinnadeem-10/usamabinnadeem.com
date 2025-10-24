'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  Code,
  Smartphone,
  Database,
  Plug,
  Network,
  GitBranch,
  Zap,
  Boxes,
} from 'lucide-react';
import { Capability, IconName } from '@/data/capabilities';

interface SkillDetailPageProps {
  capability: Capability;
}

// Icon mapping function
const getIcon = (iconName: IconName) => {
  const icons = {
    Code,
    Smartphone,
    Database,
    Plug,
    Network,
    GitBranch,
    Zap,
    Boxes,
  };
  return icons[iconName];
};

const SkillDetailPage: React.FC<SkillDetailPageProps> = ({ capability }) => {
  const Icon = getIcon(capability.icon);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#capabilities"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Capabilities
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-purple-500/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {capability.title}
              </h1>
              <p className="text-purple-400 text-base sm:text-lg">
                {capability.shortDescription}
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">{capability.hero.title}</h2>
            <p className="text-gray-400 text-lg mb-6">
              {capability.hero.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capability.hero.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {capability.approach.title}
          </h2>
          <p className="text-gray-400 text-lg text-center mb-12 max-w-3xl mx-auto">
            {capability.approach.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capability.approach.steps.map((step, index) => {
              const StepIcon = getIcon(step.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <StepIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-sm text-purple-400 mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Technologies & Tools
          </h2>
          <p className="text-gray-400 text-lg text-center mb-12">
            The stack I use to deliver exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capability.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
                    {tech.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Examples Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Real-World Impact
          </h2>
          <p className="text-gray-400 text-lg text-center mb-12">
            Examples of how I&apos;ve applied this skill to solve problems
          </p>

          <div className="space-y-6">
            {capability.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-purple-400">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      {example.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{example.description}</p>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <div className="text-sm text-purple-400 mb-1">
                        Outcome
                      </div>
                      <p className="text-white font-medium">{example.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-4">{capability.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {capability.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/#capabilities"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 border border-white/20 transition-colors"
              >
                View All Capabilities
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillDetailPage;

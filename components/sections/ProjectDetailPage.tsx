'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Target,
  Lightbulb,
  TrendingUp,
  Code2,
  AlertCircle,
} from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDetailPageProps {
  project: Project;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
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
            href="/#projects"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Title and Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-purple-400 text-base sm:text-lg">
                {project.shortDescription}
              </p>
            </div>
            <div className="flex gap-3 sm:flex-col">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 border border-white/20 transition-colors whitespace-nowrap"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-8xl mb-4">🖼️</div>
                <p className="text-lg">Project Preview</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Problem */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">The Problem</h3>
              <p className="text-gray-400 text-sm">{project.detail.problem}</p>
            </div>

            {/* Solution */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">The Solution</h3>
              <p className="text-gray-400 text-sm">{project.detail.solution}</p>
            </div>

            {/* Overview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Overview</h3>
              <p className="text-gray-400 text-sm">{project.detail.overview}</p>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            Impact & Results
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.detail.impact.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 text-center"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Key Features</h2>
          <p className="text-gray-400 text-lg text-center mb-12">
            Core functionality that makes this project stand out
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.detail.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-purple-400" />
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg text-center mb-12">
            Technologies and tools used to build this project
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.detail.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold mb-4 text-purple-400">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Challenges & Solutions
          </h2>
          <p className="text-gray-400 text-lg text-center mb-12">
            Technical obstacles overcome during development
          </p>
          <div className="space-y-6">
            {project.detail.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-purple-400">{index + 1}.</span>
                  {challenge.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-red-400 mb-2 font-semibold">
                      Challenge
                    </div>
                    <p className="text-gray-400">{challenge.description}</p>
                  </div>
                  <div>
                    <div className="text-sm text-green-400 mb-2 font-semibold">
                      Solution
                    </div>
                    <p className="text-gray-300">{challenge.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        {project.detail.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <div className="text-center max-w-3xl mx-auto">
                <div className="text-6xl mb-6">💬</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 text-gray-200 italic">
                  &quot;{project.detail.testimonial.quote}&quot;
                </blockquote>
                <div>
                  <div className="font-bold text-lg">
                    {project.detail.testimonial.author}
                  </div>
                  <div className="text-gray-400">
                    {project.detail.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;d love to help bring your project to life with the same
              dedication and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 border border-white/20 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

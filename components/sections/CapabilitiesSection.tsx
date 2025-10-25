'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Layers, Network, ArrowRight } from 'lucide-react';

/**
 * Capabilities section showing services - matches the screenshot design
 */
export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Building Digital Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
            className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            // transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
            // style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">What I can do</h3>
            <p className="text-muted-foreground mb-6">
              I can help develop solutions that will help you grow your business and reach new customers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/fullstack-web-development"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Fullstack Web Development
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/mobile-app-development"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Mobile App Development
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/database-design"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Database Design
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/api-integration"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  API Integration
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Tools I Use Card */}
          <motion.div
            className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            // transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
            // style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Tools I Use</h3>
            <p className="text-muted-foreground mb-6">
              I use the latest tools and technologies to build functional and scalable products.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-card-foreground mb-2">Frontend:</p>
                <p className="text-muted-foreground">Tailwind CSS, React, TypeScript</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground mb-2">Backend:</p>
                <p className="text-muted-foreground">Node.js, Fastify, MongoDB, PostgreSQL</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground mb-2">Design:</p>
                <p className="text-muted-foreground">Figma, Framer</p>
              </div>
            </div>
          </motion.div>

          {/* System Architecture Card */}
          <motion.div
            className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
          >
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6">
              <Network className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">System Architecture</h3>
            <p className="text-muted-foreground mb-6">
              I design scalable and maintainable architectures that grow with your business needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/microservices-architecture"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Microservices Architecture
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/system-design-scalability"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  System Design & Scalability
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/performance-optimization"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Performance Optimization
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li className="flex items-start group">
                <span className="text-accent mr-2">•</span>
                <Link
                  href="/skills/code-architecture-patterns"
                  className="text-card-foreground hover:text-accent transition-all flex items-center gap-1 underline decoration-accent/30 decoration-1 hover:decoration-accent hover:decoration-2 underline-offset-2"
                >
                  Code Architecture & Patterns
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
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
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 border border-border transition-colors"
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

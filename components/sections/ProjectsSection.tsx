'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';

/**
 * Projects section - showcasing portfolio work
 */
export const ProjectsSection: React.FC = () => {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            A selection of projects that showcase my skills and experience in web development and design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <motion.div
                className="group bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 dark:from-purple-600/20 to-blue-100 dark:to-blue-600/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🖼️</div>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>
                  {/* Uncomment when you have actual images
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-full border border-purple-300 dark:border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 mt-auto pt-2 text-sm text-purple-600 dark:text-purple-400 group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

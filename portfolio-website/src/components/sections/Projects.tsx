'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '@/utils/data';
import type { Project } from '@/types';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="card p-6 group hover:scale-105 transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="flex items-center gap-1 text-yellow-600 mb-4">
          <Star size={16} className="fill-current" />
          <span className="text-xs font-medium">Featured Project</span>
        </div>
      )}

      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300">
        <div className="text-4xl font-bold text-gray-400">
          {project.title.split(' ').map(word => word[0]).join('')}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                             Here are some of the data engineering projects I&apos;ve worked on, showcasing 
              my expertise in building scalable data solutions and analytics platforms.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Show More Button */}
          {projects.length > 3 && (
            <motion.div
              variants={headerVariants}
              className="text-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-secondary"
              >
                {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
              </button>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            variants={headerVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Interested in My Work?
              </h3>
              <p className="text-gray-600 mb-6">
                I&apos;m always excited to discuss new opportunities and collaborate on 
                challenging data engineering projects. Let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 justify-center"
                >
                  <Github size={20} />
                  View All on GitHub
                </a>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
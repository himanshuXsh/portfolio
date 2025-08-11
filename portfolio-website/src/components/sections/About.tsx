'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { portfolioData } from '@/utils/data';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-xl flex items-center justify-center">
                  <User size={120} className="text-gray-400" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Professional Summary
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {portfolioData.bio}
              </p>

              <p className="text-gray-600 leading-relaxed">
                I specialize in building end-to-end data solutions that transform raw data into 
                actionable insights. My expertise spans across the entire data lifecycle, from 
                ingestion and processing to visualization and machine learning deployment.
              </p>

              <p className="text-gray-600 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical blog posts and 
                community meetups.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} className="text-blue-600" />
                  <span>{portfolioData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} className="text-blue-600" />
                  <span>{portfolioData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={20} className="text-blue-600" />
                  <span>{portfolioData.email}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
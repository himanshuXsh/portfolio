'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { portfolioData } from '@/utils/data';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{portfolioData.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8"
          >
            {portfolioData.role}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioData.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary flex items-center gap-2"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-300 rounded-full opacity-40 animate-ping"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
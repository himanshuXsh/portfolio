'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { education } from '@/utils/data';
import type { Education } from '@/types';

const EducationCard = ({ edu, index }: { edu: Education; index: number }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`flex items-center gap-8 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      } mb-12`}
    >
      {/* Timeline Node */}
      <div className="flex-shrink-0 relative">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-300"></div>
      </div>

      {/* Education Card */}
      <div className="card p-6 flex-1 max-w-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
            <GraduationCap className="text-blue-600" size={24} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {edu.degree} in {edu.field}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin size={16} />
              <span className="font-medium">{edu.institution}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar size={16} />
              <span>{edu.startDate} - {edu.endDate}</span>
            </div>

            {edu.gpa && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  GPA: {edu.gpa}
                </span>
              </div>
            )}

            {edu.achievements && edu.achievements.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Award size={16} className="text-yellow-600" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement: string, achIndex: number) => (
                    <li key={achIndex} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
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

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              My academic journey that laid the foundation for my career in data engineering 
              and computer science.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300 hidden md:block"></div>
            
            {/* Education Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={headerVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Continuous Learning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beyond formal education, I&apos;m committed to staying current with the rapidly 
                evolving field of data engineering. I regularly complete online courses, 
                attend tech conferences, and participate in professional development programs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-gray-600">Online Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-sm text-gray-600">Tech Conferences</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
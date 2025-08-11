'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '@/utils/data';
import type { Skill, SkillCategory } from '@/types';

const SkillBar = ({ skill }: { skill: Skill }) => {
  const percentage = (skill.level / 5) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs text-gray-500">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
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
    <motion.div variants={itemVariants} className="card p-6">
      <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill: Skill, skillIndex: number) => (
          <SkillBar key={skillIndex} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              My expertise spans across the entire data engineering stack, from data ingestion 
              to visualization and machine learning deployment.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={headerVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Continuous Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m always exploring new technologies and methodologies in the rapidly evolving 
                data engineering landscape. Currently diving deeper into stream processing with 
                Apache Flink, exploring DataOps practices, and experimenting with MLOps 
                frameworks for production machine learning pipelines.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
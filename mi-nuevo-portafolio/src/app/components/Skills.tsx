"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      name: 'PHP', 
      level: 90, 
      icon: 'fab fa-php',
      color: 'bg-blue-500'
    },
    { 
      name: 'HTML5', 
      level: 95, 
      icon: 'fab fa-html5',
      color: 'bg-orange-500'
    },
    { 
      name: 'CSS3', 
      level: 85, 
      icon: 'fab fa-css3-alt',
      color: 'bg-blue-400'
    },
    { 
      name: 'JavaScript', 
      level: 80, 
      icon: 'fab fa-js',
      color: 'bg-yellow-400'
    },
    { 
      name: 'PostgreSQL', 
      level: 85, 
      icon: 'fas fa-database',
      color: 'bg-blue-600'
    },
    { 
      name: 'Git', 
      level: 75, 
      icon: 'fab fa-git-alt',
      color: 'bg-red-500'
    }
  ];
  
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 relative dark:text-white">
            Mis Habilidades
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center mr-4 text-white`}>
                    <i className={`${skill.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{skill.name}</h3>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div 
                    className={`h-2.5 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
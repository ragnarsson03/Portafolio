"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: "PHP",
      icon: "fab fa-php",
      color: "bg-blue-500",
      description: "Desarrollo de aplicaciones web dinámicas, APIs RESTful y sistemas de gestión de contenidos."
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "bg-orange-500",
      description: "Creación de estructuras web semánticas, accesibles y optimizadas para SEO."
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "bg-blue-400",
      description: "Diseño de interfaces responsivas, animaciones y layouts modernos."
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "bg-yellow-400",
      description: "Desarrollo de interacciones dinámicas, validaciones de formularios y consumo de APIs."
    },
    {
      name: "PostgreSQL",
      icon: "fas fa-database",
      color: "bg-blue-600",
      description: "Diseño e implementación de bases de datos relacionales, optimización de consultas y gestión de datos."
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
      color: "bg-red-500",
      description: "Control de versiones, colaboración en equipo y gestión de flujos de trabajo."
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
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className={`w-20 h-20 ${skill.color} rounded-full flex items-center justify-center mb-4 text-white`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20, 
                      delay: index * 0.1 + 0.2 
                    }}
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <i className={`${skill.icon} text-3xl`}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold dark:text-white">{skill.name}</h3>
                </div>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
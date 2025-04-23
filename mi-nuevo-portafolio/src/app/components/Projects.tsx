"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imgError, setImgError] = useState<{[key: number]: boolean}>({});
  
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Inventario",
      description: "Aplicación web desarrollada con PHP y PostgreSQL para gestionar inventarios de pequeñas empresas.",
      image: "/img/proyecto1.jpg",
      tags: ["PHP", "PostgreSQL", "JavaScript"],
      category: "web"
    },
    {
      id: 2,
      title: "Plataforma de Cursos Online",
      description: "Sitio web responsivo para la gestión y visualización de cursos online con sistema de usuarios.",
      image: "/img/proyecto2.jpg",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
      category: "web"
    },
    {
      id: 3,
      title: "API de Gestión de Clientes",
      description: "API RESTful desarrollada con PHP para la gestión de clientes, integrada con base de datos PostgreSQL.",
      image: "/img/proyecto3.jpg",
      tags: ["PHP", "PostgreSQL", "REST API"],
      category: "api"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleImageError = (id: number) => {
    setImgError(prev => ({...prev, [id]: true}));
  };
  
  return (
    <section id="proyectos" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 relative dark:text-white">
            Mis Proyectos
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>
        </motion.div>
        
        {/* Filtros de proyectos */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === 'web' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveFilter('api')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === 'api' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              API
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group dark:bg-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="h-56 overflow-hidden relative">
                {imgError[project.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-600">
                    <p className="text-gray-500 dark:text-gray-400">{project.title}</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(project.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 dark:bg-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
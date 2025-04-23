"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 relative dark:text-white">
            Sobre Mí
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Imagen o avatar */}
            <motion.div 
              className="md:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-700">
                <img 
                  src="/img/profile.jpg" 
                  alt="Frederick Durán" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300?text=Frederick+Durán';
                  }}
                />
              </div>
            </motion.div>
            
            {/* Texto de presentación */}
            <motion.div 
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
                Soy un desarrollador web apasionado por crear soluciones digitales eficientes y atractivas. 
                Me especializo en el desarrollo de aplicaciones web utilizando PHP, HTML, CSS, JavaScript y bases de datos PostgreSQL.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
                Mi objetivo es combinar funcionalidad y diseño para crear experiencias de usuario excepcionales, 
                siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.
              </p>
              
              {/* Botones de redes sociales o CV */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/FrederickDuran" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-colors flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>Descargar CV</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    // Número de WhatsApp con código de país
    const phoneNumber = "584149083826";
    const message = "Hola Frederick, me gustaría hablar contigo sobre un proyecto.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <section id="contacto" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 relative dark:text-white">
            Contacto
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Información de contacto */}
            <motion.div 
              className="space-y-8 mx-auto w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Email</h3>
                    <a href="mailto:frederickduran1000@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      frederickduran1000@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fab fa-whatsapp text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">WhatsApp</h3>
                    <button 
                      onClick={openWhatsApp}
                      className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                    >
                      Contáctame por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-300">Venezuela, Caracas</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-globe text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://github.com/FrederickDuran" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Sección de WhatsApp destacada */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center w-full">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fab fa-whatsapp text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">¿Tienes un proyecto en mente?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Contáctame directamente por WhatsApp para discutir tus ideas y cómo puedo ayudarte.</p>
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Contactar por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
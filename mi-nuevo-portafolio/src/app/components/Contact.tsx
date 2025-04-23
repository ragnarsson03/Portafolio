"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: data.message || 'Mensaje enviado correctamente'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Error al enviar el mensaje'
      });
    }
  };
  
  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    // Reemplaza este número con tu número de WhatsApp (incluye el código de país)
    const phoneNumber = "584141234567";
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
              className="space-y-8"
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
                    <p className="text-gray-600 dark:text-gray-300">Venezuela</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-globe text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Redes Sociales</h3>
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
            
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                {status.success && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-500 rounded-lg text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {status.message}
                  </div>
                )}
                
                {status.error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-500 rounded-lg text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    {status.message}
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white resize-none"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 disabled:opacity-70"
                >
                  {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
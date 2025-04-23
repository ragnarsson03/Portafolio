"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{
    top: string;
    left: string;
    width: string;
    height: string;
    animation: string;
  }>>([]);

  useEffect(() => {
    // Generar partículas solo en el cliente
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 100 + 20}px`,
      height: `${Math.random() * 100 + 20}px`,
      animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Overlay con patrón sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/img/pattern.svg")', backgroundSize: '50px' }}></div>
      </div>
      
      {/* Partículas o elementos decorativos */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.width,
              height: particle.height,
              animation: particle.animation
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¡Hola! Soy <span className="text-blue-400 inline-block relative">
              Frederick Durán
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300">Desarrollador Web especializado en</p>
            <div className="text-xl md:text-2xl font-semibold text-blue-400">
              <span className="inline-block">PHP</span>
              <span className="mx-2">•</span>
              <span className="inline-block">JavaScript</span>
              <span className="mx-2">•</span>
              <span className="inline-block">PostgreSQL</span>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contacto" 
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contáctame
            </a>
            <a 
              href="#proyectos" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Ver Proyectos
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Flecha de scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre-mi" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
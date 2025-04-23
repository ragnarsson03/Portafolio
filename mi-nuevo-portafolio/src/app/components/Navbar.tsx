"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-500">
            Frederick Durán
          </a>
          
          {/* Navegación de escritorio */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Sobre Mí</a>
            <a href="#habilidades" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#proyectos" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Proyectos</a>
            <a href="#testimonios" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Contacto</a>
          </nav>
          
          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-2">
              <a href="#" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Inicio</a>
              <a href="#sobre-mi" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Sobre Mí</a>
              <a href="#habilidades" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Habilidades</a>
              <a href="#proyectos" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Proyectos</a>
              <a href="#testimonios" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Testimonios</a>
              <a href="#contacto" className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Contacto</a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
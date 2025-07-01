"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

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
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className={`text-2xl font-bold ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frederick Durán
          </motion.a>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Inicio</a>
              <a href="#sobre-mi" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Sobre Mí</a>
              <a href="#habilidades" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Habilidades</a>
              <a href="#proyectos" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Proyectos</a>
              <a href="#testimonios" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Testimonios</a>
              <a href="#contacto" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-200'} hover:text-blue-500 transition-colors`}>Contacto</a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className={`ml-4 focus:outline-none ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Inicio</a>
              <a href="#sobre-mi" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Sobre Mí</a>
              <a href="#habilidades" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Habilidades</a>
              <a href="#proyectos" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Proyectos</a>
              <a href="#testimonios" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Testimonios</a>
              <a href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>Contacto</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
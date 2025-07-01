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
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Desarrollador Web</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Desarrollo y mantenimiento de aplicaciones web utilizando PHP, JavaScript, y HTML. 
                Experiencia con frameworks como Laravel y Next.js. Gestión y optimización de bases de datos, 
                incluyendo PostgreSQL y MySQL.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 dark:text-white">Experiencia Laboral</h4>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">DIST. Maravilla de Grandes Chiquitines CA. | Área de Ventas</p>
                  <p className="text-gray-500 dark:text-gray-400">2019-2021</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">Escuela de Fortalecimiento del Poder Popular (EFPP) | Analista y Soporte a Computadoras</p>
                  <p className="text-gray-500 dark:text-gray-400">2021-2023</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">Pasantías Primer Año [CANTV]</p>
                  <p className="text-gray-500 dark:text-gray-400">Proyecto 2024 APROBADO</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">Pasantías Segundo Año [Sindicatura Municipal de Caracas]</p>
                  <p className="text-gray-500 dark:text-gray-400">Proyecto 2025 APROBADO</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 dark:text-white">Educación</h4>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">Ingeniería en Informática</p>
                  <p className="text-gray-500 dark:text-gray-400">Segundo Año de Ing. Informática Cursando hacia TSU (2025)</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium dark:text-white">Bachiller</p>
                  <p className="text-gray-500 dark:text-gray-400">Liceo, Instituto Educacional &quot;ABC&quot; | 2016 - 2020, Caracas, Venezuela</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 dark:text-white">Certificaciones</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Curso de Computación | 2015</li>
                  <li>Curso de Introducción a Linux | 2020</li>
                  <li>Curso de HTML, CSS, JavaScript | 2021</li>
                  <li>Formación en Laravel | 2021</li>
                  <li>Mantenimiento Preventivos a los equipos de Informática en CANTV | 2024</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
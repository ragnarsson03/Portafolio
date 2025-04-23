"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Director de Tecnología, Empresa ABC",
      text: "Frederick desarrolló una solución excepcional para nuestra empresa. Su profesionalismo y conocimiento técnico superaron nuestras expectativas.",
      image: "/img/testimonial1.jpg"
    },
    {
      id: 2,
      name: "María González",
      position: "Gerente de Proyectos, Startup XYZ",
      text: "Trabajar con Frederick fue una experiencia muy positiva. Entendió perfectamente nuestras necesidades y entregó el proyecto antes del plazo establecido.",
      image: "/img/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Juan Pérez",
      position: "CEO, Empresa de E-commerce",
      text: "La plataforma desarrollada por Frederick ha sido clave para el crecimiento de nuestro negocio. Su atención al detalle y capacidad para resolver problemas es impresionante.",
      image: "/img/testimonial3.jpg"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState<{[key: number]: boolean}>({});
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handleImageError = (id: number) => {
    setImgError(prev => ({...prev, [id]: true}));
  };
  
  return (
    <section id="testimonios" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 relative dark:text-white">
            Testimonios
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: `${-currentIndex * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center dark:bg-gray-800">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                        {imgError[testimonial.id] ? (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                            <span className="text-gray-500 dark:text-gray-400 text-xl font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        ) : (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(testimonial.id)}
                          />
                        )}
                      </div>
                      <p className="text-gray-600 mb-6 italic dark:text-gray-300">"{testimonial.text}"</p>
                      <h4 className="text-lg font-semibold dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors z-10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors z-10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
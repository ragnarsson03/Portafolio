import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Frederick Durán. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/FrederickDuran" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
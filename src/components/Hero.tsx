import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
          {/**            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            /> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
            Olá, eu sou
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Desenvolvedor Fullstack
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor fullstack com foco em React no frontend e Java (Spring) e Python no backend, 
            criando soluções modernas para a web.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-slate-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            {/**<a
              href="mailto:seu@email.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-green-600" />
            </a> */}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projetos')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </button>
            {/**<button
              onClick={() => scrollToSection('contato')}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Entre em Contato
            </button> */}
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('sobre')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
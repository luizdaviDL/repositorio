import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Dev.Portfolio</h3>
              <p className="text-slate-300 leading-relaxed">
                Desenvolvedor otimista por criar experiências digitais 
                incríveis e soluções práticas.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {['Sobre', 'Projetos', 'Habilidades', 'Contato'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/luizdaviDL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="http://linkedin.com/in/luiz-davi-38732021b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                {/**<a
                  href="luizdaviamorim.com@gmail.com"
                  className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a> */}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-300 flex items-center justify-center space-x-2">
              <span>© {currentYear} Luiz Davi</span>
              <Heart size={16} className="text-red-500" />              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
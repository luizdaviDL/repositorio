import React from 'react';
import { Code, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código maintível e escalável seguindo as melhores práticas"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimizo aplicações para máxima velocidade e eficiência"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias técnicas claramente"
    },
    {
      icon: Coffee,
      title: "Dedicação",
      description: "Comprometido com a evolução profissional, sempre explorando novas ferramentas e conceitos. Entusiasta de tecnologia em constante aprendizado."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="../full.jpg"
                alt="Workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Desenvolvedor Full Stack
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Com 2 de experiência em desenvolvimento fullstack, atuo na criação de aplicações modernas 
                com React no frontend e APIs com Java (Spring Boot) e Python no backend. Busco sempre soluções eficientes,
                 práticas e centradas no usuário.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Gosto de transformar ideias complexas em soluções simples que realmente agreguem ao cotidiano 
                do usuário,sempre priorizando a experiência e a qualidade do código.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Java', 'Python', 'SQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
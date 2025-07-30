import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AjusteFAST",
      description: "Aplicação desktop para extração, tratamento e organização de dados de PDFs, com exportação para planilhas e interface gráfica desenvolvida com PyWebView, HTML, CSS e JavaScript.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Html", "Css", "JavaScript"],
      status: "done", // concluído
      show: false,
      showProject: false,
      github: "https://github.com/luizdaviDL/projectEstagy",
      live: "https://example.com"
    },
    {
      title: "FraseMe",
      description: "Aplicativo de gerenciamento de aprendizado de idiomas para autodidatas",
      image: "../fraseMe.png",
      status: "done-updating", // concluído / em atualização
      show: true,
      showProject: true,
      tech: ["React", "Python", "PostgreSQL"],
      live: "https://fraseme.netlify.app/main",
      github: "https://github.com/luizdaviDL/fraseMe", 
    },    
    {
      title: "Flex-Data",
      description: "Plataforma de gestão integrada para empresas avícolas, com controle completo de incubatórios, granjas e produtores integrados.",
      image: "../appMeta.png",
      status: "development", // em desenvolvimento
      showProject: false,
      show: true,
      tech: ["React", "Java", "PostgreSQL"],
      live: "https://fraseme.netlify.app/main",
      github: "https://github.com/luizdaviDL/front-Meta", 
    },    
  ];

  return (
    <section id="projetos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Meus Projetos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6" style={{background:"#fafafaff", height:"100%"}}>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status badge */}
                  <span
                    style={{
                      backgroundColor:
                        project.status === "done"
                          ? "#22c55e"
                          : project.status === "development"
                          ? "#facc15"
                          : "#3b82f6", // Azul para done-updating
                      color:
                        project.status === "development" ? "#000" : "#fff",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      display: "inline-block",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {project.status === "done"
                      ? "Projeto Concluído"
                      : project.status === "development"
                      ? "Em Desenvolvimento"
                      : "Concluído / Em Atualização"}
                  </span>

                  {/* Links */}
                  {project.show && (
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      >
                        <Github size={20} />
                        <span>Código</span>
                      </a>
                      {project.showProject && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                          <span>Ver Projeto</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

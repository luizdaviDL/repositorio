import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },        
        { name: "JavaScript" },
        { name: "HTML/CSS" },      
      ]
    },
    {
      title: "Backend",
      skills: [        
        { name: "Python" },        
        { name: "PostgreSQL" },        
        { name: "REST APIs" }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git" },            
        { name: "Figma" },      
      ]
    },
    {
      title: "Comportamental",
      skills: [
        { name: "Trabalho em equipe" },            
        { name: "Foco em aprender e otimizar processos" },      
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Habilidades
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div
                        className="flex justify-between items-center mb-2 px-4 py-2 shadow-sm"
                        style={{
                          backgroundColor: "#2F8989",
                          borderRadius: "1rem",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                        }}
                      >
                        <span className="font-semibold text-white select-none" style={{textAlign:"center"}}>
                          {skill.name}
                        </span>
                      </div>

                     {/** <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
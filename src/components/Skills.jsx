import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Development", data: skills.frontend, color: "text-blue-600" },
    { title: "Backend Development", data: skills.backend, color: "text-green-600" },
    { title: "Database", data: "database" in skills ? skills.database : ["MySQL"], color: "text-purple-600" },
    { title: "Tools & Version Control", data: skills.tools, color: "text-amber-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical <span className="text-cyan-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-600 rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors shadow-sm">
              <h3 className={`text-lg font-bold mb-4 ${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.data.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-700 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
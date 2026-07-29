import React from 'react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Education & <span className="text-cyan-600">Background</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-600 rounded mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-white border-l-4 border-cyan-500 rounded-r-xl p-6 md:p-10 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              {education.degree}
            </h3>
            <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-100 text-sm font-semibold rounded-full w-fit whitespace-nowrap">
              {education.status}
            </span>
          </div>
          
          <p className="text-gray-800 text-lg font-semibold mb-3">
            {education.institution}
          </p>
          
          <p className="text-gray-600 text-base max-w-3xl">
            Focusing on Full Stack Development, Database Architecture, and Software Engineering Principles.
          </p>
        </div>

      </div>
    </section>
  );
}
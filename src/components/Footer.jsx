import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-black tracking-wider text-slate-900">
              SARUJAN
            </a>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Full Stack Developer & IT Undergraduate
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-cyan-600 transition-all border border-slate-200 shadow-sm">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-cyan-600 transition-all border border-slate-200 shadow-sm">
               <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
<section id="about" className="min-h-screen flex items-center relative overflow-hidden bg-white pt-32 pb-12">
      
      {/* Light Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              IT Undergraduate Seeking Internship
            </div>

            {/* Name & Role */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SARUJAN
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-700">
                Full Stack Developer <span className="text-gray-400 font-light">&</span> IT Student
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-base text-gray-600">
              <MapPin size={20} className="text-cyan-600" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Professional Summary */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={20} />
              </a>

              <div className="flex items-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-slate-900 transition-all border border-gray-200 hover:border-gray-300 hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-slate-900 transition-all border border-gray-200 hover:border-gray-300 hover:-translate-y-1">
                   <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Decorative Code Block (Kept Dark for Contrast!) */}
          <div className="hidden lg:block relative w-full lg:ml-12 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full" />
            <div className="relative bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-slate-900/20">
              <div className="flex items-center px-4 py-3 bg-[#0B0F17] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-gray-500">developer.js</span>
              </div>
              <div className="p-6 pl-10 md:pl-12 font-mono text-sm text-gray-300 leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">sarujan</span> <span className="text-purple-400">=</span> {'{'}</p>
                <p className="ml-4"><span className="text-cyan-400">role</span>: <span className="text-green-400">'Full Stack Developer'</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">skills</span>: [<span className="text-green-400">'Laravel'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'MySQL'</span>],</p>
                <p className="ml-4"><span className="text-cyan-400">focus</span>: <span className="text-green-400">'Building scalable apps'</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">status</span>: <span className="text-green-400">'Seeking Internship'</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">hireable</span>: <span className="text-purple-400">true</span></p>
                <p>{'}'};</p>
                <br/>
                <p><span className="text-blue-400">console</span>.<span className="text-blue-200">log</span>(<span className="text-green-400">'Ready to write clean code!'</span>);</p>
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
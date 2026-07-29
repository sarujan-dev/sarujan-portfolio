import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In <span className="text-cyan-600">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I am currently looking for a 6-month internship opportunity. My inbox is always open, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col items-center text-center hover:border-cyan-400 hover:shadow-lg transition-all">
            <div className="p-4 bg-cyan-50 rounded-full text-cyan-600 mb-4">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">
              {personalInfo.email}
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col items-center text-center hover:border-cyan-400 hover:shadow-lg transition-all">
            <div className="p-4 bg-cyan-50 rounded-full text-cyan-600 mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">
              {personalInfo.phone}
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col items-center text-center hover:border-cyan-400 hover:shadow-lg transition-all">
            <div className="p-4 bg-cyan-50 rounded-full text-cyan-600 mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
            <p className="text-gray-600 font-medium">
              {personalInfo.location}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
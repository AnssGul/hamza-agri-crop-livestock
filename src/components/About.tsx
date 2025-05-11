import React from 'react';
import { Award, GraduationCap, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-serif mb-4">
            About Malik Ameer Hamza
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div
            className="bg-cover bg-center rounded-lg shadow-lg aspect-[4/5] relative overflow-hidden transform transition-transform hover:scale-[1.02]"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-lg font-semibold">Established Since 2010</p>
              <p className="text-sm opacity-80">Leading agricultural innovation in Pakistan</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-700 font-serif">
              A Visionary Agricultural Entrepreneur
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Welcome to Hamza Agri, Crop & Livestock, where tradition meets innovation. As the visionary behind this venture,
              I bring a modern, educated approach to traditional farming, combining academic knowledge with hands-on
              experience in agriculture and livestock management.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With a Bachelor's degree in English Literature, I've built one of the region's most respected agricultural
              businesses, focusing on sustainable practices and ethical farming methods.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <User className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-800">Experience</h4>
                </div>
                <p className="text-slate-600 text-sm">5+ years in agricultural excellence</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-800">Education</h4>
                </div>
                <p className="text-slate-600 text-sm">BS English Literature</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-800">Recognition</h4>
                </div>
                <p className="text-slate-600 text-sm">Regional agricultural leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
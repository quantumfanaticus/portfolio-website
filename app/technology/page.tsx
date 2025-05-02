'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CloudIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export default function Technology() {
  return (
    <main className="min-h-screen bg-gray-300 text-gray-900">
      <Navigation />
      <div className="h-16"></div> {/* Spacer div matching navigation height */}
      
      {/* Technology Content */}
      <section className="page-content pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-4xl font-bold mb-6 text-center text-purple-600">Technology</h1>
            
            <div className="px-4 sm:px-6 lg:px-8 mb-12 text-black">
              <p className="text-lg leading-relaxed">
                With expertise in full-stack development and cloud technologies, I create robust and scalable solutions. 
                My approach combines modern development practices with efficient problem-solving to deliver high-quality 
                software solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Tech Skills Section */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-8 text-gray-900">Tech Skills</h2>
                  
                  <div className="grid grid-cols-2 gap-8">
                    {/* Tech Stack */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <CodeBracketIcon className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Tech Stack</h3>
                      </div>
                      <ul className="space-y-2 text-black">
                        <li>Python</li>
                        <li>Django</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                        <li>HTML5 & CSS3</li>
                        <li>React.js & Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>

                    {/* Libraries */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpenIcon className="h-5 w-5 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">Libraries</h3>
                      </div>
                      <ul className="space-y-2 text-black">
                        <li>NumPy</li>
                        <li>Matplotlib</li>
                        <li>Pandas</li>
                        <li>SciPy</li>
                        <li>Seaborn</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        
                        
                      </ul>
                    </div>
                  </div>

                  {/* DevOps Skills */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <CloudIcon className="h-5 w-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">DevOps & Cloud</h3>
                    </div>
                    <ul className="space-y-2 text-black">
                      <li>AWS</li>
                      <li>Docker</li>
                      <li>CI/CD</li>
                      <li>Git & GitHub</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-8 text-gray-900">Projects</h2>
                  
                  {/* Project 1 */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <CommandLineIcon className="h-5 w-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Portfolio Website</h3>
                    </div>
                    <p className="text-black mb-2">
                      A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my work and skills.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <CommandLineIcon className="h-5 w-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">E-commerce Platform(Ongoing)</h3>
                    </div>
                    <p className="text-black mb-2">
                      A full-stack e-commerce platform for an ear-ring brand with user authentication, product management, and payment integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Django</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Stripe</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
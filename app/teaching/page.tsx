'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { 
  BriefcaseIcon, 
  BuildingOfficeIcon, 
  MapPinIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';

export default function Teaching() {
  return (
    <main className="h-screen bg-gray-300 text-gray-900">
      <Navigation />
      <div className="h-16"></div> {/* Spacer div matching navigation height */}
      
      {/* Teaching Content */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-purple-600">Teaching</h1>
            
            <div className="px-2 sm:px-4 lg:px-8 mb-6 sm:mb-8 text-black">
              <p className="text-base sm:text-lg leading-relaxed">
                I offer flexible tutoring options, including one-on-one sessions, group tutoring, and exam preparation for competitive tests. Whether you need help with homework, mastering difficult concepts, or building problem-solving skills, I tailor my approach to fit your learning style and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Professional Teaching Experience Section */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Professional Teaching Experience</h2>
                  
                  {/* Experience items */}
                  <div className="space-y-6">
                    {/* Experience 1 */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BriefcaseIcon className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Physics Instructor</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Catawba Valley Community College</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Hickory, NC, USA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">2021-2023</span>
                      </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BriefcaseIcon className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Adjunct Physics Instructor</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Springfield College</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Springfield, MA, USA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">2020-2021</span>
                      </div>
                    </div>

                    {/* Experience 3 */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BriefcaseIcon className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Laboratory Instructor</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Amherst College</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPinIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Amherst, MA, USA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm sm:text-base text-black">Spring 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Section */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Courses</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* University Level */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">University Level</h3>
                      <ul className="space-y-1 text-sm sm:text-base text-black">
                        <li>Conceptual Physics with Labs</li>
                        <li>Classical Mechanics with Labs</li>
                        <li>Electromagnetism with Labs</li>
                        <li>Wave Optics with Labs</li>
                        <li>Quantum Mechanics</li>
                      </ul>
                    </div>

                    {/* Competitive Exams */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Competitive Exams</h3>
                      <ul className="space-y-1 text-sm sm:text-base text-black">
                        <li>AP Physics I and II</li>
                        <li>AP Physics C: Mechanics and Electromagnetism</li>
                        <li>AP Precalculus</li>
                        <li>AP Calculus AB and BC</li>
                      </ul>
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
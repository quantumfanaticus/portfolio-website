'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import IntroAnimation from './components/IntroAnimation';
import TypingAnimation from './components/TypingAnimation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Navigation from './components/Navigation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
        if (!hasSeenAnimation) {
          setShowIntro(true);
          const timer = setTimeout(() => {
            sessionStorage.setItem('hasSeenAnimation', 'true');
          }, 3000);
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      console.error('Error accessing sessionStorage:', error);
    }
  }, []);

  useEffect(() => {
    // Try to preload the video
    const video = new Audio('/video.mp4');
    video.addEventListener('error', () => {
      console.error('Video failed to load');
      setVideoError(true);
    });
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-300 text-black">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <Navigation />
            
            {/* Hero and About Section Combined */}
            <section className="page-content min-h-screen pt-36 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
                  {/* Left Column - Content */}
                  <div className="space-y-6 sm:space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-left"
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        <TypingAnimation />
                      </h1>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-3 sm:space-y-4"
                      >
                        <p className="text-sm sm:text-base text-black">
                          Hi there! I'm a second-year graduate student at the University of Milano-Bicocca specializing in Quantum Technologies. I'm passionate about both quantum research and teaching physics & mathematics.
                        </p>
                        <p className="text-sm sm:text-base text-black">
                          My work spans simulating quantum systems, exploring spin dynamics, and applying computational methods in quantum computing. Alongside research, I have years of experience teaching physics at the college and university levels, where I enjoy breaking down complex concepts and inspiring students.
                        </p>
                        <p className="text-sm sm:text-base text-black">
                          I also develop small to medium-scale web applications, combining back-end logic and front-end design to create functional, user-friendly tools — often blending my tech skills with educational projects.
                        </p>
                        <p className="text-sm sm:text-base text-black mb-4">
                          You can view my resume <a href="/Karthik_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-blue-800 underline">here</a>.
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Right Column - Video */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full flex items-center justify-end pr-4"
                  >
                    <video
                      src="/videos/video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-[300px] sm:h-[400px] w-full sm:w-[600px] object-contain"
                      style={{
                        height: 'var(--image-height, 600px)',
                        width: 'var(--image-width, 800px)'
                      }}
                    >
                      <source src="/videos/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Social Media Icons */}
            <div className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 flex space-x-4 sm:space-x-6">
              <Link 
                href="https://github.com/quantumfanaticus" 
                className="text-purple-600 hover:text-purple-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/karthikmiryala/" 
                className="text-purple-600 hover:text-purple-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link 
                href="https://www.instagram.com/quantumfanaticus/" 
                className="text-purple-600 hover:text-purple-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
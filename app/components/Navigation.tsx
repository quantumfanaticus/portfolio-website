import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-sm z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold text-purple-600">
              Karthik Miryala
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-gray-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
            <Link 
              href="/" 
              className="text-sm sm:text-base text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-b-gray-600"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm sm:text-base text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-b-gray-600"
              >
                Services
              </button>
             
              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-32 sm:w-28 bg-white rounded-md shadow-lg py-1"
                    style={{ marginLeft: '-0.75rem' }}
                  >
                    <Link
                      href="/teaching"
                      className="block px-3 py-1.5 text-sm sm:text-base text-gray-900 hover:bg-purple-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Teaching
                    </Link>
                    <Link
                      href="/technology"
                      className="block px-3 py-1.5 text-sm sm:text-base text-gray-900 hover:bg-purple-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Tech
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className="text-sm sm:text-base text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-b-gray-600"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/teaching"
                  className="block px-3 py-2 text-base text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Teaching
                </Link>
                <Link
                  href="/technology"
                  className="block px-3 py-2 text-base text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tech
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base text-gray-900 hover:bg-purple-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 
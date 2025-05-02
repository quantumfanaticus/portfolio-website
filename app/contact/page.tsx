'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Navigation from '../components/Navigation';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    field: '',
    message: '',
  });
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate form
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.field) {
      newErrors.field = 'Please select a field of interest';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    if (!recaptchaValue) {
      setErrorMessage('Please complete the reCAPTCHA verification');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Verify reCAPTCHA token
      const verifyResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: recaptchaValue }),
      });

      if (!verifyResponse.ok) {
        throw new Error('reCAPTCHA verification failed');
      }

      // Send email
      const templateParams = {
        from_name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        from_email: formData.email.trim(),
        subject: `[${formData.field}] Contact Form Submission`,
        field: formData.field,
        message: formData.message.trim(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        field: '',
        message: '',
      });
      setErrors({});
      setRecaptchaValue(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  // Disable submit button if form is invalid
  const isFormValid = 
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.field !== '' &&
    formData.message.trim() !== '' &&
    recaptchaValue !== null;

  return (
    <main className="min-h-screen bg-gray-300 text-black">
      <Navigation />

      {/* Contact Content */}
      <section className="page-content pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-2">Get in Touch</h2>
                  <p className="text-sm sm:text-base text-black">
                    Have questions about my tutoring or tech services? Interested in scheduling a meeting?
                    Fill out the form or reach out directly.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-purple-600" />
                    <p className="text-sm sm:text-base text-black">quantumfanaticus@gmail.com</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-purple-600" />
                    <p className="text-sm sm:text-base text-black">Milan, Italy</p>
                  </div>

                  <div className="pt-2">
                    <div className="flex space-x-4 sm:space-x-6">
                      <Link 
                        href="https://github.com/quantumfanaticus" 
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Link>
                      <Link 
                        href="https://www.linkedin.com/in/karthikmiryala/" 
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Link>
                      <Link 
                        href="https://www.instagram.com/quantumfanaticus/" 
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4 sm:space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2 bg-white border ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm sm:text-base text-gray-900`}
                      />
                      {errors.firstName && (
                        <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2 bg-white border ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm sm:text-base text-gray-900`}
                      />
                      {errors.lastName && (
                        <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      className={`w-full px-3 sm:px-4 py-2 bg-white border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm sm:text-base text-gray-900`}
                    />
                    {errors.email && (
                      <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="field" className="block text-sm font-medium text-black mb-1">
                      Field of Interest *
                    </label>
                    <select
                      id="field"
                      name="field"
                      value={formData.field}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 bg-white border ${
                        errors.field ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm sm:text-base text-gray-900`}
                    >
                      <option value="" className="text-gray-400">Select the field of interest</option>
                      <option value="Teaching">Teaching</option>
                      <option value="Tech">Tech</option>
                    </select>
                    {errors.field && (
                      <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.field}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`w-full px-3 sm:px-4 py-2 bg-white border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm sm:text-base text-gray-900`}
                    />
                    {errors.message && (
                      <div className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(value) => setRecaptchaValue(value)}
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs sm:text-sm text-red-500">{errorMessage}</div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors hover:bg-purple-700 text-sm sm:text-base"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="text-xs sm:text-sm text-green-500 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
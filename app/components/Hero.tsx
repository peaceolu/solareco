'use client';

import { motion } from 'framer-motion';
import { FiSun, FiZap } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-softGray to-white pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-blue leading-tight">
              Power Your Home With{' '}
              <span className="text-yellow">Clean Solar Energy</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Save up to 70% on electricity bills with our premium solar solutions. Join the green revolution today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow text-dark-blue px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                Get Free Quote
              </button>
              <button className="border-2 border-darkBlue text-dark-blue px-8 py-3 rounded-full font-semibold hover:bg-dark-blue hover:text-white transition-all duration-200">
                Explore Services
              </button>
            </div>
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <FiZap className="text-yellow text-xl" />
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <FiSun className="text-yellow text-xl" />
                <span className="text-sm font-medium">500+ Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green rounded-full"></div>
                <span className="text-sm font-medium">Eco-Friendly Energy</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Animated Solar Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/30 to-green/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative flex items-center justify-center">
                <FiSun className="text-yellow text-8xl lg:text-9xl animate-float" />
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow/30 rounded-full blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green/30 rounded-full blur-md"></div>
              </div>
              {/* Floating solar panels */}
              <div className="absolute top-10 left-0 w-16 h-16 bg-dark-blue/10 rounded-xl rotate-12 animate-float delay-100"></div>
              <div className="absolute bottom-10 right-0 w-20 h-20 bg-yellow/10 rounded-xl -rotate-12 animate-float delay-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaUsers, FaCalendarAlt, FaSmile, FaSolarPanel } from 'react-icons/fa';

const stats = [
  { icon: FaCalendarAlt, value: '10+', label: 'Years Experience' },
  { icon: FaUsers, value: '2,000+', label: 'Happy Clients' },
  { icon: FaSmile, value: '98%', label: 'Satisfaction' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-soft-gray">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-4 aspect-h-3">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-darkBlue to-green rounded-2xl flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <FaSolarPanel className="text-6xl mx-auto mb-4" />
                  <p className="text-lg font-semibold">Solar Installation Team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
              About <span className="text-yellow">SolarEco</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Since 2014, SolarEco has been a pioneer in delivering high-quality solar energy solutions. Our mission is to make clean, renewable energy accessible to every home and business.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe in a sustainable future powered by the sun. Our team of certified experts ensures seamless installation, maximum efficiency, and long-term savings.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="text-3xl text-yellow mx-auto" />
                  <div className="text-2xl font-bold text-dark-blue mt-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
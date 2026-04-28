'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHome, FaBuilding, FaBatteryFull, FaTools, FaChartLine, FaMicrochip } from 'react-icons/fa';

const services = [
  {
    icon: FaHome,
    title: 'Residential Solar',
    description: 'Custom solar panel systems for homes, reducing bills by up to 70%.',
  },
  {
    icon: FaBuilding,
    title: 'Commercial Solar',
    description: 'Scalable solutions for businesses to cut operational costs.',
  },
  {
    icon: FaBatteryFull,
    title: 'Solar Battery Backup',
    description: 'Store excess energy for night use or power outages.',
  },
  {
    icon: FaTools,
    title: 'Solar Maintenance',
    description: 'Regular cleaning and performance checks for longevity.',
  },
  {
    icon: FaChartLine,
    title: 'Energy Consultation',
    description: 'Free analysis of your energy needs and savings potential.',
  },
  {
    icon: FaMicrochip,
    title: 'Solar Monitoring',
    description: 'Real-time monitoring of your system via mobile app.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive solar solutions tailored to your needs.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="w-14 h-14 bg-yellow/20 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-3xl text-yellow" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue">{service.title}</h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
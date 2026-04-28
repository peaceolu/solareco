'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDollarSign, FaSun, FaLeaf, FaPlug, FaHandHoldingUsd, FaHome } from 'react-icons/fa';

const benefits = [
  { icon: FaDollarSign, title: 'Lower Bills', desc: 'Save up to 70% on electricity costs immediately.' },
  { icon: FaSun, title: 'Renewable Energy', desc: 'Harness infinite, clean energy from the sun.' },
  { icon: FaLeaf, title: 'Eco-Friendly', desc: 'Reduce carbon footprint and combat climate change.' },
  { icon: FaPlug, title: 'Reliable Power', desc: 'Consistent energy even during grid outages.' },
  { icon: FaHandHoldingUsd, title: 'Government Savings', desc: 'Take advantage of tax credits and rebates.' },
  { icon: FaHome, title: 'Increased Value', desc: 'Boost your property value by up to 4%.' },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Why Go <span className="text-yellow">Solar?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Discover the life-changing benefits of solar energy.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <benefit.icon className="text-4xl text-yellow mb-4" />
              <h3 className="text-xl font-semibold text-dark-blue">{benefit.title}</h3>
              <p className="mt-2 text-gray-500">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
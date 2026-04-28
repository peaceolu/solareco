'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClipboardList, FaSearch, FaPaintBrush, FaWrench, FaHands } from 'react-icons/fa';

const steps = [
  { icon: FaClipboardList, title: 'Consultation', desc: 'We assess your energy needs and property.' },
  { icon: FaSearch, title: 'Inspection', desc: 'On-site evaluation of roof and sun exposure.' },
  { icon: FaPaintBrush, title: 'Solar Design', desc: 'Custom system design tailored to you.' },
  { icon: FaWrench, title: 'Installation', desc: 'Professional and swift installation.' },
  { icon: FaHands, title: 'Maintenance', desc: 'Ongoing support and performance checks.' },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Our Installation <span className="text-yellow">Process</span>
          </h2>
          <p className="mt-4 text-gray-600">Simple, transparent, and hassle-free.</p>
        </div>
        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow/30 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center">
                      <step.icon className="text-yellow text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-blue">{step.title}</h3>
                      <p className="text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow rounded-full border-4 border-white shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
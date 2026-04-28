'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { q: 'How much do solar panels cost?', a: 'Costs vary based on system size and location. On average, residential systems range from $10,000 to $25,000 before incentives.' },
  { q: 'Do solar panels work during cloudy days?', a: 'Yes, they still generate electricity, though at reduced efficiency. Battery storage can help store excess power.' },
  { q: 'What maintenance is required?', a: 'Minimal – occasional cleaning and annual inspection. Our systems come with a 25-year warranty.' },
  { q: 'How long does installation take?', a: 'Typically 1-3 days for residential, depending on complexity.' },
  { q: 'Are there tax credits available?', a: 'Yes, the federal solar tax credit offers up to 30% of system cost. State incentives may apply.' },
  { q: 'Will solar increase my home value?', a: 'Studies show solar homes sell for 4% more on average.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Frequently Asked <span className="text-yellow">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-dark-blue bg-soft-gray hover:bg-yellow/10 transition"
              >
                {faq.q}
                <FaChevronDown className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
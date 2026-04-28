'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const testimonials = [
  {
    name: 'John D.',
    role: 'Homeowner',
    text: 'SolarEco made the switch to solar seamless. My electric bill dropped by 65%! The team was professional and efficient.',
    rating: 5,
    image: null,
  },
  {
    name: 'Sarah M.',
    role: 'Business Owner',
    text: 'We installed a commercial system and saw ROI in under 3 years. Highly recommend their expertise.',
    rating: 5,
    image: null,
  },
  {
    name: 'Michael R.',
    role: 'Eco Advocate',
    text: 'Great customer service and top-quality panels. The monitoring app is a game-changer.',
    rating: 5,
    image: null,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            What Our <span className="text-yellow">Customers Say</span>
          </h2>
          <p className="mt-4 text-gray-600">Real stories from real people.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-soft-gray rounded-2xl p-8 shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-dark-blue/10 flex items-center justify-center">
                  <FiUser className="text-3xl text-dark-blue" />
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonials[current].text}"</p>
              <h4 className="mt-6 font-bold text-dark-blue">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-yellow transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-yellow transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
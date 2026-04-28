'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMapPin, FiEye } from 'react-icons/fi';

const projects = [
  {
    title: 'Sunnyvale Residence',
    category: 'Residential',
    location: 'California',
    image: '/project1.jpg', // Replace with actual image
  },
  {
    title: 'Greenfield Mall',
    category: 'Commercial',
    location: 'Texas',
    image: '/project2.jpg',
  },
  {
    title: 'EcoTech Campus',
    category: 'Industrial',
    location: 'New York',
    image: '/project3.jpg',
  },
  {
    title: 'Lakeside Villa',
    category: 'Residential',
    location: 'Florida',
    image: '/project4.jpg',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-soft-gray">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Our <span className="text-yellow">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600">
            See how we've transformed homes and businesses with solar.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-darkBlue/80 to-green/80 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <FiEye className="text-5xl mx-auto mb-2" />
                  <p className="font-semibold">Project Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <FiMapPin />
                    <span>{project.location}</span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-yellow text-dark-blue rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
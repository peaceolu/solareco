'use client';

import { motion } from 'framer-motion';
import { SiTesla, SiSiemens, SiGeneralelectric } from 'react-icons/si';
import { FaSolarPanel, FaIndustry, FaLeaf } from 'react-icons/fa';

const partners = [
  { name: 'Tesla', icon: SiTesla },
  { name: 'Siemens', icon: SiSiemens },
  { name: 'SolarEdge', icon: FaSolarPanel },
  { name: 'GE', icon: SiGeneralelectric },
  { name: 'EcoFlow', icon: FaLeaf },
  { name: 'SunPower', icon: FaIndustry },
];

export default function TrustedPartners() {
  // Duplicate array for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-dark-blue mb-8">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {allPartners.map((partner, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <partner.icon className="text-4xl text-gray-400 hover:text-yellow transition-colors" />
                <span className="sr-only">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
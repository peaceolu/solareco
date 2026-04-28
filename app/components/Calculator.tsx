'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaSolarPanel } from 'react-icons/fa';

export default function Calculator() {
  const [bill, setBill] = useState(150);
  const [houseSize, setHouseSize] = useState(2000);
  const [location, setLocation] = useState('');

  const monthlySavingsValue = bill * 0.7;
  const yearlySavingsValue = monthlySavingsValue * 12;
  const panelSize = (houseSize / 100).toFixed(1);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Solar Savings <span className="text-yellow">Calculator</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Estimate how much you can save by switching to solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-dark-blue font-medium mb-2">
                Monthly Electricity Bill ($)
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow"
              />
              <div className="text-right text-yellow font-bold mt-1">${bill}</div>
            </div>
            <div>
              <label className="block text-dark-blue font-medium mb-2">
                House Size (sq ft)
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={houseSize}
                onChange={(e) => setHouseSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow"
              />
              <div className="text-right text-yellow font-bold mt-1">{houseSize} sq ft</div>
            </div>
            <div>
              <label className="block text-dark-blue font-medium mb-2">
                Your Location
              </label>
              <input
                type="text"
                placeholder="City, State"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-darkBlue to-green rounded-2xl p-6 text-white shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCalculator className="text-yellow text-2xl" />
              <h3 className="text-2xl font-bold">Your Savings Estimate</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Monthly Savings:</span>
                <span className="font-bold text-yellow">${monthlySavingsValue.toFixed(0)}</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-2">
                <span>Yearly Savings:</span>
                <span className="font-bold text-yellow">${yearlySavingsValue.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Recommended Panel Size:</span>
                <span className="font-bold">{panelSize} kW</span>
              </div>
            </div>
            <div className="mt-6 p-3 bg-white/10 rounded-lg flex items-center gap-2">
              <FaSolarPanel className="text-yellow" />
              <span className="text-sm">
                Based on average sunlight in your area. Actual savings may vary.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
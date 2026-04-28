'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-soft-gray">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Get In <span className="text-yellow">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Ready to go solar? Contact us for a free consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="px-4 py-2 border rounded-lg focus:ring-yellow" />
                <input type="text" placeholder="Last Name" className="px-4 py-2 border rounded-lg" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-lg mb-4" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg mb-4" />
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg mb-4"></textarea>
              <button className="bg-yellow text-dark-blue px-6 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-dark-blue mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-yellow" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow" />
                  <span>hello@solareco.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-yellow" />
                  <span>123 Solar Way, San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-dark-blue/10 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                <p>Google Maps Placeholder</p>
                <p className="text-sm">123 Solar Way, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white pt-12 pb-6">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Desc */}
          <div>
            <div className="text-2xl font-bold">
              Solar<span className="text-yellow">Eco</span>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              Powering a sustainable future, one roof at a time.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow">Home</a></li>
              <li><a href="#about" className="hover:text-yellow">About</a></li>
              <li><a href="#services" className="hover:text-yellow">Services</a></li>
              <li><a href="#projects" className="hover:text-yellow">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow">Contact</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Solar Way, CA</li>
              <li>(555) 123-4567</li>
              <li>hello@solareco.com</li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-l-lg text-dark-blue" />
              <button className="bg-yellow text-dark-blue px-4 rounded-r-lg">
                <FiSend />
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-yellow"><FaFacebookF /></a>
              <a href="#" className="text-gray-300 hover:text-yellow"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-yellow"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-yellow"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SolarEco. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
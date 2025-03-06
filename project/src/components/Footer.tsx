import {Linkedin, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="ApexMinds AI Logo" className="h-16 w-16 object-contain -my-2" />
              <span className="text-xl font-bold">ApexMinds AI</span>
            </div>
            <p className="text-gray-400">
              Transforming Data into Intelligent Solutions
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-yellow-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#contactUs" className="text-gray-400 hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:ai.apexminds@gmail.com" className="hover:text-yellow-400">
                  ai.apexminds@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+923065258252" className="hover:text-yellow-400">
                  +92 306 5258252
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-yellow-400">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ApexMinds AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
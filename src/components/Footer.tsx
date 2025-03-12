
import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-health-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-health-600" />
              <span className="text-xl font-bold text-health-700">HealthGuide</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your personal health assistant. Get guidance on disease symptoms, treatment options, 
              and access to professional medical help.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-health-600 transition-colors">
                  Symptom Checker
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-health-600 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/diet-plan" className="text-gray-600 hover:text-health-600 transition-colors">
                  Diet Plans
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-600 hover:text-health-600 transition-colors">
                  Give Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help-center" className="text-gray-600 hover:text-health-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-health-500" />
                <span className="text-gray-600">support@healthguide.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-health-500" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} HealthGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

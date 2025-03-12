
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, HeartPulse, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Check Disease", path: "/" },
    { name: "Contact Doctors", path: "/doctors" },
    { name: "Diet Plan", path: "/diet-plan" },
    { name: "Help Center", path: "/help-center" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-health-600 font-bold text-xl"
            >
              <HeartPulse className="h-6 w-6 text-health-600" />
              <span className="hidden sm:inline-block">HealthGuide</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative
                ${
                  isActive(item.path)
                    ? "text-health-600 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-health-500"
                    : "text-gray-700 hover:text-health-600 hover:bg-gray-100/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" className="border-health-400 text-health-600">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-health-600 hover:bg-health-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-health-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "bg-health-50 text-health-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-health-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-around px-4">
              <Link 
                to="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-center w-full px-4 py-2 text-base font-medium text-health-600 hover:bg-gray-100 hover:text-health-800 rounded-md"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-center w-full px-4 py-2 text-base font-medium text-white bg-health-600 hover:bg-health-700 rounded-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

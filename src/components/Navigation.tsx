import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Harrison Schreiman
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('professional')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Professional
            </button>
            <button
              onClick={() => scrollToSection('volunteering')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Volunteering
            </button>
            <button
              onClick={() => scrollToSection('travel')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Travel
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('professional')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
            >
              Professional
            </button>
            <button
              onClick={() => scrollToSection('volunteering')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
            >
              Volunteering
            </button>
            <button
              onClick={() => scrollToSection('travel')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
            >
              Travel
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

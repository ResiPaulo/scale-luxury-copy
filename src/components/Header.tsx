
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/1c5f1ea7-c4f1-4c38-a5bd-710d4df29364.png" 
              alt="VGV SCALE" 
              className="h-10 w-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-royal-blue-600 transition-colors font-medium">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-royal-blue-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#solucoes" className="text-gray-700 hover:text-royal-blue-600 transition-colors font-medium">
              Soluções
            </a>
            <a href="#diferenciais" className="text-gray-700 hover:text-royal-blue-600 transition-colors font-medium">
              Diferenciais
            </a>
            <a href="#contato" className="text-gray-700 hover:text-royal-blue-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-gradient-royal hover:bg-gradient-royal-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicite sua Apresentação
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-royal-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-royal-blue-600 font-medium">
                Início
              </a>
              <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-royal-blue-600 font-medium">
                Sobre
              </a>
              <a href="#solucoes" className="block px-3 py-2 text-gray-700 hover:text-royal-blue-600 font-medium">
                Soluções
              </a>
              <a href="#diferenciais" className="block px-3 py-2 text-gray-700 hover:text-royal-blue-600 font-medium">
                Diferenciais
              </a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-royal-blue-600 font-medium">
                Contato
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-royal hover:bg-gradient-royal-dark text-white px-6 py-2 rounded-lg font-semibold"
                  onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Solicite sua Apresentação
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

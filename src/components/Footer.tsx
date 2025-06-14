import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/e13154e8-a28b-48ae-84eb-21e74d4a84e4.png" 
                alt="VGV SCALE" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Agência de marketing imobiliário focada em resultados. Estratégia, tecnologia e execução unidas para transformar vendas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5544991525829"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-green-400 p-3 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5 text-green-600" />
              </a>
              <a 
                href="https://www.instagram.com/vgvscale/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-pink-600 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-royal-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <a 
                  href="https://wa.me/5544991525829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (44) 99152-5829
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Instagram className="w-4 h-4 mr-2" />
                <a 
                  href="https://www.instagram.com/vgvscale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @vgvscale
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-300 mb-2">Horário de Atendimento</h5>
              <p className="text-gray-400 text-sm">
                Segunda a Sexta<br />
                8h às 18h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 VGV SCALE Marketing. Todos os direitos reservados.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-royal-blue-600 hover:bg-royal-blue-700 p-2 rounded-full transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

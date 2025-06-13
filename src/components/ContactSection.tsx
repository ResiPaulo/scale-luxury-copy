
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstagramEmbed from './InstagramEmbed';

const ContactSection = () => {
  return (
    <section id="contato" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Vamos <span className="bg-gradient-royal bg-clip-text text-transparent">Conversar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Pronto para transformar seu VGV? Entre em contato e descubra como podemos 
            elevar suas vendas com estratégias premium e resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</div>
                    <a 
                      href="https://wa.me/5544991525829"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-royal-blue-600 hover:text-royal-blue-700 transition-colors text-sm sm:text-base"
                    >
                      (44) 99152-5829
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Instagram</div>
                    <a 
                      href="https://www.instagram.com/euarielton/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-royal-blue-600 hover:text-royal-blue-700 transition-colors text-sm sm:text-base"
                    >
                      @euarielton
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Horário de Atendimento</div>
                    <div className="text-gray-600 text-sm sm:text-base">Segunda a Sexta: 8h às 18h</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Pronto para começar?</h4>
                <Button 
                  className="w-full bg-white hover:bg-blue-50 text-royal-blue-600 border border-royal-blue-600 font-semibold py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Solicitar Apresentação Estratégica</span>
                  <span className="sm:hidden">Apresentação Estratégica</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
              Acompanhe nosso <span className="bg-gradient-royal bg-clip-text text-transparent">Instagram</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8 px-4">
              Veja as últimas novidades, cases de sucesso e dicas exclusivas sobre marketing imobiliário.
            </p>
            
            <div className="px-4 w-full flex justify-center">
              <InstagramEmbed 
                url="https://www.instagram.com/euarielton/"
                className="w-full max-w-md"
              />
            </div>

            <div className="mt-4 sm:mt-6 px-4">
              <Button 
                variant="outline"
                className="border-2 border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-600 hover:text-white font-semibold py-2 px-4 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base"
                onClick={() => window.open('https://www.instagram.com/euarielton/', '_blank')}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

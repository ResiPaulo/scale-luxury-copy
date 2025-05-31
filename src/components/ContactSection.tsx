
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InstagramEmbed from './InstagramEmbed';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos <span className="bg-gradient-royal bg-clip-text text-transparent">Conversar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seu VGV? Entre em contato e descubra como podemos 
            elevar suas vendas com estratégias premium e resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <a 
                      href="https://wa.me/5544991525829"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-royal-blue-600 hover:text-royal-blue-700 transition-colors"
                    >
                      (44) 99152-5829
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <a 
                      href="https://www.instagram.com/euarielton/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-royal-blue-600 hover:text-royal-blue-700 transition-colors"
                    >
                      @euarielton
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horário de Atendimento</div>
                    <div className="text-gray-600">Segunda a Sexta: 8h às 18h</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Pronto para começar?</h4>
                <Button 
                  className="w-full bg-gradient-royal hover:bg-gradient-royal-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Apresentação Estratégica
                </Button>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Acompanhe nosso <span className="bg-gradient-royal bg-clip-text text-transparent">Instagram</span>
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Veja as últimas novidades, cases de sucesso e dicas exclusivas sobre marketing imobiliário.
            </p>
            
            <InstagramEmbed 
              url="https://www.instagram.com/euarielton/"
              className="w-full max-w-md"
            />

            <div className="mt-6">
              <Button 
                variant="outline"
                className="border-2 border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-600 hover:text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300"
                onClick={() => window.open('https://www.instagram.com/euarielton/', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
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

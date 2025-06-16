
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-royal overflow-hidden pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Main Hero Block - Strategic Text */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Corretores, imobiliárias e construtoras: vocês não precisam de mais seguidores. 
                <span className="block mt-2">Precisam de estratégia pra vender.</span>
              </h1>
              
              <div className="space-y-4 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                <p>
                  Seu conteúdo pode até estar bonito, mas se não estiver conectado com um funil de vendas, ele só serve pra enfeitar o feed.
                </p>
                <p className="text-base sm:text-lg text-blue-200">
                  Na VGV Scale, a gente entra pra escalar seus resultados com posicionamento, tráfego e automação.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl" 
                  onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
                >
                  👉 Quero vender com estratégia
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-blue-200 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            A VGV Scale é a agência que entrega resultado real para corretores, imobiliárias e construtoras.
            Com tráfego pago, funis inteligentes, atendimento no WhatsApp e conteúdo que cria desejo — a gente vende com você.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">R$ 500M+</div>
              <div className="text-base sm:text-lg text-blue-200">Em VGV Gerado</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-base sm:text-lg text-blue-200">Anos de Mercado</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-base sm:text-lg text-blue-200">Taxa de Satisfação</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-royal-blue-600 hover:bg-blue-50 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg" 
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              <span className="hidden sm:inline">Solicite Sua Apresentação Estratégica</span>
              <span className="sm:hidden">Apresentação Estratégica</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-royal-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300" 
              onClick={() => {
                const solucoesSection = document.getElementById('solucoes');
                if (solucoesSection) {
                  solucoesSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <span className="hidden sm:inline">Conheça Nossas Soluções</span>
              <span className="sm:hidden">Nossas Soluções</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

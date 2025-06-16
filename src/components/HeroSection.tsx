import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-royal overflow-hidden pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Small subtitle */}
          

          {/* Main Hero Block - Strategic Text */}
          <div className="glass-effect rounded-2xl p-8 sm:p-12 mb-8 sm:mb-12 max-w-5xl mx-auto">
            <div className="space-y-6 text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Corretores, imobiliárias e construtoras: vocês não precisam de mais seguidores. Precisam de estratégia pra vender.
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                Seu conteúdo pode até estar bonito, mas se não estiver conectado com um funil de vendas, ele só serve pra enfeitar o feed.
              </p>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                Na VGV Scale, a gente entra pra escalar seus resultados com posicionamento, tráfego e automação.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://wa.me/5544991525829', '_blank')}>
                  👉 Quero vender com estratégia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
            Com tráfego pago, funis inteligentes, atendimento no WhatsApp e conteúdo que cria desejo — a gente vende com você.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">R$ 500M+</div>
              <div className="text-sm sm:text-base text-blue-200">Em VGV Gerado</div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">12+</div>
              <div className="text-sm sm:text-base text-blue-200">Anos de Mercado</div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-blue-200">Taxa de Satisfação</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button size="lg" className="w-full sm:w-auto bg-white text-royal-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://wa.me/5544991525829', '_blank')}>
              <span className="hidden sm:inline">Solicite Sua Apresentação Estratégica</span>
              <span className="sm:hidden">Apresentação Estratégica</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-royal-blue-600 bg-white hover:bg-blue-50 hover:text-royal-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300" onClick={() => {
            const solucoesSection = document.getElementById('solucoes');
            if (solucoesSection) {
              solucoesSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              <span className="hidden sm:inline">Conheça Nossas Soluções</span>
              <span className="sm:hidden">Nossas Soluções</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
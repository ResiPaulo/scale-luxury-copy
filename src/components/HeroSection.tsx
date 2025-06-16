
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Like não paga boleto. Indicação não escala.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            A única agência Máquina de Vendas especializada em imóveis de alto padrão que combina 
            <strong className="text-white"> estratégia premium, tecnologia avançada e execução impecável</strong> 
            para escalar suas vendas com sofisticação.
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

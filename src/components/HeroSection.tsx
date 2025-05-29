
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-royal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Seu <span className="text-blue-200">VGV</span> Em
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Resultados Extraordinários
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            A única agência Full Sales especializada em imóveis de alto padrão que combina 
            <strong className="text-white"> estratégia premium, tecnologia avançada e execução impecável</strong> 
            para escalar suas vendas com sofisticação.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">R$ 4.6M+</div>
              <div className="text-blue-200">Em VGV Gerado</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-200">Clientes Atendidos</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-8 h-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Taxa de Satisfação</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              Solicite Sua Apresentação Estratégica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossas Soluções
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

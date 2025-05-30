
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Seu <span className="text-blue-300">VGV</span> Em
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Marketing estratégico para corretores que querem 
            <strong className="text-white"> posicionamento real, não estética vazia</strong>. 
            Aqui você aprende o que funciona, não o que é bonito.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-blue-800/60 backdrop-blur-sm border border-blue-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">R$ 500M+</div>
              <div className="text-blue-200">Em VGV Gerado</div>
            </div>
            <div className="bg-blue-800/60 backdrop-blur-sm border border-blue-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-blue-200">Anos de Mercado</div>
            </div>
            <div className="bg-blue-800/60 backdrop-blur-sm border border-blue-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Resultados</div>
              <div className="text-blue-200">Não Promessas</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              Quero Posicionamento Real
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 text-blue-200 hover:bg-blue-800 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              onClick={() => {
                const solucoesSection = document.getElementById('solucoes');
                if (solucoesSection) {
                  solucoesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="text-lg text-blue-200 italic border-l-4 border-blue-600 pl-6">
              "Constância vence carisma. Você não precisa ser criativo, precisa ser constante."
            </blockquote>
            <cite className="text-blue-300 text-sm mt-2 block">- VGV Scale</cite>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Target, Users, Trophy, Lightbulb } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Sobre a <span className="bg-gradient-royal bg-clip-text text-transparent">VGV Scale</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Somos especialistas em estratégias e automações para o mercado imobiliário, acompanhando o cliente <b>da geração do lead até o fechamento da venda</b>.
          </p>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16 px-4">
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Missão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gerar resultados concretos para o setor imobiliário por meio de estratégias digitais integradas e execução eficiente focada em performance de vendas.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Visão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ser referência nacional em soluções inovadoras para aceleração comercial imobiliária, desenvolvendo métodos exclusivos e escaláveis.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Valores</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excelência, transparência, inovação, foco em resultados e uso inteligente de dados como diferencial competitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Target, Users, Trophy, Lightbulb } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Sobre a <span className="bg-gradient-royal bg-clip-text text-transparent">VGV SCALE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Somos uma agência Máquina de Vendas especializada no mercado imobiliário de alto padrão, 
            combinando estratégia premium, tecnologia avançada e execução impecável para 
            transformar leads em vendas extraordinárias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">R$ 500M+</div>
              <div className="text-sm sm:text-base text-gray-600">Em VGV Gerado</div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">12+</div>
              <div className="text-sm sm:text-base text-gray-600">Anos de Mercado</div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-600">Taxa de Satisfação</div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Suporte Dedicado</div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4">
            <InstagramEmbed 
              url="https://www.instagram.com/euarielton/"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossa Missão</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Transformar o mercado imobiliário de alto padrão através de estratégias digitais 
              inovadoras e execução impecável, gerando resultados extraordinários para nossos clientes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossa Visão</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Ser a referência nacional em marketing Máquina de Vendas para o segmento imobiliário premium, 
              reconhecida pela excelência e inovação em cada projeto.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Nossos Valores</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Excelência, transparência, inovação e compromisso com resultados. 
              Acreditamos que cada cliente merece uma estratégia única e personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

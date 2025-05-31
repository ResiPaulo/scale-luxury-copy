import { Target, Users, Trophy, Lightbulb } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="bg-gradient-royal bg-clip-text text-transparent">VGV SCALE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos uma agência Full Sales especializada no mercado imobiliário de alto padrão, 
            combinando estratégia premium, tecnologia avançada e execução impecável para 
            transformar leads em vendas extraordinárias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">R$ 500M+</div>
              <div className="text-gray-600">Em VGV Gerado</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-gray-600">Anos de Mercado</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Dedicado</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <InstagramEmbed 
              url="https://www.instagram.com/euarielton/"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformar o mercado imobiliário de alto padrão através de estratégias digitais 
              inovadoras e execução impecável, gerando resultados extraordinários para nossos clientes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser a referência nacional em marketing Full Sales para o segmento imobiliário premium, 
              reconhecida pela excelência e inovação em cada projeto.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <p className="text-gray-600 leading-relaxed">
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

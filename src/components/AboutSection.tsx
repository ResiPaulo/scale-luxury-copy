
import { Shield, Trophy, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Especialização Premium",
      description: "Foco exclusivo no mercado imobiliário de alto padrão com estratégias refinadas"
    },
    {
      icon: Trophy,
      title: "Resultados Comprovados",
      description: "Track record consistente de crescimento e performance para nossos clientes"
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Profissionais especializados em vendas, marketing e tecnologia avançada"
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Sempre na vanguarda das tendências e tecnologias do mercado digital"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="bg-gradient-royal bg-clip-text text-transparent">VGV SCALE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos a agência de marketing Full Sales que revoluciona o mercado imobiliário de alto padrão, 
            combinando estratégia sofisticada, tecnologia de ponta e execução impecável para transformar 
            sua presença digital em resultados extraordinários.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão: Elevar Seu Padrão de Excelência
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Entendemos que o mercado imobiliário de alto padrão exige mais do que estratégias genéricas. 
              Cada projeto demanda sofisticação, personalização e uma abordagem que reflita o nível de 
              excelência dos seus empreendimentos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Por isso, desenvolvemos metodologias exclusivas que combinam branding premium, 
              tecnologia avançada e inteligência comercial para posicionar sua marca no topo 
              do mercado e acelerar suas vendas com autoridade.
            </p>
            
            <div className="bg-gradient-royal rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Nossa Filosofia</h4>
              <p className="text-blue-100">
                "Não vendemos apenas imóveis, construímos legados. Cada campanha, cada estratégia, 
                cada resultado é pensado para elevar sua marca a um novo patamar de reconhecimento e performance."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Liderado por Especialistas
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa equipe é formada por profissionais com vasta experiência em marketing digital, 
              vendas imobiliárias e tecnologia, garantindo execução de alto nível em cada projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-gray-600">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-gray-600">Especialistas</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-600">Foco em Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Users, Target, TrendingUp, ArrowRight, Presentation, Building2, UserCheck, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainingSection = () => {
  const services = [
    {
      icon: Presentation,
      title: "Palestras Corporativas",
      description: "Palestras exclusivas com foco em inovação, performance comercial e posicionamento de marca para eventos e convenções.",
      features: [
        "Eventos internos e convenções de vendas",
        "Palestras motivacionais e estratégicas",
        "Conteúdo personalizado por empresa",
        "Metodologia comprovada de resultados"
      ]
    },
    {
      icon: Building2,
      title: "Treinamentos In-Company",
      description: "Capacitação especializada para equipes de vendas com metodologia prática e aplicação imediata.",
      features: [
        "Treinamentos itinerantes personalizados",
        "Metodologia para vendas de alto padrão",
        "Desenvolvimento de liderança comercial",
        "Acompanhamento de resultados"
      ]
    },
    {
      icon: UserCheck,
      title: "Mentorias Corporativas",
      description: "Mentoria estratégica coletiva ou individual com aplicação prática para líderes e equipes comerciais.",
      features: [
        "Sessões de mentoria coletiva",
        "Mentoria individual para líderes",
        "Desenvolvimento estratégico",
        "Implementação de melhorias"
      ]
    }
  ];

  const comparisons = [
    {
      without: "Publica só por postar",
      with: "Cria conteúdo com intenção de venda"
    },
    {
      without: "Paga tráfego e torce",
      with: "Investe em anúncios com segmentação real"
    },
    {
      without: "Responde no improviso",
      with: "Usa WhatsApp com funil e automação"
    },
    {
      without: "Leads frios e perdidos",
      with: "Leads qualificados, nutridos e prontos pra fechar"
    },
    {
      without: "Corre atrás de clientes",
      with: "Atrai clientes certos até o fechamento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-royal text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Especialista em Performance Comercial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Palestras, Mentorias e <span className="bg-gradient-royal bg-clip-text text-transparent">Treinamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Leve a performance da sua equipe a outro nível com treinamentos e palestras exclusivas. 
            Conheça os formatos disponíveis para empresas, equipes de vendas e eventos corporativos.
          </p>
          
          {/* Expertise Highlight */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">12+ Anos</div>
                <div className="text-gray-600">de Experiência</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600">Profissionais Treinados</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-royal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">R$ 500M+</div>
                <div className="text-gray-600">em VGV Impactado</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-royal rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-royal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-royal hover:bg-gradient-royal-dark text-white py-3 rounded-xl font-semibold"
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre ${service.title}.`, '_blank')}
                >
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Você decide onde quer estar
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Without Strategy Column */}
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-red-600 mb-4 flex items-center justify-center">
                    <X className="w-6 h-6 mr-2" />
                    Sem estratégia
                  </h4>
                </div>
                {comparisons.map((comparison, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{comparison.without}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* With VGV Scale Column */}
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-green-600 mb-4 flex items-center justify-center">
                    <Check className="w-6 h-6 mr-2" />
                    Com a VGV Scale
                  </h4>
                </div>
                {comparisons.map((comparison, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{comparison.with}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-gradient-royal hover:bg-gradient-royal-dark text-white px-8 py-4 rounded-xl font-bold text-lg"
                onClick={() => window.open('https://wa.me/5544991525829?text=👉 Quero sair da média! Gostaria de saber mais sobre a VGV Scale.', '_blank')}
              >
                👉 Quero sair da média
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-royal rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme Sua Equipe em Uma Máquina de Vendas
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Metodologia exclusiva desenvolvida ao longo de 12 anos no mercado imobiliário de alto padrão. 
            Resultados comprovados em performance comercial e posicionamento estratégico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre palestras e treinamentos corporativos.', '_blank')}
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://instagram.com/vgvscale', '_blank')}
            >
              Ver no Instagram
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-lg font-semibold mb-2">WhatsApp</div>
              <div className="text-blue-200">(44) 99152-5829</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-lg font-semibold mb-2">Instagram</div>
              <div className="text-blue-200">@vgvscale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;


import { Check, Star, Zap, Crown, Rocket, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Start Digital",
      setup: "R$ 1.200",
      monthly: "R$ 2.200",
      icon: Target,
      description: "Estrutura institucional completa",
      features: [
        "Textos para Home, Sobre e Diferenciais",
        "Página de Contato otimizada",
        "Copy refinada e SEO básico",
        "Adaptação à linguagem premium"
      ],
      popular: false
    },
    {
      name: "Smart Brand",
      setup: "R$ 1.600",
      monthly: "R$ 3.600",
      icon: Star,
      description: "Presença digital inteligente",
      features: [
        "Tudo do plano anterior",
        "SEO avançado e CTAs estratégicos",
        "Landing Page padrão",
        "Integração de depoimentos",
        "Otimização para conversão"
      ],
      popular: false
    },
    {
      name: "Máquina de Vendas Pro",
      setup: "R$ 2.200",
      monthly: "R$ 5.400",
      icon: Zap,
      description: "Solução comercial completa",
      features: [
        "Tudo dos planos anteriores",
        "Textos para Social Media",
        "Mentoria estratégica incluída",
        "CRM e estrutura de conversão",
        "Foco específico em VGV"
      ],
      popular: true
    },
    {
      name: "Agente IA Expert",
      setup: "R$ 2.800",
      monthly: "R$ 6.800",
      icon: Rocket,
      description: "Inteligência artificial avançada",
      features: [
        "Pacote completo anterior",
        "Páginas exclusivas para Agentes IA",
        "Copy para SDR, Closer e SAC",
        "Performance otimizada",
        "Integração completa com IA"
      ],
      popular: false
    },
    {
      name: "VGV SCALE Total",
      setup: "R$ 3.200",
      monthly: "R$ 9.400",
      icon: Crown,
      description: "Solução premium completa",
      features: [
        "Máquina de Vendas + Agente IA completo",
        "Textos para portais de imóveis",
        "Treinamentos e conteúdo bônus",
        "Campanha de distribuição premium",
        "Autoridade digital máxima"
      ],
      popular: false,
      premium: true
    }
  ];

  const additionalServices = [
    {
      name: "Distribuição de Conteúdo Premium",
      setup: "R$ 1.000",
      monthly: "R$ 1.800",
      description: "Amplificação estratégica nos canais certos com segmentação e reforço de marca"
    }
  ];

  const specificServices = [
    {
      name: "Mentoria Estratégica Individual",
      price: "R$ 950,00 / sessão",
      description: "Sessão de 1h com foco em posicionamento digital e estratégia de vendas"
    },
    {
      name: "Programa de Mentoria (4 sessões)",
      price: "R$ 3.200,00",
      description: "Acompanhamento estratégico completo com plano de ação personalizado"
    },
    {
      name: "Consultoria de Posicionamento Premium",
      price: "R$ 4.800,00",
      description: "Diagnóstico + proposta de diferenciação de marca e narrativa de autoridade"
    },
    {
      name: "Copy para Página de IA (Agente Individual)",
      price: "R$ 980,00",
      description: "Redação estratégica para um dos agentes: SDR, Closer ou SAC"
    },
    {
      name: "Diagnóstico Estratégico Máquina de Vendas",
      price: "R$ 1.400,00",
      description: "Análise de funil, tráfego, conversão e presença digital"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos de <span className="bg-gradient-royal bg-clip-text text-transparent">Contratação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções completas em Máquina de Vendas, Agente IA e Consultorias Premium. 
            Escolha o plano ideal para transformar sua presença digital e acelerar suas vendas.
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-royal-blue-500 transform scale-105' : ''
                } ${plan.premium ? 'bg-gradient-to-br from-royal-blue-50 to-blue-50 ring-2 ring-royal-blue-600' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-royal-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                {plan.premium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-royal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                    plan.premium ? 'bg-gradient-royal' : 'bg-gradient-royal'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Setup</div>
                    <div className="text-lg font-bold text-gray-900">{plan.setup}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">Mensal</div>
                    <div className="text-2xl font-bold text-royal-blue-600">{plan.monthly}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 rounded-xl font-semibold ${
                    plan.premium 
                      ? 'bg-gradient-royal hover:bg-gradient-royal-dark text-white' 
                      : plan.popular 
                        ? 'bg-royal-blue-500 hover:bg-royal-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}.`, '_blank')}
                >
                  Contratar Agora
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Service */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Serviço Adicional</h3>
          <div className="max-w-2xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Setup: </span>
                    <span className="font-bold text-gray-900">{service.setup}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Mensal: </span>
                    <span className="font-bold text-royal-blue-600">{service.monthly}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-royal hover:bg-gradient-royal-dark text-white py-3 rounded-xl font-semibold"
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre ${service.name}.`, '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Serviços <span className="bg-gradient-royal bg-clip-text text-transparent">Específicos</span>
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Serviços avulsos personalizados para necessidades específicas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specificServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h4>
                <div className="text-2xl font-bold text-royal-blue-600 mb-4">{service.price}</div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <Button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-xl font-semibold"
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre ${service.name}.`, '_blank')}
                >
                  Contratar
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-royal rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Todos os Planos Incluem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Copy Refinada</h4>
              <p className="text-blue-100 text-sm">Textos profissionais e persuasivos</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">SEO Otimizado</h4>
              <p className="text-blue-100 text-sm">Máxima visibilidade online</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Linguagem Premium</h4>
              <p className="text-blue-100 text-sm">Adaptação ao público de alto padrão</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Entrega Completa</h4>
              <p className="text-blue-100 text-sm">Word + Documento pronto para publicação</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://wa.me/5544991525829?text=Olá! Gostaria de conhecer os planos da VGV Scale e receber uma proposta personalizada.', '_blank')}
            >
              Falar com Especialista
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://instagram.com/euarielton', '_blank')}
            >
              Ver Cases no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

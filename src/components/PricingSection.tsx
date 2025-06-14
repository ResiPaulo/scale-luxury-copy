import { Check, Star, Bot, Crown, Rocket, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Máquina de Vendas",
      icon: Target,
      description: "Gestão do processo completo: captação de leads, automação de atendimento, nutrição e fechamento de vendas.",
      features: [
        "Diagnóstico estratégico do funil",
        "Gestão de CRM e conversão",
        "Copy e criativos",
        "Relatórios semanais"
      ]
    },
    {
      name: "Smart Brand",
      icon: Star,
      description: "Branding, tráfego pago, otimização para conversão e automações integradas no posicionamento digital.",
      features: [
        "Landing page e site institucional",
        "Anúncios em Google, Meta e YouTube",
        "Automação de comunicação",
        "Gestão de redes sociais"
      ]
    },
    {
      name: "Agente Qualificador de Leads",
      icon: Bot,
      description: "Agente digital integrado automatizando triagem e qualificação de leads com direcionamento eficiente.",
      features: [
        "Atendimento imediato 24/7",
        "Cadastro automático de leads",
        "Integração WhatsApp e Meta",
        "Relatórios de performance"
      ]
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
            Soluções completas para aceleração de vendas no mercado imobiliário.<br />
            <b>Planos sob consulta. Entre em contato para mais informações.</b>
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-royal">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
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
                  className="w-full py-3 rounded-xl font-semibold bg-gradient-royal hover:bg-gradient-royal-dark text-white"
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de consultar os planos.`, '_blank')}
                >
                  Consultar Plano
                </Button>
              </div>
            );
          })}
        </div>

        {/* Adicional */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Serviço Adicional</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Distribuição de Conteúdo</h4>
              <p className="text-gray-600 mb-4">Amplifique sua presença com campanhas personalizadas de segmentação e reforço de marca.</p>
              <Button 
                className="w-full bg-gradient-royal hover:bg-gradient-royal-dark text-white py-3 rounded-xl font-semibold"
                onClick={() => window.open("https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre Distribuição de Conteúdo.", "_blank")}
              >
                Solicitar Informação
              </Button>
              <div className="text-xs text-gray-400 text-center mt-2">Para mais informações sobre serviços adicionais, entre em contato.</div>
            </div>
          </div>
        </div>

        {/* CTA Todos os planos incluem (bug fix: padding, cor) */}
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
              <p className="text-blue-100 text-sm">Visibilidade orgânica ampliada</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Linguagem Alinhada ao Público</h4>
              <p className="text-blue-100 text-sm">Adaptação de tom de voz para o cliente ideal</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Entrega Completa</h4>
              <p className="text-blue-100 text-sm">Documentos prontos para publicação</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://wa.me/5544991525829?text=Olá! Gostaria de conhecer os planos VGV Scale.', '_blank')}
            >
              Falar com Especialista
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 px-8 py-4 rounded-xl font-bold text-lg"
              onClick={() => window.open('https://instagram.com/vgvscale', '_blank')}
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

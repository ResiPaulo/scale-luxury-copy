import { 
  Target, 
  Share2, 
  MessageSquare, 
  Globe, 
  Bot, 
  GraduationCap,
  TrendingUp,
  Users,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "Máquina de Vendas",
      description: "Gestão integrada para captação, nutrição e fechamento, com automação desde a geração do lead até a venda.",
      features: [
        "Diagnóstico de funil e análise de concorrência",
        "Gestão e automação de leads",
        "Relatórios semanais",
        "Copy e criativos personalizados"
      ]
    },
    {
      icon: Share2,
      title: "Smart Brand",
      description: "Presença digital estratégica: branding, tráfego pago, landing pages, otimização para conversão e automações integradas.",
      features: [
        "Gestão de Instagram, Facebook, YouTube e TikTok",
        "Landing pages e site institucional otimizados",
        "Anúncios Google Ads, Meta e YouTube",
        "Automação de atendimento e CRM"
      ]
    },
    {
      icon: Bot,
      title: "Agente Qualificador de Leads",
      description: "Atendimento automatizado, qualificação rápida e direcionamento inteligente para ampliar taxa de conversão.",
      features: [
        "SDR e Closer automatizados",
        "Integração de WhatsApp e Meta",
        "Atendimento 24/7 eficiente",
        "Agendamento e cadastro automático"
      ]
    }
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Soluções <span className="bg-gradient-royal bg-clip-text text-transparent">VGV Scale</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Estratégia digital de ponta a ponta: da geração do lead até o fechamento da venda.<br />
            Soluções para times comerciais que buscam mais operação e mais resultado.
          </p>
        </div>

        {/* Solutions cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-royal rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6">
                <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{solution.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-royal-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

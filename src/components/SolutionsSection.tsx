
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
      title: "Tráfego Pago de Alta Performance",
      description: "Estratégias avançadas em Meta, Google Ads e YouTube Ads com foco em ROI e conversão premium",
      features: ["Diagnóstico e análise de concorrência", "Criativos personalizados", "Automação de formulários", "Relatórios semanais"]
    },
    {
      icon: Share2,
      title: "Social Media Estratégico",
      description: "Presença digital sofisticada que vende, posiciona e eleva a percepção da sua marca",
      features: ["Instagram, Facebook, YouTube e TikTok", "Conteúdos que convertem", "Design refinado", "Copy comercial"]
    },
    {
      icon: MessageSquare,
      title: "CRM & Canais de Comunicação",
      description: "Sistema inteligente integrado que automatiza e otimiza toda jornada do lead",
      features: ["CRM integrado ao tráfego", "WhatsApp e Inbox Meta", "Automação completa", "Gestão de leads via Trello"]
    },
    {
      icon: Globe,
      title: "Sites e Landing Pages",
      description: "Desenvolvimento de alto impacto com design elegante e performance SEO otimizada",
      features: ["Site institucional premium", "Portal de imóveis", "Landing pages de conversão", "SEO avançado"]
    },
    {
      icon: Bot,
      title: "Agente IA Premium",
      description: "Inteligência artificial aplicada à venda com naturalidade e eficiência 24/7",
      features: ["Agente SDR qualifica em minutos", "Agente Closer persuasivo", "Agente SAC 24/7", "Integração completa"]
    },
    {
      icon: GraduationCap,
      title: "Mentoria e Treinamento",
      description: "Desenvolvimento estratégico personalizado para maximizar performance da sua equipe",
      features: ["Mentorias personalizadas", "Treinamentos práticos", "Acompanhamento semanal", "Foco em resultados"]
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções <span className="bg-gradient-royal bg-clip-text text-transparent">Full Sales</span> Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estratégia digital de ponta a ponta: do tráfego ao fechamento. 
            Solução completa para times comerciais exigentes com performance elevada, 
            branding forte e operação inteligente.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-royal rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-royal-blue-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Sales Highlight */}
        <div className="bg-gradient-royal rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Full Sales para o Mercado Imobiliário de Alto Padrão
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A única solução completa que integra todas as ferramentas e estratégias necessárias 
              para dominar o mercado premium e acelerar suas vendas com sofisticação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Performance Elevada</h4>
              <p className="text-blue-100">Resultados mensuráveis e crescimento consistente</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Branding Forte</h4>
              <p className="text-blue-100">Posicionamento premium e autoridade de marca</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Operação Inteligente</h4>
              <p className="text-blue-100">Automação e tecnologia de ponta</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              Desperte Sua Autoridade Digital
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

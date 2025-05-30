
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
      title: "Tráfego que Converte",
      description: "Estratégias diretas em Meta e Google Ads. Sem enrolação, só resultados mensuráveis.",
      features: ["Análise real de concorrência", "Criativos que vendem", "Automação inteligente", "Relatórios objetivos"]
    },
    {
      icon: Share2,
      title: "Posicionamento Digital",
      description: "Presença que vende, não que só aparece. Conteúdo com propósito comercial real.",
      features: ["Instagram, Facebook, YouTube", "Conteúdo estratégico", "Design profissional", "Copy que converte"]
    },
    {
      icon: MessageSquare,
      title: "Sistema de Vendas",
      description: "CRM integrado que automatiza sem perder o toque humano na conversão.",
      features: ["CRM profissional", "WhatsApp integrado", "Automação inteligente", "Gestão eficiente"]
    },
    {
      icon: Globe,
      title: "Sites que Vendem",
      description: "Desenvolvimento focado em conversão, não apenas em aparência bonita.",
      features: ["Site institucional", "Portal otimizado", "Landing pages", "SEO estratégico"]
    },
    {
      icon: Bot,
      title: "IA Aplicada às Vendas",
      description: "Inteligência artificial que qualifica e converte 24/7 sem perder naturalidade.",
      features: ["Qualificação automática", "Abordagem persuasiva", "Atendimento constante", "Integração total"]
    },
    {
      icon: GraduationCap,
      title: "Mentoria Estratégica",
      description: "Desenvolvimento real para quem quer resultados, não motivação vazia.",
      features: ["Mentoria individual", "Treinamento prático", "Acompanhamento sério", "Foco em performance"]
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções que <span className="text-gray-700">Funcionam</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Marketing digital focado em resultados reais. Do tráfego ao fechamento, 
            sem enrolação e sem promessas vazias. Só o que comprovadamente funciona.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="bg-gray-800 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-gray-800 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Truth Section */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              A Verdade Sobre Marketing Imobiliário
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "Postar sem posicionar é jogar conteúdo no lixo. Quem não tem coragem de defender 
              o que pensa, não tem marca — tem conta no Instagram."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Resultados Reais</h4>
              <p className="text-gray-300">Performance mensurada, não achismo</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Posicionamento Sério</h4>
              <p className="text-gray-300">Autoridade construída com trabalho</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Estratégia Clara</h4>
              <p className="text-gray-300">Cada ação tem propósito definido</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/5544991525829', '_blank')}
            >
              Quero Sair do Raso
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;


import { 
  Award, 
  Target, 
  Users, 
  Zap, 
  CheckCircle, 
  Star,
  TrendingUp,
  Shield
} from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Award,
      title: "Especialização Exclusiva",
      description: "Foco 100% no mercado imobiliário de alto padrão com metodologias desenvolvidas especificamente para este segmento premium."
    },
    {
      icon: Zap,
      title: "Tecnologia + Estética",
      description: "Perfeita harmonia entre performance técnica e refinamento visual, garantindo resultados sem abrir mão da sofisticação."
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Time de especialistas com expertise comprovada em vendas, branding premium e tecnologia avançada."
    },
    {
      icon: Target,
      title: "Estratégias Personalizadas",
      description: "Cada projeto é único, com estratégias desenvolvidas sob medida e acompanhamento semanal detalhado."
    },
    {
      icon: Shield,
      title: "Atendimento Premium",
      description: "Relacionamento próximo, comunicação direta e entregas com padrão de excelência que você espera."
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Track record consistente de crescimento, com cases de sucesso e resultados mensuráveis."
    }
  ];

  const benefits = [
    "Aumento médio de 300% no volume de leads qualificados",
    "Redução de 60% no tempo de conversão",
    "Elevação significativa da percepção de marca",
    "ROI positivo já nos primeiros 60 dias",
    "Automação completa dos processos comerciais",
    "Posicionamento como autoridade no mercado"
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-royal bg-clip-text text-transparent">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O que nos torna a escolha número 1 para corretores, imobiliárias e incorporadoras 
            que buscam excelência, performance e sofisticação em suas estratégias digitais.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-royal rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <differential.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{differential.title}</h3>
              <p className="text-gray-600 leading-relaxed">{differential.description}</p>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Benefits */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Resultados que Nossos Clientes Alcançam
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Quando você escolhe a VGV SCALE, não está apenas contratando uma agência. 
                Está investindo em uma parceria estratégica que transforma sua operação.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Stats */}
            <div className="bg-gradient-royal p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Números que Impressionam</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">R$ 4.6M+</div>
                  <div className="text-blue-200">VGV Gerado</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-blue-200">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-200">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Suporte</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-center text-blue-100">
                "A VGV SCALE transformou completamente nossa operação. Em 5 meses, 
                geramos mais de R$ 4.6 milhões em VGV com estratégias premium."
              </p>
              <p className="text-center text-sm text-blue-200 mt-2">
                - Cliente VGV SCALE
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Nossa Metodologia Exclusiva</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-gradient-royal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Diagnóstico</h4>
              <p className="text-gray-600 text-sm">Análise profunda do seu negócio e mercado</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-royal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Estratégia</h4>
              <p className="text-gray-600 text-sm">Desenvolvimento de plano personalizado</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-royal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Execução</h4>
              <p className="text-gray-600 text-sm">Implementação com excelência técnica</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-royal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Otimização</h4>
              <p className="text-gray-600 text-sm">Monitoramento e melhoria contínua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

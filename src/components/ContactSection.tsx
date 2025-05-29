
import { Phone, Mail, Instagram, MapPin, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const plans = [
    {
      name: "Start Digital",
      price: "R$ 2.200",
      setup: "R$ 1.200",
      features: [
        "Estrutura institucional completa",
        "Textos para Home, Sobre, Diferenciais",
        "Página de Contato otimizada",
        "SEO básico incluído"
      ]
    },
    {
      name: "Smart Brand",
      price: "R$ 3.600",
      setup: "R$ 1.600",
      popular: true,
      features: [
        "Tudo do plano anterior",
        "SEO avançado",
        "CTAs estratégicos",
        "Landing Page padrão",
        "Integração de depoimentos"
      ]
    },
    {
      name: "Full Sales Pro",
      price: "R$ 5.400",
      setup: "R$ 2.200",
      features: [
        "Tudo dos planos anteriores",
        "Textos para Social Media",
        "Estrutura de Mentoria",
        "CRM e automação",
        "Foco total em conversão"
      ]
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme Seu <span className="bg-gradient-royal bg-clip-text text-transparent">VGV</span> Hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Solicite sua apresentação estratégica e descubra como a VGV SCALE pode 
            elevar sua operação ao próximo nível de sofisticação e performance.
          </p>
        </div>

        {/* Plans Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Planos de Contratação Premium
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular ? 'border-royal-blue-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-royal text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="text-3xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-600">+ Setup {plan.setup}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-royal hover:bg-gradient-royal-dark text-white' 
                      : 'border-2 border-royal-blue-500 text-royal-blue-600 hover:bg-royal-blue-50'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => window.open(`https://wa.me/5544991525829?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}`, '_blank')}
                >
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Entre em Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">(44) 99152-5829</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Instagram</div>
                  <div className="text-gray-600">@euarielton</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-royal rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário de Atendimento</div>
                  <div className="text-gray-600">Segunda a Sexta: 8h às 18h</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Próximos Passos</h4>
              <ol className="space-y-2 text-gray-600">
                <li>1. Entre em contato via WhatsApp</li>
                <li>2. Agende sua apresentação estratégica</li>
                <li>3. Receba proposta personalizada</li>
                <li>4. Inicie sua transformação digital</li>
              </ol>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-royal rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Solicite Sua Apresentação Estratégica</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Descubra como podemos transformar sua operação em uma máquina de vendas 
              sofisticada e de alta performance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                <span className="text-blue-100">Diagnóstico completo gratuito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                <span className="text-blue-100">Proposta personalizada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                <span className="text-blue-100">Apresentação sem compromisso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                <span className="text-blue-100">Consulta estratégica inclusa</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full bg-white text-royal-blue-600 hover:bg-blue-50 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/5544991525829?text=Olá! Gostaria de solicitar minha apresentação estratégica da VGV SCALE.', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Quero Minha Apresentação Agora
            </Button>

            <p className="text-center text-blue-200 text-sm mt-4">
              Resposta em até 2 horas • Atendimento especializado
            </p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Serviços Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Mentoria Individual</h4>
              <div className="text-2xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">
                R$ 950
              </div>
              <p className="text-gray-600 text-sm">Sessão de 1h</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Programa Mentoria</h4>
              <div className="text-2xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">
                R$ 3.200
              </div>
              <p className="text-gray-600 text-sm">4 sessões</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Consultoria Premium</h4>
              <div className="text-2xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">
                R$ 4.800
              </div>
              <p className="text-gray-600 text-sm">Posicionamento</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Diagnóstico Full</h4>
              <div className="text-2xl font-bold bg-gradient-royal bg-clip-text text-transparent mb-2">
                R$ 1.400
              </div>
              <p className="text-gray-600 text-sm">Análise completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

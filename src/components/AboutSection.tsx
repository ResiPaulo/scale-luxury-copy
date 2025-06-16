import { Target, Users, Trophy, Lightbulb, Settings, Megaphone, Bot, Palette, Filter, GraduationCap } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

const AboutSection = () => {
  const services = [
    {
      icon: Settings,
      title: "POSICIONAMENTO DIGITAL",
      items: [
        "Criação e reformulação de perfis no Instagram",
        "Bio estratégica e destaques personalizados", 
        "Planejamento de conteúdo (topo, meio e fundo de funil)",
        "Roteiros para Reels, stories e carrosséis",
        "Estratégia de branding e autoridade digital"
      ]
    },
    {
      icon: Megaphone,
      title: "CRIAÇÃO DE CAMPANHAS",
      items: [
        "Anúncios no Google (rede de pesquisa e display)",
        "Meta Ads (Facebook + Instagram) com foco em geração de leads",
        "Segmentação por região, faixa de renda e intenção de compra",
        "Testes A/B e otimização contínua",
        "Gestão de verba e relatórios personalizados"
      ]
    },
    {
      icon: Bot,
      title: "AUTOMAÇÃO E CRM",
      items: [
        "Implantação de CRM imobiliário (Facilita, Construtor de Vendas etc.)",
        "Criação de funis automatizados por WhatsApp, e-mail e landing page",
        "Atendente digital qualificado com respostas personalizadas",
        "Segmentação de leads e lead scoring",
        "Estruturação de listas de transmissão e status estratégicos"
      ]
    },
    {
      icon: Palette,
      title: "CRIATIVOS DE ALTA PERFORMANCE",
      items: [
        "Design de peças para anúncios e redes sociais",
        "Criação de roteiros de vídeo para corretores e empreendimentos",
        "Edições para Reels, YouTube Shorts e TikTok"
      ]
    },
    {
      icon: Filter,
      title: "FUNIS COMPLETOS",
      items: [
        "Landing pages de alta conversão",
        "Formulários com perguntas inteligentes para qualificação de leads",
        "Páginas de vendas e páginas de lançamento",
        "Campanhas para imóveis prontos, na planta ou de temporada"
      ]
    },
    {
      icon: GraduationCap,
      title: "CONSULTORIA E TREINAMENTOS",
      items: [
        "Mentorias individuais para corretores",
        "Treinamento de equipe de vendas e SDRs",
        "Palestras e workshops em eventos imobiliários",
        "Consultoria para lançamentos, house de vendas e campanhas regionais"
      ]
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Sobre a VGV Scale */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Sobre a <span className="bg-gradient-royal bg-clip-text text-transparent">VGV Scale</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Somos especialistas em estratégias e automações para o mercado imobiliário, acompanhando o cliente <b>da geração do lead até o fechamento da venda</b>.
          </p>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20 px-4">
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Missão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gerar resultados concretos para o setor imobiliário por meio de estratégias digitais integradas e execução eficiente focada em performance de vendas.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Visão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ser referência nacional em soluções inovadoras para aceleração comercial imobiliária, desenvolvendo métodos exclusivos e escaláveis.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-royal rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Valores</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Excelência, transparência, inovação, foco em resultados e uso inteligente de dados como diferencial competitivo.
            </p>
          </div>
        </div>

        {/* Nova Seção - O que entregamos */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que <span className="bg-gradient-royal bg-clip-text text-transparent">entregamos</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Somos a agência 100% focada no mercado imobiliário. E isso muda tudo.
            </p>
            <p className="text-lg text-gray-500">
              Nossos serviços são pensados para quem quer resultado real:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-royal rounded-lg w-10 h-10 flex items-center justify-center mr-3">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-royal-blue-600 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Nova Seção - Quem está por trás da VGV Scale */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quem está por trás da <span className="bg-gradient-royal bg-clip-text text-transparent">VGV Scale</span>?
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  Especialista em marketing imobiliário, ajuda corretores a se posicionarem com autoridade no digital e venderem mais através de estratégia, conteúdo e tráfego. Autor do livro <strong>Posicionamento na Prática</strong>.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/4404d43d-6745-4fba-b160-8a6b720293c7.png" 
                  alt="Livro Posicionamento na Prática - Arielton Pires" 
                  className="w-64 h-auto object-contain shadow-xl rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

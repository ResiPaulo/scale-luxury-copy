
import { Shield, Trophy, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const principles = [
    {
      icon: Shield,
      title: "Verdade Acima de Tudo",
      description: "O que é dito é o que é vivido. Sem enfeite, sem personagem."
    },
    {
      icon: Trophy,
      title: "Coragem pra se Posicionar",
      description: "Mesmo quando é desconfortável. A coragem sempre vem antes do respeito."
    },
    {
      icon: Users,
      title: "Disciplina e Constância",
      description: "Aqui não se depende de motivação. Depende de método e repetição consciente."
    },
    {
      icon: Zap,
      title: "Responsabilidade com o Mercado",
      description: "Cada movimento molda a percepção do mercado. Isso é sério."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-gray-700">Arielton Pires</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            No mercado imobiliário, onde muitos ainda se escondem atrás de frases bonitas e promessas vazias, 
            Arielton Pires é o contraste. Uma presença firme, direta e incômoda — no melhor sentido da palavra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Mais que Estrategista: Um Mentor de Verdade
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ele é a verdade que o corretor precisa ouvir. É a estrutura que falta nas redes. 
              É o posicionamento onde só existe improviso.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Palestrante, escritor e referência quando o assunto é posicionamento e autoridade no mercado, 
              sua marca não nasce da teoria, mas da prática. Não do palco, mas da rua.
            </p>
            
            <div className="bg-gray-800 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Missão Clara</h4>
              <p className="text-gray-300">
                "Formar profissionais do mercado imobiliário com visão estratégica, autoridade real 
                e mentalidade de dono. Posicionamento não é sobre estética — é sobre ter clareza, 
                coragem e constância."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h4>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Um Movimento no Mercado Imobiliário
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A marca Arielton Pires representa um movimento de clareza, postura e constância. 
              Porque aqui, estética não é prioridade. É consequência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">Clareza</div>
              <div className="text-gray-600">Não promessas vazias</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">Coragem</div>
              <div className="text-gray-600">Para se posicionar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2">Constância</div>
              <div className="text-gray-600">Que vence carisma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

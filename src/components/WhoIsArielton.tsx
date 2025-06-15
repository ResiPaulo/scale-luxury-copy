
import { Instagram } from "lucide-react";

const WhoIsArielton = () => {
  return (
    <section id="arielton" className="bg-white py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <img 
          src="/lovable-uploads/a7882915-275b-4c3c-b6de-609d76c9d408.png" 
          alt="Arielton Pires" 
          className="rounded-2xl w-48 h-48 md:w-56 md:h-56 object-cover shadow-xl flex-shrink-0" 
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">De dentro da imobiliária para mentor de corretores em todo o Brasil</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            Durante 7 anos, vivi o mercado imobiliário por dentro. Trabalhei em uma das maiores imobiliárias do RJ, onde criei estratégias, formei equipes e entendi o que realmente funciona. Hoje, sou estrategista digital. Atendo corretores, imobiliárias e construtoras em todo o Brasil, ajudando profissionais a se posicionarem, gerarem autoridade e venderem com previsibilidade no digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsArielton;

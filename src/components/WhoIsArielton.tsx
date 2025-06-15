
import { Instagram } from "lucide-react";

const WhoIsArielton = () => {
  return (
    <section id="arielton" className="bg-white py-14 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        {/* Foto do Arielton */}
        <img 
          src="/lovable-uploads/a7882915-275b-4c3c-b6de-609d76c9d408.png" 
          alt="Arielton Pires apresentando em evento" 
          className="rounded-xl w-full md:w-80 lg:w-96 h-auto object-cover shadow-lg" 
        />
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">De dentro da imobiliária para mentor de corretores em todo o Brasil</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl">
            Durante 7 anos, vivi o mercado imobiliário por dentro. Trabalhei em uma das maiores imobiliárias do RJ, onde criei estratégias, formei equipes e entendi o que realmente funciona. Hoje, sou estrategista digital. Atendo corretores, imobiliárias e construtoras em todo o Brasil, ajudando profissionais a se posicionarem, gerarem autoridade e venderem com previsibilidade no digital.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl">
            Arielton Pires é fundador da VGV Scale, especialista em estratégias digitais para o setor imobiliário, com <span className="font-semibold text-royal-blue-600">12+ anos de experiência</span> transformando resultados. 
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl">
            É autor do livro <span className="font-semibold text-royal-blue-600">Posicionamento na Prática</span>, lançado em evento exclusivo para corretores e gestores imobiliários.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            href="https://instagram.com/euarielton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-royal-blue-600 to-blue-400 hover:from-royal-blue-700 hover:to-blue-500 px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all"
          >
            <Instagram className="w-5 h-5" />
            Instagram do Arielton
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsArielton;
